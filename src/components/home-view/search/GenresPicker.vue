<template>
  <Listbox
    as="div"
    v-model="selectedGenres"
    multiple
    @update:modelValue="updateGenres"
  >
    <div class="relative">
      <ListboxButton
        class="pl-3 pr-12 py-2.5 text-sm relative w-80 bg-white h-11 hover:cursor-pointer focus:outline-none ml-3 rounded-lg border border-vtd-secondary-300"
      >
        <span
          class="absolute left-3 top-0 h-11 border-r-2 pr-2 font-semibold text-[15.5px] flex items-center"
          ><span>Genre</span></span
        >
        <span class="ml-14 flex items-center">
          <span
            v-if="selectedGenres.length === 0"
            class="text-gray-400 ml-5 text-[15.5px]"
            >Choose</span
          >
          <span class="block truncate font-semibold ml-1">
            {{ selectedGenres.map((genre) => genre.name).join(", ") }}
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
          class="absolute z-20 mt-1 rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 ml-2 overflow-y-scroll max-h-96"
        >
          <ListboxOption
            as="template"
            v-for="genre in genres"
            :key="genre.id"
            :value="genre"
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
                  {{ genre.name }}
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

export default defineComponent({
  name: "GenresPicker",
  components: {
    Listbox,
    ListboxButton,
    ListboxOption,
    ListboxOptions,
  },
  data() {
    return {
      genres: [
        { id: 28, name: "Action" },
        { id: 12, name: "Adventure" },
        { id: 16, name: "Animation" },
        {
          id: 35,
          name: "Comedy",
        },
        { id: 80, name: "Crime" },
        { id: 99, name: "Documentary" },
        { id: 18, name: "Drama" },
        {
          id: 10751,
          name: "Family",
        },
        { id: 14, name: "Fantasy" },
        { id: 36, name: "History" },
        { id: 27, name: "Horror" },
        {
          id: 10402,
          name: "Music",
        },
        { id: 9648, name: "Mystery" },
        { id: 10749, name: "Romance" },
        {
          id: 878,
          name: "Science Fiction",
        },
        { id: 10770, name: "TV Movie" },
        { id: 53, name: "Thriller" },
        { id: 10752, name: "War" },
        {
          id: 37,
          name: "Western",
        },
      ],
      selectedGenres: [],
    };
  },

  methods: {
    updateGenres() {
      const selectedGenresId = this.selectedGenres.map((genre) => genre["id"]);
      this.$emit("update-genres", selectedGenresId);
    },
  },
});
</script>

<style scoped></style>
