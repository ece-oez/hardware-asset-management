<script setup>
import { useCardStore } from '@/stores/card'
import { useDatabaseStore } from '@/stores/database'
import { useFilterStore } from '@/stores/filter'

const filterStore = useFilterStore()

const databaseStore = useDatabaseStore()

const cardStore = useCardStore()

function update() {
  databaseStore.updateData(
    cardStore.currentHardware.id,
    cardStore.currentHardware.name,
    cardStore.currentHardware.modellnummer,
    cardStore.currentHardware.seriennummer,
    cardStore.currentHardware.erfassungsdatum,
    cardStore.currentHardware.hersteller,
    cardStore.currentHardware.kategorie,
    cardStore.currentHardware.ort,
    cardStore.currentHardware.verbaut,
  )
  databaseStore.updateFormular = false
}
</script>

<template>
  <div
    v-if="databaseStore.updateFormular"
    class="absolute flex justify-center z-4000 items-center w-full h-full"
  >
    <div
      class="w-250 h-150 bg-white opacity-90 shadow-lg z-5000 blur-none rounded-xl flex flex-col gap-10 p-6"
    >
      <div class="text-3xl bold">Hardware Überarbeiten</div>

      <div class="flex flex-col items-center gap-4">
        <div v-for="info in filterStore.modalSlotsCap" class="flex gap-4 items-center w-full">
          <div class="font-bold w-1/4 text-end">{{ info[0] }}:</div>
          <div class="flex border border-stone-400 rounded-sm p-2 w-3/4">
            <input
              type="text"
              v-model="cardStore.currentHardware[filterStore.mapFilterItems[info[0]]]"
              class="outline-none w-full"
            />
          </div>
          <div v-if="validateState === false" class="w-1/6">
            <div
              v-if="formInput[filterStore.mapFilterItems[info[0]]] === ''"
              class="w-full ps-4 text-start text-red-600"
            >
              Eingabe fehlt
            </div>
          </div>
        </div>
      </div>

      <div class="flex gap-15 justify-center">
        <button
          @click="update()"
          class="bg-blue-400 text-white rounded-lg h-10 w-1/5 hover:bg-stone-200 hover:duration-300 not-focus:duration-300 hover:text-stone-600"
          type="submit"
        >
          Senden
        </button>
        <button
          @click="databaseStore.updateFormular = false"
          class="border rounded-lg h-10 w-1/5 hover:bg-stone-200 hover:duration-300 not-focus:duration-300"
        >
          Abbrechen
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
