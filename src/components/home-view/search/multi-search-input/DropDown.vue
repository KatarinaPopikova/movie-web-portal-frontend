<template>
  <Listbox as="div" class="flex" v-model="selectedDetectType">
    <div class="flex">
      <ListboxButton
        class="relative bg-white py-2 pl-3 pr-10 hover:cursor-pointer focus:outline-none ml-3 border-r-2"
      >
        <span class="flex items-center">
          <span class="ml-3 block truncate font-semibold">{{
            selectedDetectType
          }}</span>
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
          class="absolute z-20 mt-1 rounded-md bg-white overflow-auto py-1 shadow-lg ring-1 ring-black ring-opacity-5 ml-2"
        >
          <ListboxOption
            as="template"
            v-for="(detectType, index) in detectTypeValues"
            :key="index"
            :value="(detectType as any)"
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
                  {{ detectType }}
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
import {
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from "@headlessui/vue";
import { defineComponent } from "vue";
import { mapGetters, mapMutations } from "vuex";
import { DetectTypeEnum } from "@/types";

export default defineComponent({
  name: "DropDown",
  components: {
    Listbox,
    ListboxButton,
    ListboxOption,
    ListboxOptions,
  },

  computed: {
    ...mapGetters("search", ["detectType"]),
    detectTypeValues(): string[] {
      return Object.values(DetectTypeEnum);
    },

    selectedDetectType: {
      get() {
        return this.detectType;
      },
      set(value) {
        this.SET_DETECT_TYPE(value);
      },
    },
  },

  methods: {
    ...mapMutations("search", ["SET_DETECT_TYPE"]),
  },
});
</script>

<style scoped></style>
