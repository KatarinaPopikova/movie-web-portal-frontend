<template>
  <div>
    <div
      class="fixed top-0 left-0 right-0 bg-cover bg-center bg-no-repeat -z-10 w-screen h-screen"
      :style="`background-image: url(${backdropUrlFull})`"
    ></div>
    <div class="fixed top-0 w-screen h-screen -z-30 bg-gray-400"></div>
    <div class="sm:pt-[40vh] pt-[25vh]">
      <div class="bg-blur relative">
        <div class="mt-20 flex justify-center">
          <div
            class="max-w-screen-xl flex lg:flex-row flex-col lg:w-fit justify-between items-center"
          >
            <img
              class="rounded-lg shadow-lg sm:w-96 w-80 pb-10"
              :src="posterUrlFull"
              alt="backdrop_path"
            />
            <div class="flex flex-col justify-evenly h-full">
              <div></div>
              <div class="text-white pl-10">
                <a :href="`${imdbUrl}/${movieInfo.imdb_id}`">
                  <header
                    class="pb-5 flex justify-between items-center content-center"
                  >
                    <h1 class="text-4xl font-bold opacity-100">
                      {{ movieInfo.original_title }}
                    </h1>
                    <a v-if="movieInfo.homepage" :href="movieInfo.homepage">
                      <font-awesome-icon
                        icon="fa-solid fa-house-laptop"
                        class="w-16 h-16 pl-2"
                      />
                    </a>
                  </header>
                </a>

                <div>
                  <p class="max-w-screen-sm text-xl px-3 sm:pl-14 pb-4">
                    {{ movieInfo.plot }}
                  </p>
                  <div class="flex justify-between text-lg">
                    <span>Time: {{ movieInfo.runTimeStr }}</span>
                    <span>{{ movieInfo.release_date }}</span>
                  </div>
                  <div class="flex p-3 flex-wrap">
                    <h4 class="font-semibold text-xl pr-2">Genres:</h4>
                    <p
                      v-for="(genre, index) in movieInfo.genres"
                      :key="index"
                      class="pr-2 whitespace-nowrap"
                    >
                      | {{ genre }}
                    </p>
                  </div>
                </div>
              </div>
              <div class="text-5xl text-white text-right">
                <span class="text-3xl">SCORE:</span>
                {{
                  movieInfo.rating
                    ? parseFloat(movieInfo.rating).toFixed(1)
                    : "- "
                }}/10
              </div>
            </div>
          </div>
        </div>
        <div>
          <movieCast :poster-path="imageUrl" />
          <div class="mx-auto max-w-xl">
            <div class="flex justify-around pb-20">
              <poster-modal
                :api-db="this.apiDb"
                v-if="
                  detInfo.detType === 'Poster' && movie.detections.length > 0
                "
              />
              <trailer-modal
                v-if="
                  movie.trailer &&
                  detInfo.detType === 'Trailer' &&
                  movie.detections.length > 0
                "
              />
              <reviews-modal />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { mapState } from "vuex";
import { ImageMovieUrl } from "@/types";
import ReviewsModal from "@/components/movie-detail-view/modal/ReviewsModal.vue";
import TrailerModal from "@/components/movie-detail-view/modal/TrailerModal.vue";
import MovieCast from "@/components/movie-detail-view/MovieCast.vue";
import PosterModal from "@/components/movie-detail-view/modal/PosterModal.vue";

export default defineComponent({
  name: "MovieDetail",
  components: {
    PosterModal,
    MovieCast,
    TrailerModal,
    ReviewsModal,
  },
  props: {
    movieId: {
      type: String,
    },
    apiDb: {
      type: String,
      default: "TMDB",
    },
  },

  data() {
    return {
      imageUrl: `${ImageMovieUrl[this.apiDb].original}`,
      imdbUrl: "https://www.imdb.com/title",
      backdropImageHeight: null,
    };
  },

  computed: {
    ...mapState("movie", ["movie", "detInfo"]),
    movieInfo() {
      return this.movie.info ? this.movie.info : {};
    },
    posterUrlFull() {
      const url = this.movieInfo.poster_path;

      if (
        url === "null" ||
        url === "undefined" ||
        url === null ||
        url === undefined
      ) {
        return "https://imdb-api.com/images/original/nopicture.jpg";
      }
      return `${this.imageUrl}${url}`;
    },
    backdropUrlFull() {
      const url = this.movieInfo.backdrop_path;
      if (
        url === "null" ||
        url === "undefined" ||
        url === null ||
        url === undefined
      ) {
        return null;
      }
      return `${this.imageUrl}${url}`;
    },
  },
});
</script>

<style scoped>
.bg-blur:before {
  background: rgb(0, 0, 0);
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 0.7021183473389356) 9%,
    rgba(0, 0, 0, 1) 100%
  );

  mask: linear-gradient(transparent, black 40%);

  backdrop-filter: blur(8px);
  content: "";
  z-index: -5;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  position: absolute;
}
</style>
