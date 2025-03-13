import { ref, computed, reactive } from 'vue'
import { defineStore } from 'pinia'

export const useCardStore = defineStore('card', () => {
  const cardState = ref(false)
  const currentHardware = reactive({})
  const currentHardwareName = ref()

  return { cardState, currentHardware, currentHardwareName }
})
