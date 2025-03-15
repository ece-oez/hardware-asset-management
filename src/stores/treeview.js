import { ref, computed, reactive } from 'vue'
import { defineStore } from 'pinia'

export const useTreeviewStore = defineStore('treeview', () => {
  const normalConfig = ref(true)
  const toggleAllState = ref(false)
  const toggleNoneState = ref(false)

  return { normalConfig, toggleAllState, toggleNoneState }
})
