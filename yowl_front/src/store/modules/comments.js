

const comments = {
  name: "comments",
  namespaced: true,
  state: {
    comments: [],
  },

  mutations: {
    setCommentList(state, comments) {
      state.comments = comments;
    },
  },

  actions: {


    //ON RECUPERE LES COMS

    async fetchComments(context) {
      const res = await fetch("http://127.0.0.1:8000/api/comments", {
        "method": "GET",
        "headers": {
          Authorization: "Bearer " + localStorage.getItem('token')
        }
      })
      const data = await res.json();
      context.commit("setCommentList", data.data);
      console.log(data.data)
    },
    // ON RAJOUTE UN COM
    async addComment(context, posta) {
      const res = await fetch("http://127.0.0.1:8000/api/comments", {
        method: "POST",
        body: JSON.stringify(posta),
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
          "Content-type": "application/json"
        },
      });

      const data = await res.json();

      context.commit("setCommentList", [
        ...context.state.comments,
        {
          id: data.post,
          content: posta.content,
        },
      ]);

    },

    //CRUD UPDATE
    async updateCommentsAdmin(context, comments) {
      await fetch("http://127.0.0.1:8000/api/comment/" + comments.id + "/admin", {
        method: "PUT",
        body: JSON.stringify(comments),
        "headers": {
          "Content-type": "application/json",

          Authorization: "Bearer " + localStorage.getItem("token")
        }
      },
      );
      const pos = context.state.comments.findIndex(
        (p) => p.id === comments.id
      );
      if (pos > -1) {
        // remove from the store
        context.state.comments.splice(pos, 1, comments);
      }
      context.commit("setCommentList", context.state.comments);
    },

    //user modifie son propre com

    async updateComments(context, comments) {
      await fetch("http://127.0.0.1:8000/api/comment/" + comments.id , {
        method: "PUT",
        body: JSON.stringify(comments),
        "headers": {
          "Content-type": "application/json",

          Authorization: "Bearer " + localStorage.getItem("token")
        }
      },
      );
      const pos = context.state.comments.findIndex(
        (p) => p.id === comments.id
      );
      if (pos > -1) {
        // remove from the store
        context.state.comments.splice(pos, 1, comments);
      }
      context.commit("setCommentList", context.state.comments);
    },

    //DELETE COMMENT CRUD 
    async deleteComAdmin(context, id) {
      await fetch("http://127.0.0.1:8000/api/comment/" + id + "/admin", {
        method: "DELETE",
        "headers": {
          Authorization: "Bearer "+ localStorage.getItem('token')
        }
      });

      const pos = context.state.comments.findIndex((p) => p.id === id);
      if (pos > -1) {
        context.state.comments.splice(pos, 1);
      }
      context.commit("setCommentList", context.state.comments);
    },
    //DELETE COMMENT CRUD 
    async deleteCom(context, id) {
      await fetch("http://127.0.0.1:8000/api/comment/" + id , {
        method: "DELETE",
        "headers": {
          Authorization: "Bearer " + localStorage.getItem("token"),
        }
      });

      const pos = context.state.comments.findIndex((p) => p.id === id);
      if (pos > -1) {
        context.state.comments.splice(pos, 1);
      }
      context.commit("setCommentList", context.state.comments);
    },
  }
}
export default comments;