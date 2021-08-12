const products = {
  name: "products",
  namespaced: true,
  state: {
    animes: [],
    comics: [],
  },

  mutations: {

    setAnimeList(state, animes) {
      state.animes = animes;
    },
    setComicsList(state, comics) {
      state.comics = comics;
    },
  },

  actions: {
    async fetchComics(context) {
      const res = await fetch(
        "https://www.superheroapi.com/api.php/10165307390300231/search/T"
      );
      const data = await res.json();
      context.commit("setComicsList", data.results);
      console.log(data.results);
    },

    async fetchAComic(context, id) {
      const res = await fetch(
        "https://www.superheroapi.com/api.php/10165307390300231/" + id
      );
      const data = await res.json();
      context.commit("setComicsList", [data]);
      console.log(data);
    },

    async fetchAnimes(context) {
      const res = await fetch("https://api.jikan.moe/v3/genre/anime/1/1");
      const data = await res.json();
      context.commit("setAnimeList", data.anime);
      console.log(data.anime);
    },
    async fetchAnAnime(context, id) {
      const res = await fetch("https://api.jikan.moe/v3/anime/" + id);
      const data = await res.json();

      context.commit("setAnimeList", [data]);

      console.log([data]);
    },

    async search(context, query) {
      const res = await fetch(
        "https://api.jikan.moe/v3/search/anime?q=" + query
      );
      const data = await res.json();
      if (data.results == null) {
        console.log(data.results);

        console.log("nothing find");
      } else {
        context.commit("setAnimeList", data.results);
      }

      const result = await fetch(
        "https://www.superheroapi.com/api.php/10165307390300231/search/" + query
      );
      const datat = await result.json();
      if (datat.results == null) {
        console.log(data.results);
        console.log("nothing find");
      } else {
        context.commit("setComicsList", datat.results);
      }

      console.log(datat.results);
    },
  },
};
export default products;
