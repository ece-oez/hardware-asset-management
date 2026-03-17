<script setup>
import { useFilterStore } from '@/stores/filter'
import { useModalStore } from '@/stores/modal'
import { reactive, ref } from 'vue'

const modalStore = useModalStore()

const filterStore = useFilterStore()

let formInput = reactive({
  name: '',
  modellnummer: '',
  seriennummer: '',
  erfassungsdatum: '',
  hersteller: '',
  kategorie: '',
  ort: '',
})

let validateState = ref('')

function sendHardware() {
  if (validateState.value === false || validateState.value === '') return
  for (let index = 0; index < 7; index++) {
    filterStore.currentFilterItem[Object.keys(formInput)[index]] =
      formInput[Object.keys(formInput)[index]]
  }

  filterStore.formularFilterState = true
  modalStore.showModal = false
  validateState.value = ''
  clearModalSlots()
}

function checkValidation() {
  let countValide = 0
  for (let index = 0; index < 7; index++) {
    const value = formInput[Object.keys(formInput)[index]]

    if (value !== '') countValide++
  }

  if (countValide === 7) validateState.value = true
  else validateState.value = false
}

function closeModal() {
  filterStore.formularFilterState = false
  modalStore.showModal = false
  validateState.value = ''
  clearModalSlots()
}

function clearModalSlots() {
  for (let index = 0; index < 7; index++) {
    formInput[Object.keys(formInput)[index]] = ''
  }
}
</script>

<template>
  <div
    v-if="modalStore.showModal"
    class="absolute flex justify-center z-4000 items-center w-full h-full"
  >
    <div
      @click="modalStore.showModal = false"
      class="absolute flex justify-center z-3500 items-center w-full h-full bg-gray-400 opacity-50"
    ></div>

    <div
      class="w-full md:w-250 h-full overflow-y-scroll md:overflow-y-hidden md:h-max bg-white opacity-90 shadow-lg z-5000 blur-none md:rounded-xl flex flex-col gap-10 p-6"
    >
      <div class="flex flex-col items-center gap-4">
        <div
          v-for="info in filterStore.modalSlotsCap"
          class="flex flex-wrap md:flex-nowrap gap-4 items-center w-full"
        >
          <div class="font-bold w-1/4 text-start md:text-end">{{ info[0] }}:</div>
          <div class="flex border border-stone-400 rounded-sm p-2 w-3/4">
            <input
              type="text"
              v-model="formInput[filterStore.mapFilterItems[info[0]]]"
              :placeholder="info[1]"
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

      <div class="flex gap-5 justify-center">
        <button
          @click="(checkValidation(), sendHardware())"
          class="bg-blue-400 text-white rounded-lg py-4 w-full hover:bg-stone-200 hover:duration-300 not-focus:duration-300 hover:text-stone-600"
          type="submit"
        >
          Senden
        </button>
        <button
          @click="closeModal()"
          class="border border-gray-300 rounded-lg py-4 w-full hover:bg-stone-200 hover:duration-300 not-focus:duration-300"
        >
          Schließen
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
