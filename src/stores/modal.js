import { ref, computed, reactive } from 'vue'
import { defineStore } from 'pinia'

export const useModalStore = defineStore('modal', () => {
  const showModal = ref(false)

  return { showModal }
})
