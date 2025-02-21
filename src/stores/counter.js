import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useMenuStore = defineStore('menu', () => {
  const menuBtnState = ref(false);

  return { menuBtnState }
})
