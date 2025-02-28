<script setup>
import { testHardware } from '@/config/testHardware'
import SearchBar from './SearchBar.vue'
import TheIcons from './TheIcons.vue'

import { useCardStore } from '@/stores/card'

const cardStore = useCardStore()
</script>

<template>
  <div class="flex flex-col gap-5">
    <div class="w-full flex items-center gap-2">
      <SearchBar class="w-full"></SearchBar>
      <TheIcons
        icon="bi bi-funnel"
        class="text-2xl border border-stone-500 p-2 h-full px-3 rounded-lg text-stone-600"
      ></TheIcons>
    </div>
    <table class="border w-full">
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
        v-for="hardware in testHardware"
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
  </div>
</template>

<style scoped></style>
