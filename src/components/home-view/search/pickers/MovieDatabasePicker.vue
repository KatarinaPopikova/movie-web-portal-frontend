<template>
  <Listbox as="div" v-model="selectedMovieDb">
    <div class="relative py-1.5">
      <ListboxButton
        class="pl-3 pr-12 py-2.5 text-sm relative w-72 bg-white h-11 hover:cursor-pointer focus:outline-none ml-3 rounded-lg border border-vtd-secondary-300"
      >
        <span
          class="absolute left-3 top-0 h-11 border-r-2 pr-2 font-semibold text-[15.5px] flex items-center"
          ><span>Movie Database</span></span
        >
        <span class="ml-36 flex items-center">
          <span class="block truncate font-semibold ml-1">
            {{ selectedMovieDb }}
          </span>
        </span>
        <span class="absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
          <font-awesome-icon icon="fa-solid fa-chevron-down" />
        </span>
      </ListboxButton>

      <transition
        leave-active-class="transition ease-in duration-100"
        leave-from-class="opacity-100"
        leave-to-class="opacity-0"
      >
        <ListboxOptions
          class="absolute w-44 ml-40 z-20 mt-1 rounded-md bg-white overflow-auto py-1 shadow-lg ring-1 ring-black ring-opacity-5"
        >
          <ListboxOption
            as="template"
            v-for="(movieDb, index) in movieDbValues"
            :key="index"
            :value="(movieDb as any)"
            v-slot="{ active, selected }"
          >
            <li
              :class="[
                active ? 'text-white bg-indigo-600' : 'text-gray-900',
                'relative py-2 pl-3 pr-9',
              ]"
            >
              <div class="flex items-center">
                <span :class="[selected ? 'font-semibold' : 'font-normal']">
                  {{ movieDb }}
                </span>
              </div>

              <span
                v-if="selected"
                :class="[
                  active ? 'text-white' : 'text-indigo-600',
                  'absolute inset-y-0 right-0 flex items-center pr-4',
                ]"
              >
                <font-awesome-icon icon="fa-solid fa-check" />
              </span>
            </li>
          </ListboxOption>
        </ListboxOptions>
      </transition>
    </div>
  </Listbox>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import {
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from "@headlessui/vue";
import { mapGetters, mapMutations } from "vuex";
import { MovieDatabaseEnum } from "@/types";

export default defineComponent({
  name: "MovieDatabasePicker",
  components: {
    Listbox,
    ListboxButton,
    ListboxOption,
    ListboxOptions,
  },
  computed: {
    ...mapGetters("search", ["movieDatabase"]),

    movieDbValues(): string[] {
      return Object.values(MovieDatabaseEnum);
    },

    selectedMovieDb: {
      get() {
        return this.movieDatabase;
      },
      set(value) {
        this.SET_MOVIE_DATABASE(value);
      },
    },
  },
  methods: {
    ...mapMutations("search", ["SET_MOVIE_DATABASE"]),
  },
});
</script>

<style scoped></style>
