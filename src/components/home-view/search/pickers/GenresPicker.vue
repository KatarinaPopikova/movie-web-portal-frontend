<template>
  <Listbox as="div" v-model="selectedGenres" multiple>
    <div class="relative py-1.5">
      <ListboxButton
        class="pl-3 pr-12 py-2.5 text-sm relative w-80 bg-white h-11 hover:cursor-pointer focus:outline-none rounded-lg border border-vtd-secondary-300"
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
            {{ selectedGenres.map((genre) => genre).join(", ") }}
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
            v-for="(genre, index) in allGenres"
            :key="index"
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
                  {{ genre }}
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
import { mapActions, mapGetters, mapMutations } from "vuex";

export default defineComponent({
  name: "GenresPicker",
  components: {
    Listbox,
    ListboxButton,
    ListboxOption,
    ListboxOptions,
  },
  computed: {
    ...mapGetters("search", ["genres", "allGenres"]),

    selectedGenres: {
      get() {
        return this.genres;
      },
      set(value) {
        this.SET_GENRES(value);
      },
    },
  },

  mounted() {
    this.getAllGenres();
  },
  methods: {
    ...mapMutations("search", ["SET_GENRES"]),
    ...mapActions("search", ["getAllGenres"]),
  },
});
</script>

<style scoped></style>
