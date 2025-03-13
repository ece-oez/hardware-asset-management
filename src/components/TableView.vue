<script setup>
import { testHardware } from '@/config/testHardware'
import SearchBar from './SearchBar.vue'
import TheIcons from './TheIcons.vue'
import { useCardStore } from '@/stores/card'
import { useTableStore } from '@/stores/table'
import { useKomponenteStore } from '@/stores/komponenten'
import { computed, ref } from 'vue'
import { useModalStore } from '@/stores/modal'
import { useFilterStore } from '@/stores/filterItems'

// stores
const cardStore = useCardStore()

const tableStore = useTableStore()

const komponenteStore = useKomponenteStore()

const modalStore = useModalStore()

const filterStore = useFilterStore()

// ref vars
const filter = ref(false)

// filter second table
const filteredKomponentenZurHardware = computed(() => {
  const filteredKomponentenZurHardware = tableStore.komponentenZurHardware.filter((hardware) => {
    for (let index = 0; index < komponenteStore.komponenten.length; index++) {
      for (let i = 0; i < komponenteStore.komponenten[index].children.length; i++) {
        if (komponenteStore.komponenten[index].children[i].show === false) continue
        if (hardware.kategorie === komponenteStore.komponenten[index].children[i].heading)
          return hardware
      }
    }
  })
  return filteredKomponentenZurHardware
})

// filter normal table
const filteredTestHardware = computed(() => {
  const filteredTestHardware = testHardware.filter((hardware) => {
    for (let index = 0; index < komponenteStore.komponenten.length; index++) {
      for (let i = 0; i < komponenteStore.komponenten[index].children.length; i++) {
        if (komponenteStore.komponenten[index].children[i].show === false) continue
        if (hardware.kategorie === komponenteStore.komponenten[index].children[i].heading)
          return hardware
      }
    }
  })

  if (filter.value === false) return filteredTestHardware

  const searchHardware = testHardware.filter((hardware) => {
    const filterItem = filterStore.mapFilterItems[filterStore.currentToggleFilterItem]
    const result = hardware[filterItem].includes(filterStore.currentFilterItem[filterItem])
    if (result) return hardware
  })

  return searchHardware
})

function refreshData() {
  tableStore.showTable = 'normalTable'
  cardStore.cardState = false
  cardStore.currentHardware = ''
}

function deleteFilter() {
  filter.value = false
  filterStore.searchBarText = ''
}

function updateFilterObj() {
  const filterItem = filterStore.mapFilterItems[filterStore.currentToggleFilterItem]

  filterStore.currentFilterItem[filterItem] = filterStore.searchBarText

  filter.value = true
}

function getFilterToggleItem() {
  return filterStore.mapFilterItems[filterStore.currentToggleFilterItem]
}

const showSearchBarDropdown = ref(false)
</script>

<template>
  <div class="flex flex-col gap-5">
    <div class="w-full flex items-center gap-2">
      <SearchBar class="w-full h-full">
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
          @click="((filterStore.searchBarText = ''), (filter = false))"
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
      </SearchBar>
      <TheIcons
        @click="updateFilterObj()"
        icon="bi bi-search"
        class="text-2xl border border-stone-500 p-2 h-full px-3 rounded-lg text-stone-600 hover:bg-stone-300 hover:text-white hover:duration-200 not-focus:duration-200"
      ></TheIcons>
      <div
        @click="filterStore.filterToggleBarState = !filterStore.filterToggleBarState"
        class="select-none flex gap-2 items-center text-md border border-stone-500 p-2 h-full px-3 rounded-lg text-stone-600 hover:bg-stone-200 hover:text-stone-800 hover:duration-300 not-focus:duration-200"
      >
        {{ filterStore.currentToggleFilterItem }}
        <TheIcons v-if="filterStore.filterToggleBarState === false" icon="bi bi-caret-down" />
        <TheIcons v-if="filterStore.filterToggleBarState" icon="bi bi-caret-down-fill" />
        <div
          v-if="filterStore.filterToggleBarState"
          class="absolute -translate-x-3 translate-y-42 bg-white border rounded-md border-stone-500 text-center"
        >
          <div
            v-for="item in filterStore.filterItemsCapStr"
            class="p-2 rounded-md hover:bg-stone-200"
            @click="filterStore.currentToggleFilterItem = item"
          >
            {{ item }}
          </div>
        </div>
      </div>
      <div
        @click="deleteFilter()"
        class="uppercase select-none flex gap-2 items-center text-md p-2 h-full px-3 rounded-lg text-stone-600 hover:bg-stone-100 hover:duration-200 not-focus:duration-200"
      >
        Löschen
      </div>

      <TheIcons
        @click="modalStore.showModal = !modalStore.showModal"
        icon="bi bi-funnel"
        class="text-2xl border border-stone-500 p-2 h-full px-3 rounded-lg text-stone-600 hover:bg-stone-300 hover:text-white hover:duration-200 not-focus:duration-200"
      />
      <TheIcons
        @click="refreshData()"
        icon="bi bi-arrow-clockwise"
        class="text-2xl border border-stone-500 p-2 h-full px-3 rounded-lg text-stone-600 hover:bg-stone-300 hover:text-white hover:duration-200 not-focus:duration-200"
      />
    </div>
    <table v-if="tableStore.showTable === 'normalTable'" class="border border-separate w-full">
      <thead>
        <tr class="text-white bg-stone-500 w-full">
          <th class="w-1/7 border border-stone-500">Name</th>
          <th class="w-1/7 border border-stone-500">ModellNr</th>
          <th class="w-1/7 border border-stone-500">SerienNr</th>
          <th class="w-1/7 border border-stone-500">Datum</th>
          <th class="w-1/7 border border-stone-500">Hersteller</th>
          <th class="w-1/7 border border-stone-500">Kategorie</th>
          <th class="w-1/7">Ort</th>
        </tr>
      </thead>

      <tbody>
        <tr
          v-for="hardware in filteredTestHardware"
          @click="
            ((cardStore.cardState = true),
            (cardStore.currentHardware = hardware),
            (cardStore.currentHardwareName = hardware.name))
          "
          class="cursor-pointer hover:bg-stone-300 hover:text-black"
          :class="{ 'bg-stone-600 text-white': hardware.name === cardStore.currentHardware.name }"
        >
          <td class="w-1/7 border border-stone-500 text-center">{{ hardware.name }}</td>
          <td class="w-1/7 border border-stone-500 text-center">{{ hardware.modellnummer }}</td>
          <td class="w-1/7 border border-stone-500 text-center">{{ hardware.seriennummer }}</td>
          <td class="w-1/7 border border-stone-500 text-center">{{ hardware.erfassungsdatum }}</td>
          <td class="w-1/7 border border-stone-500 text-center">{{ hardware.hersteller }}</td>
          <td class="w-1/7 border border-stone-500 text-center">{{ hardware.kategorie }}</td>
          <td class="w-1/7 border border-stone-500 text-center">{{ hardware.ort }}</td>
        </tr>
      </tbody>
    </table>

    <table v-if="tableStore.showTable === 'komponentenTable'" class="border border-separate w-full">
      <caption class="caption-bottom">
        ( Die eingebaute/zugehörige Hardware zu
        {{
          cardStore.currentHardwareName
        }}
        )
      </caption>
      <thead>
        <tr class="text-white bg-red-800 w-full">
          <th class="w-1/7 border border-stone-500">Name</th>
          <th class="w-1/7 border border-stone-500">ModellNr</th>
          <th class="w-1/7 border border-stone-500">SerienNr</th>
          <th class="w-1/7 border border-stone-500">Datum</th>
          <th class="w-1/7 border border-stone-500">Hersteller</th>
          <th class="w-1/7 border border-stone-500">Kategorie</th>
          <th class="w-1/7 border border-stone-500">Ort</th>
        </tr>
      </thead>

      <tbody>
        <tr
          v-for="komponente in filteredKomponentenZurHardware"
          class="cursor-pointer hover:bg-stone-300"
          @click="((cardStore.cardState = true), (cardStore.currentHardware = komponente))"
        >
          <td class="w-1/7 border border-stone-500 text-center">{{ komponente.name }}</td>
          <td class="w-1/7 border border-stone-500 text-center">{{ komponente.modellnummer }}</td>
          <td class="w-1/7 border border-stone-500 text-center">{{ komponente.seriennummer }}</td>
          <td class="w-1/7 border border-stone-500 text-center">
            {{ komponente.erfassungsdatum }}
          </td>
          <td class="w-1/7 border border-stone-500 text-center">{{ komponente.hersteller }}</td>
          <td class="w-1/7 border border-stone-500 text-center">{{ komponente.kategorie }}</td>
          <td class="w-1/7 border border-stone-500 text-center">{{ komponente.ort }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped></style>
