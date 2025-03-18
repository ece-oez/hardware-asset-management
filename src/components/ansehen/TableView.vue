<script setup>
import { testHardware } from '@/config/testHardware'
import SearchBar from '@/components/ansehen/SearchBar.vue'
import TheIcons from '@/components/TheIcons.vue'
import { useCardStore } from '@/stores/card'
import { useTableStore } from '@/stores/table'
import { useKomponenteStore } from '@/stores/komponenten'
import { computed, onMounted, ref } from 'vue'
import { useModalStore } from '@/stores/modal'
import { useFilterStore } from '@/stores/filter'
import { useDatabaseStore } from '@/stores/database'

// stores

const databaseStore = useDatabaseStore()

const cardStore = useCardStore()

const tableStore = useTableStore()

const komponenteStore = useKomponenteStore()

const modalStore = useModalStore()

const filterStore = useFilterStore()

const hardware = ref([])

onMounted(async () => {
  hardware.value = await databaseStore.getData()
})

// filter für Komponente Table
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

// filter für normale Table
const filteredTestHardware = computed(() => {
  // filter anhand Treeview toggle btns

  if (filterStore.filter === true) {
    const searchHardware = hardware.value.filter((hardwareItem) => {
      const filterItem = filterStore.mapFilterItems[filterStore.currentToggleFilterItem]
      const result = hardwareItem[filterItem].includes(filterStore.currentFilterItem[filterItem])
      if (result) return hardwareItem
    })
    return searchHardware
  }

  if (filterStore.formularFilterState === true) {
    // filter anhand Filter formular
    const searchFormularHardware = hardware.value.filter((hardwareItem) => {
      let resultCount = 0
      for (let index = 0; index < 7; index++) {
        const result = hardwareItem[filterStore.filterItems[index]].includes(
          filterStore.currentFilterItem[filterStore.filterItems[index]],
        )

        if (result === true) resultCount++
      }

      if (resultCount === 7) {
        return hardwareItem
      }
    })
    return searchFormularHardware
  } else {
    const filteredHardware = hardware.value.filter((hardwareItem) => {
      for (let index = 0; index < komponenteStore.komponenten.length; index++) {
        for (let i = 0; i < komponenteStore.komponenten[index].children.length; i++) {
          if (komponenteStore.komponenten[index].children[i].show === false) continue
          if (hardwareItem.kategorie === komponenteStore.komponenten[index].children[i].heading)
            return hardwareItem
        }
      }
    })

    return filteredHardware
  }
})

// func für SearchBtn: SearchBar inputText in reactive Object speichern und filter auf true setzen um "filter anhand SearchBar inputText" zu triggern
function updateFilterObj() {
  const filterItem = filterStore.mapFilterItems[filterStore.currentToggleFilterItem]

  filterStore.currentFilterItem[filterItem] = filterStore.searchBarText

  filterStore.filter = true
}

function updateHardware() {
  alert('updated')
}
function deleteHardware() {
  alert('deleted')
}

// func für RefreshBtn: normale Tabelle anzeigen, InformationCard schließen, ausgewählte Hardware leer setzen
function refreshData() {
  tableStore.showTable = 'normalTable'
  cardStore.cardState = false
  cardStore.currentHardware = ''
  // filterStore.currentFilterItem = filterStore.deletedFilterItem
  filterStore.formularFilterState = false
}
</script>

<template>
  <div class="flex flex-col gap-5">
    <!-- Searchbar, SearchIcon, SearchItem, SearchClear, FilterIcon, RefreshIcon -->
    <div class="w-full flex items-center gap-2">
      <!-- Searchbar -->

      <SearchBar :disabled="cardStore.currentHardware === ''" class="w-full h-full"> </SearchBar>
      <!-- SearchIcon -->

      <TheIcons
        @click="updateFilterObj()"
        icon="bi bi-search"
        class="text-2xl border border-stone-500 p-2 h-full px-3 rounded-lg text-stone-600 hover:bg-stone-300 hover:text-white hover:duration-200 not-focus:duration-200"
      ></TheIcons>
      <!--  SearchItem -->

      <div
        @click="filterStore.filterToggleBarState = !filterStore.filterToggleBarState"
        class="select-none flex gap-2 items-center text-md border border-stone-500 p-2 h-full px-3 rounded-lg text-stone-600 hover:bg-stone-200 hover:text-stone-800 hover:duration-300 not-focus:duration-200"
      >
        {{ filterStore.currentToggleFilterItem }}
        <TheIcons v-if="filterStore.filterToggleBarState === false" icon="bi bi-caret-down" />
        <TheIcons v-if="filterStore.filterToggleBarState" icon="bi bi-caret-down-fill" />
        <!-- SearchItem: ToggleBarDown -->
        <div
          v-if="filterStore.filterToggleBarState"
          class="absolute -translate-x-3 translate-y-42 bg-white border rounded-md border-stone-500 text-center"
        >
          <!-- ToggleBarDown -> Items Iteration -->
          <div
            v-for="item in filterStore.filterItemsCapStr"
            class="p-2 rounded-md hover:bg-stone-200"
            @click="filterStore.currentToggleFilterItem = item"
          >
            {{ item }}
          </div>
        </div>
      </div>
      <!-- Hardware Clear -->

      <button
        @click="updateHardware()"
        :disabled="cardStore.currentHardware === ''"
        class="uppercase select-none flex gap-2 items-center text-md p-2 h-full px-3 rounded-lg text-stone-600 hover:bg-stone-100 hover:duration-200 not-focus:duration-200 disabled:hidden"
      >
        Bearbeiten
      </button>
      <button
        @click="deleteHardware()"
        :disabled="cardStore.currentHardware === ''"
        class="uppercase select-none flex gap-2 items-center text-md p-2 h-full px-3 rounded-lg text-stone-600 hover:bg-red-100 hover:duration-200 not-focus:duration-200 disabled:hidden"
      >
        Löschen
      </button>

      <!-- FilterIcon -->

      <TheIcons
        @click="modalStore.showModal = !modalStore.showModal"
        icon="bi bi-funnel"
        class="text-2xl border border-stone-500 p-2 h-full px-3 rounded-lg text-stone-600 hover:bg-stone-300 hover:text-white hover:duration-200 not-focus:duration-200"
      />
      <!-- RefreshIcon -->

      <TheIcons
        @click="refreshData()"
        icon="bi bi-arrow-clockwise"
        class="text-2xl border border-stone-500 p-2 h-full px-3 rounded-lg text-stone-600 hover:bg-stone-300 hover:text-white hover:duration-200 not-focus:duration-200"
      />
    </div>

    <!-- NORMAL Table -->

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
          :class="{ 'bg-blue-300 text-white': hardware.name === cardStore.currentHardware.name }"
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

    <!-- KOMPONENTE Table -->

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
