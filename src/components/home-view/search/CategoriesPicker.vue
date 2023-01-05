<template>
  <Listbox
    as="div"
    v-model="selectedCategories"
    multiple
    @update:modelValue="updateCategories"
  >
    <div class="relative">
      <ListboxButton
        class="pl-3 pr-12 py-2.5 text-sm relative w-80 bg-white py-2 pl-3 pr-10 hover:cursor-pointer focus:outline-none ml-3 rounded-lg border border-vtd-secondary-300"
      >
        <span class="flex items-center">
          <span class="ml-3 block truncate font-semibold">
            {{ selectedCategories.map((category) => category).join(", ") }}
          </span>
          <span v-if="selectedCategories.length === 0" class="text-gray-400"
            >Poster should contain</span
          >
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
          class="absolute w-80 z-20 mt-1 ml-3 rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 ml-2 overflow-y-scroll max-h-96"
          @focus="$refs.searchInput?.focus()"
        >
          <div>
            <input
              type="text"
              ref="searchInput"
              v-model="query"
              placeholder="Search..."
              class="w-72 box-border pl-3 outline-none placeholder-gray-400 h-12 fixed z-30"
            />
          </div>
          <div class="mt-14">
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
          </div>
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

export default defineComponent({
  name: "CategoriesPicker",
  components: {
    Listbox,
    ListboxButton,
    ListboxOption,
    ListboxOptions,
  },
  data() {
    return {
      query: "" as string,
      selectedCategories: [],
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
      console.log(this.selectedCategories);
      this.$emit("update-genres");
    },
  },
});
</script>

<style scoped></style>
