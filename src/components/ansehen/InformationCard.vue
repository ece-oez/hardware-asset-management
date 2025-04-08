<script setup>
import { useCardStore } from '@/stores/card'
import TheIcons from '@/components/TheIcons.vue'
import { useTableStore } from '@/stores/table'

const cardStore = useCardStore()

const tableStore = useTableStore()

function refreshData() {
  tableStore.showTable = 'normalTable'
  cardStore.cardState = false
  cardStore.currentHardware = ''
}
</script>

<template>
  <div class="flex flex-col border border-stone-500 rounded-2xl w-1/3 p-4">
    <TheIcons
      icon="bi bi-x"
      @click="refreshData()"
      class="text-2xl w-max px-1 rounded-full"
    ></TheIcons>

    <div v-for="(information, index) in cardStore.currentHardware" class="p-1">
      <div v-if="index !== 'id'" class="flex justify- between border-b border-stone-300">
        <div>
          {{ index + ': ' }}
        </div>
        <div>
          {{ information }}
        </div>
      </div>
    </div>
    <div class="border border-stone-500 mt-5 rounded-md h-max">
      <div class="text-center uppercase border-stone-500 p-3">
        Zugehörige Komponenten Tabelle <i class="bi bi-table"></i>
      </div>
      <div class="flex gap-3 items-center justify-center p-4">
        <button
          @click="
            (tableStore.switchTableView(cardStore.currentHardware),
            (tableStore.showTable = 'komponentenTable'))
          "
          class="bg-blue-400 text-white rounded-lg px-5 py-1 cursor-pointer hover:bg-stone-200 hover:duration-300 not-focus:duration-300 hover:text-stone-600"
        >
          Anzeigen
        </button>
        <button
          @click="tableStore.showTable = 'normalTable'"
          class="border border-stone-500 text-stone-600 rounded-lg px-5 py-1 cursor-pointer hover:bg-stone-200 hover:duration-300 not-focus:duration-300"
        >
          Schließen
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
