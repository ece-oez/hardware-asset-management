<script setup>
import { testHardware } from '@/config/testHardware'
import SearchBar from './SearchBar.vue'
import TheIcons from './TheIcons.vue'
import { useCardStore } from '@/stores/card'
import { useTableStore } from '@/stores/table'
import { useKomponenteStore } from '@/stores/komponenten'
import { computed } from 'vue'

const cardStore = useCardStore()

const tableStore = useTableStore()

const komponenteStore = useKomponenteStore()

const filteredTestHardware = computed(() => {
  const filteredTestHardware = testHardware.filter((hardware) => {
    for (let index = 0; index < komponenteStore.komponenten.length; index++) {
      for (let i = 0; i < komponenteStore.komponenten[index].elemente.length; i++) {
        if (komponenteStore.komponenten[index].elemente[i].show === false) continue
        if (hardware.kategorie === komponenteStore.komponenten[index].elemente[i].heading)
          return hardware
      }
    }
  })
  return filteredTestHardware
})

function refreshData() {
  tableStore.showTable = 'normalTable'
}
</script>

<template>
  <div class="flex flex-col gap-5">
    <div class="w-full flex items-center gap-2">
      <SearchBar class="w-full"></SearchBar>
      <TheIcons
        icon="bi bi-funnel"
        class="text-2xl border border-stone-500 p-2 h-full px-3 rounded-lg text-stone-600"
      ></TheIcons>
      <TheIcons
        @click="refreshData()"
        icon="bi bi-arrow-clockwise"
        class="text-2xl border border-stone-500 p-2 h-full px-3 rounded-lg text-stone-600"
      ></TheIcons>
    </div>
    <table v-if="tableStore.showTable === 'normalTable'" class="border w-full">
      <tr class="text-white bg-stone-950 w-full">
        <th class="w-1/7 border-e">Name</th>
        <th class="w-1/7 border-e">ModellNr</th>
        <th class="w-1/7 border-e">SerienNr</th>
        <th class="w-1/7 border-e">Datum</th>
        <th class="w-1/7 border-e">Hersteller</th>
        <th class="w-1/7 border-e">Kategorie</th>
        <th class="w-1/7">Ort</th>
      </tr>

      <tr
        v-for="hardware in filteredTestHardware"
        @click="((cardStore.cardState = true), (cardStore.currentHardware = hardware))"
        class="cursor-pointer hover:bg-stone-300"
      >
        <td class="w-1/7 border-e">{{ hardware.name }}</td>
        <td class="w-1/7 border-e">{{ hardware.modellnummer }}</td>
        <td class="w-1/7 border-e">{{ hardware.seriennummer }}</td>
        <td class="w-1/7 border-e">{{ hardware.erfassungsdatum }}</td>
        <td class="w-1/7 border-e">{{ hardware.hersteller }}</td>
        <td class="w-1/7 border-e">{{ hardware.kategorie }}</td>
        <td class="w-1/7">{{ hardware.ort }}</td>
      </tr>
    </table>

    <table v-if="tableStore.showTable === 'komponentenTable'" class="border w-full">
      <tr class="text-white bg-red-800 w-full">
        <th class="w-1/7 border-e">Name</th>
        <th class="w-1/7 border-e">ModellNr</th>
        <th class="w-1/7 border-e">SerienNr</th>
        <th class="w-1/7 border-e">Datum</th>
        <th class="w-1/7 border-e">Hersteller</th>
        <th class="w-1/7 border-e">Kategorie</th>
        <th class="w-1/7">Ort</th>
      </tr>

      <tr
        v-for="komponente in tableStore.komponentenZurHardware"
        class="cursor-pointer hover:bg-stone-300"
        @click="((cardStore.cardState = true), (cardStore.currentHardware = komponente))"
      >
        <td class="w-1/7 border-e">{{ komponente.name }}</td>
        <td class="w-1/7 border-e">{{ komponente.modellnummer }}</td>
        <td class="w-1/7 border-e">{{ komponente.seriennummer }}</td>
        <td class="w-1/7 border-e">{{ komponente.erfassungsdatum }}</td>
        <td class="w-1/7 border-e">{{ komponente.hersteller }}</td>
        <td class="w-1/7 border-e">{{ komponente.kategorie }}</td>
        <td class="w-1/7">{{ komponente.ort }}</td>
      </tr>
    </table>
  </div>
</template>

<style scoped></style>
