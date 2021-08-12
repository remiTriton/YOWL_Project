

const users = {
    name: "users",
    namespaced: true,
    state: {
        users: [],
        token: null
    },
    mutations: {
        setUsersList(state, users) {
            state.users = users;
        },
        setToken(state, token) {
          state.token = token;
      },
    },
    actions: {

        //ON RECUPERE LES USERS

        async fetchUsers(context) {
            const res = await fetch("http://127.0.0.1:8000/api/register", {
                "method": "GET",
                "headers": {
                    Authorization: "Bearer "+localStorage.getItem('token')
                }
            })
            const data = await res.json();
            context.commit("setUsersList", data);
            console.log(data)
            console.log(users)

        },

          //  ON RAJOUTE UN USERS //
        async addUser(context, posta) {
            const res = await fetch("http://127.0.0.1:8000/api/register", {
                method: "POST",
                body: JSON.stringify(posta),
                headers: {
                    "Content-type": "application/json"
                },
            });

            const data = await res.json();

            context.commit("setUsersList", [
                ...context.state.users,
                {
                    id: data.post,
                    name: posta.name,
                    email: posta.email,
                    password: posta.password
                },
            ]);
            
        },
//ON SUPPRIME UN USER ///
async deleteUser(context, id) {
    await fetch("http://127.0.0.1:8000/api/register/"+id+"/delete", {
      method: "DELETE",
      "headers": {
        Authorization: "Bearer "+localStorage.getItem('token')
    }
    });

    const pos = context.state.users.findIndex((p) => p.id === id);
    if (pos > -1) {
      context.state.users.splice(pos, 1);
    }
    context.commit("setUsersList", context.state.users);
  },

  //UPDATE USER CRUD
  async updateUser(context, users) {
    await fetch("http://127.0.0.1:8000/api/register/"+users.id+"/put", {
      method: "PUT",
      body: JSON.stringify(users),
      "headers": {
        "Content-type": "application/json",

        Authorization: "Bearer "+localStorage.getItem('token')
    }
      },
    );
    const pos = context.state.users.findIndex(
      (p) => p.id === users.id
    );
    if (pos > -1) {
      // remove from the store
      context.state.users.splice(pos, 1, users);
    }
    context.commit("setUsersList", context.state.users);
  },

  //login user, on enregistre le token dans le localstorage!//

  async login(context, posta){
   const res = await fetch ("http://127.0.0.1:8000/api/login",{
      method : 'POST',
      body: JSON.stringify(posta),
      headers:{
       'Content-Type': "application/json"
      }
    })
      
    const data = await res.json();
    localStorage.setItem('token',data.data.token)
    context.commit('setToken',data.data.token)
      console.log(data)
  },
//on supprime le toto lors de la déco tavu

   logout(context){
      localStorage.removeItem('token');
      context.commit('setToken', null);
  },

  
},

    modules: {
    }
}

export default users;
