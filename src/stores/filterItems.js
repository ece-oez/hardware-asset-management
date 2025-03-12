import { ref, computed, reactive } from 'vue'
import { defineStore } from 'pinia'
import { testHardware } from '@/config/testHardware'

export const useFilterStore = defineStore('filter', () => {
  const currentToggleFilterItem = ref('Name')
  const filterToggleBarState = ref(false)

  const searchBarText = ref()

  const currentFilterItem = reactive({
    name: 'Laptop A15 Pro',
    modellnummer: 'A15P-2025',
    seriennummer: 'SN12345',
    erfassungsdatum: '2025-03-01',
    hersteller: 'Acer',
    kategorie: 'Laptop',
    ort: 'Lager',
    verbaut: '',
  })

  const filterItems = Object.keys(testHardware[0]).slice(0, 7)

  const filterItemsCapStr = []
  const modalSlotsCap = []

  filterItems.forEach((word) => {
    const firstLetter = word.charAt(0)

    const firstLetterCap = firstLetter.toUpperCase()

    const remainingLetters = word.slice(1)

    const capitalizedWord = firstLetterCap + remainingLetters

    const currentValue = testHardware[0][word]

    filterItemsCapStr.push(capitalizedWord)

    modalSlotsCap.push([capitalizedWord, currentValue])
  })

  const mapFilterItems = reactive({
    Name: 'name',
    Modellnummer: 'modellnummer',
    Seriennummer: 'seriennummer',
    Erfassungsdatum: 'erfassungsdatum',
    Hersteller: 'hersteller',
    Kategorie: 'kategorie',
    Ort: 'ort',
    Verbaut: 'verbaut',
  })

  return {
    currentToggleFilterItem,
    filterToggleBarState,
    searchBarText,
    currentFilterItem,
    filterItemsCapStr,
    modalSlotsCap,
    mapFilterItems,
  }
})
