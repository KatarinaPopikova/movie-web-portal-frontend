<template>
  <Listbox
    as="div"
    v-model="selectedCategories"
    class="w-96"
    multiple
    @update:modelValue="updateCategories"
    v-slot="{ open }"
  >
    <div class="relative">
      <div class="flex rounded-lg bg-white border border-vtd-secondary-300">
        <div class="flex">
          <drop-down @update-search-type="updateSearchType" />
        </div>
        <ListboxButton
          class="text-sm relative w-80 bg-white py-2 pr-10 rounded-r-lg hover:cursor-pointer focus:outline-none"
        >
          <span class="category flex items-center overflow-x-scroll">
            <span
              v-for="(category, index) in selectedCategories"
              class="relative ml-3 block font-semibold whitespace-nowrap pl-2 pr-4 py-1 rounded-lg my-1 border border-sky-600"
              :key="index"
              @click.stop="removeFromSelectedCategories(category)"
            >
              {{ category }}
              <span class="absolute right-1 top-0 text-xs text-sky-600">x</span>
            </span>
            <span
              v-if="selectedCategories.length === 0"
              class="text-gray-400 mx-auto"
              >Poster should contain</span
            >
          </span>
          <input
            v-if="open"
            type="text"
            ref="searchInput"
            v-model="query"
            placeholder="Search..."
            class="w-60 ml-2 p-3 rounded-lg border border-vtd-secondary-300 placeholder-gray-400 h-12 z-30"
          />
          <input
            v-else
            type="text"
            ref="searchInput"
            placeholder="Search..."
            class="w-60 ml-2 p-3 rounded-lg border border-vtd-secondary-300 placeholder-gray-400 h-12 z-30"
          />
          <span class="absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
            <font-awesome-icon icon="fa-solid fa-chevron-down" />
          </span>
        </ListboxButton>
      </div>
      <transition
        leave-active-class="transition ease-in duration-100"
        leave-from-class="opacity-100"
        leave-to-class="opacity-0"
      >
        <ListboxOptions
          class="absolute w-80 z-20 mt-1 ml-3 right-0 rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 ml-2 overflow-y-scroll max-h-96"
          @focus="$refs.searchInput?.focus()"
        >
          <ListboxOption
            as="template"
            v-for="(category, index) in filteredCategories"
            :key="index"
            :value="category"
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
                  {{ category }}
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
import { mapActions, mapState } from "vuex";
import DropDown from "@/components/home-view/search/multi-search-input/DropDown.vue";

export default defineComponent({
  name: "CategoriesPicker",
  components: {
    DropDown,
    Listbox,
    ListboxButton,
    ListboxOption,
    ListboxOptions,
  },
  data() {
    return {
      query: "" as string,
      selectedCategories: [],
      searchType: "title" as string,
    };
  },
  computed: {
    ...mapState("categories", ["categories"]),
    filteredCategories() {
      return this.categories.filter((category) => {
        return category.toLowerCase().includes(this.query.toLowerCase());
      });
    },
  },
  mounted() {
    this.getCategories();
  },
  methods: {
    ...mapActions("categories", ["getCategories"]),
    updateCategories() {
      this.selectedCategories.reverse();
      this.$emit("selected-categories", this.selectedCategories);
    },
    removeFromSelectedCategories(category: string) {
      this.selectedCategories = this.selectedCategories.filter(
        (value) => value !== category
      );
    },

    updateSearchType(searchType: string) {
      this.searchType = searchType;
    },
  },
});
</script>

<style scoped>
/* Hide scrollbar for Chrome, Safari and Opera */
.category::-webkit-scrollbar {
  display: none;
}

/* Hide scrollbar for IE, Edge and Firefox */
.category {
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}
</style>
