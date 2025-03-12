<script setup>
import { testHardware } from '@/config/testHardware'
import { useModalStore } from '@/stores/modal'

const modalStore = useModalStore()

const modalSlots = Object.keys(testHardware[0]).slice(0, 7)

const modalSlotsCap = []

modalSlots.forEach((word) => {
  const firstLetter = word.charAt(0)

  const firstLetterCap = firstLetter.toUpperCase()

  const remainingLetters = word.slice(1)

  const capitalizedWord = firstLetterCap + remainingLetters

  const currentValue = testHardware[0][word]

  modalSlotsCap.push([capitalizedWord, currentValue])
})

function searchForHardware() {
  // code
}
</script>

<template>
  <div
    v-if="modalStore.showModal"
    class="absolute flex justify-center items-center w-[98%] h-[90%]"
  >
    <div
      v-if="modalStore.showModal"
      class="w-250 h-130 bg-white opacity-90 shadow-lg z-5000 blur-none rounded-xl flex flex-col gap-10 p-6"
    >
      <div class="flex flex-col items-center gap-4">
        <div v-for="info in modalSlotsCap" class="flex gap-4 items-center w-150">
          <div class="font-bold w-1/4 text-end">{{ info[0] }}:</div>
          <div class="flex border border-stone-400 rounded-sm p-2 w-3/4">
            <input type="text" :placeholder="info[1]" class="outline-none w-full" />
          </div>
        </div>
      </div>

      <div class="flex gap-15 justify-center">
        <button
          @click="(searchForHardware(), (modalStore.showModal = false))"
          class="bg-blue-400 text-white rounded-lg h-10 w-1/5 hover:bg-stone-200 hover:duration-300 not-focus:duration-300 hover:text-stone-600"
        >
          Senden
        </button>
        <button
          @click="modalStore.showModal = false"
          class="border rounded-lg h-10 w-1/5 hover:bg-stone-200 hover:duration-300 not-focus:duration-300"
        >
          Schließen
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
