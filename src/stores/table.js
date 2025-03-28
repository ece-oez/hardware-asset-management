import { ref, computed, reactive } from 'vue'
import { defineStore } from 'pinia'
import { testHardware } from '@/config/testHardware'

export const useTableStore = defineStore('table', () => {
  const showTable = ref('normalTable')

  let komponentenZurHardware = ref()

  function switchTableView(currentHardware) {
    komponentenZurHardware.value = []

    komponentenZurHardware.value = testHardware.filter((hardware) => {
      if (currentHardware.seriennummer === hardware.verbaut) return hardware
    })

    console.log(komponentenZurHardware.value)
  }

  return { showTable, switchTableView, komponentenZurHardware }
})
