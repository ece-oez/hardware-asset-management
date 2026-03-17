import { ref, computed, reactive } from 'vue'
import { testHardware } from '@/config/testHardware'
import { defineStore } from 'pinia'
import { komponentenBaum } from '@/config/komponentenBaum'

export const useKomponenteStore = defineStore('komponente', () => {
  const komponenten = ref(null)

  komponenten.value = komponentenBaum

  return { komponenten }
})
