<script setup>
import TheIcons from '@/components/TheIcons.vue'
import { testHardware } from '@/config/testHardware'
import { useFilterStore } from '@/stores/filter'
import { ref } from 'vue'
const filterStore = useFilterStore()

const showSearchBarDropdown = ref(false)

function updateFilterObj() {
  const filterItem = filterStore.mapFilterItems[filterStore.currentToggleFilterItem]

  filterStore.currentFilterItem[filterItem] = filterStore.searchBarText

  filterStore.filter = true
}

function getFilterToggleItem() {
  return filterStore.mapFilterItems[filterStore.currentToggleFilterItem]
}
</script>

<template>
  <div class="flex border border-stone-500 rounded-lg p-2">
    <TheIcons
      @click="showSearchBarDropdown = !showSearchBarDropdown"
      icon="bi bi-body-text"
      class="text-2xl px-1 text-stone-600 border rounded-md"
    ></TheIcons>
    <input
      type="text"
      placeholder="Suche nach ..."
      v-model="filterStore.searchBarText"
      @change="updateFilterObj()"
      class="outline-none w-full h-full ps-2"
      :class="{ '': showSearchBarDropdown === true }"
    />
    <TheIcons
      v-if="filterStore.searchBarText !== ''"
      @click="
        ((filterStore.searchBarText = ''),
        (filterStore.filter = false),
        (showSearchBarDropdown = false))
      "
      icon="bi bi-x"
      class="text-2xl ps-2 text-stone-600"
    ></TheIcons>
    <div
      v-if="showSearchBarDropdown"
      class="absolute -translate-x-2 w-364 h-50 overflow-y-scroll translate-y-11 bg-white border rounded-md select-none border-stone-500"
    >
      <div
        v-for="hardware in testHardware"
        class="p-2 rounded-md cursor-pointer hover:bg-stone-200"
        @click="
          (((filterStore.searchBarText = hardware[getFilterToggleItem()]),
          (showSearchBarDropdown = false)),
          updateFilterObj())
        "
      >
        {{ hardware[getFilterToggleItem()] }}
      </div>
    </div>
  </div>
</template>

<style scoped></style>
