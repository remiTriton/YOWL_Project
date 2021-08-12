

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
          Authorization: "Bearer "+localStorage.getItem('token')
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
          Authorization : "Bearer "+ localStorage.getItem("token"),
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

          Authorization:"Bearer "+ localStorage.getItem("token")
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
      await fetch("http://127.0.0.1:8000/api/comment/" + comments.id + "/put", {
        method: "PUT",
        body: JSON.stringify(comments),
        "headers": {
          "Content-type": "application/json",

          Authorization: "Bearer "+ localStorage.getItem("token")
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
      await fetch("http://127.0.0.1:8000/api/comment/"+id+"/admin", {
        method: "DELETE",
        "headers": {
          Authorization: "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiMWFlYTY3YjQ5ODc4ODg2MTlmYThkNDcxNGFmNDQ4NGM1YmYyYjFlZmM4MDM3MmRkM2QwYzgxNzcwNDcyZGE5ZTU5NTY1ZTM0ZTc4NTViZTYiLCJpYXQiOjE2Mjg2MDA1MzMuNjc3MTQ0LCJuYmYiOjE2Mjg2MDA1MzMuNjc3MTQ3LCJleHAiOjE2NjAxMzY1MzMuNjY2Nzc2LCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.PCVTNR5y5xA-9eASKTR7ZcO53iVCpOWD4JAl7H6KsWNLvdkwxZf8O6cMZAXwEg2kf-m2ZBPN-jm2qAEgheqcSo_VEmK-JpVPLI4M_NhVyKlD7hPQQT3IncZUdTxILLsrCTvxetyt3_VHoTIuFe2laHbqv8mqztaPF7ALKrZJoJ7HucE2TXyPXaDT-ZxntxGJdV9-HPbR5N5xBjU7FfNWUtvBMUzlkKUNYx5QnvhbbgCUgFlWPkfxDx5ZJro4Od7C0Po8yP2mwTNq8R25EaxZvlS46dZX2QgVv5y9WvFEOUhUlUlKfvX8YQFcaCr1NF28bSrViGw83kh522eBGB98T9oktN_VVLvgoVfPG338OfdlwYXVmYERNzAV5ZSUyrAMsrMyyKstt0YhVC9fl_mr38iULrjxs5hXgjdFcqbuv8LWF9iMIRmN2UQWfkn32qCNPCypYbpnNoz07m8v2kbKoaw2y86YmMwUpuIqNWWv11HE-4lPMU_CVCH0m5A2x0Imrb2T2sDlF_vJHpFUzh-YqG_WFbIVYbEsLQhWetglRukQ_ODZ1XVJRVWP-0zPHjJ1KHhIA8hEYVpSW9vAMWcTCOgh_5tZjiN1QGbY6U_M2y1C32q8-ErlwOk3UFEI3h4IHS5zX6OczdAl-chXKrH97Z-p4OZBpuTp9YB2-XCLYTc"
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