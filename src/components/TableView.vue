<script setup>
import { testHardware } from '@/config/testHardware'
import SearchBar from './SearchBar.vue'
import TheIcons from './TheIcons.vue'
import { useCardStore } from '@/stores/card'
import { useTableStore } from '@/stores/table'
import { useKomponenteStore } from '@/stores/komponenten'
import { computed, ref } from 'vue'
import { useModalStore } from '@/stores/modal'

const cardStore = useCardStore()

const tableStore = useTableStore()

const komponenteStore = useKomponenteStore()

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
  return filteredTestHardware
})

function refreshData() {
  tableStore.showTable = 'normalTable'
  cardStore.cardState = false
  cardStore.currentHardware = ''
}

const modalStore = useModalStore()
</script>

<template>
  <div class="flex flex-col gap-5">
    <div class="w-full flex items-center gap-2">
      <SearchBar class="w-full">
        <TheIcons icon="bi bi-search" class="text-2xl ps-2 text-stone-600"></TheIcons>
      </SearchBar>
      <TheIcons
        @click="modalStore.showModal = !modalStore.showModal"
        icon="bi bi-funnel"
        class="text-2xl border border-stone-500 p-2 h-full px-3 rounded-lg text-stone-600"
      />
      <TheIcons
        @click="refreshData()"
        icon="bi bi-arrow-clockwise"
        class="text-2xl border border-stone-500 p-2 h-full px-3 rounded-lg text-stone-600"
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
          @click="((cardStore.cardState = true), (cardStore.currentHardware = hardware))"
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
          cardStore.currentHardware.name
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
