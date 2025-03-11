<script setup>
import { useCardStore } from '@/stores/card'
import TheIcons from './TheIcons.vue'

const cardStore = useCardStore()
</script>

<template>
  <div class="flex flex-col border border-stone-500 rounded-2xl w-1/3 p-4">
    <TheIcons
      icon="bi bi-x"
      @click="cardStore.cardState = false"
      class="text-2xl border w-max px-1 rounded-full"
    ></TheIcons>

    <div
      v-for="(information, index) in cardStore.currentHardware"
      class="p-1 border-b border-stone-300"
    >
      <div class="flex justify-between">
        <div>
          {{ index + ': ' }}
        </div>
        <div>
          {{ information }}
        </div>
      </div>
    </div>
    <div class="border border-stone-500 mt-5 rounded-md h-full">
      <div class="text-center uppercase border-b border-stone-500 p-3">
        Zugehörige Komponenten
        
      </div>
      <div class=" flex gap-3 items-center justify-center p-4">
        <button class="bg-stone-500 text-white rounded-lg px-5 py-1">Tabelle Anzeigen</button>
        <button class="border border-stone-500 text-stone-600 rounded-lg px-5 py-1">Tabelle Schließen</button>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
