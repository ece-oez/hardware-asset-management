import { ref, reactive } from 'vue'
import { defineStore } from 'pinia'
import { testHardware } from '@/config/testHardware'

export const useFilterStore = defineStore('filter', () => {
  /**
   * @var value of SearchItem in TableView
   */
  const currentToggleFilterItem = ref('Name')
  /**
   * @var in SearchItem der current status von ToggleBarDown
   */
  const filterToggleBarState = ref(false)

  /**
   * @var Searchbar value/text
   */
  const searchBarText = ref()

  /**
   * @var status für search filter aktiv
   */
  const filterState = ref(false)

  /**
   * @var beispiel spalten für das modal
   */
  const testHardwareModal = reactive({
    name: 'Laptop A15 Pro',
    modellnummer: 'A15P-2025',
    seriennummer: 'SN12345',
    erfassungsdatum: '2025-03-01',
    hersteller: 'Acer',
    kategorie: 'Laptop',
    ort: 'Lager',
  })

  /**
   * @var hardware auf die gefilter wird
   */
  const currentFilterItem = reactive({
    name: '',
    modellnummer: '',
    seriennummer: '',
    erfassungsdatum: '',
    hersteller: '',
    kategorie: '',
    ort: '',
  })

  // hardwareFilterKeys
  /**
   * @var Die ersten 6 Keys von den gespeicherten Hardware Komponenten
   */
  const filterItems = Object.keys(testHardware[0]).slice(0, 7) // output: [name, modellnummer, seriennummer, erfassungsdatum, hersteller, kategorie, ort]

  // hardwareFilterKeysCap
  /**
   * @var Die ersten 6 Keys von den gespeicherten Hardware Komponenten in Caps am Anfang
   */
  const filterItemsCapStr = [] // output: [Name, Modellnummer, Seriennummer, Erfassungsdatum, Hersteller, Kategorie, Ort]

  // modalSlotsCapArr
  /**
   * @var Die ersten 6 Keys von den gespeicherten Hardware Komponenten in Caps am Anfang und test Daten für das Modal
   */
  const modalSlotsCap = []

  // Die ersten Buchstaben in Caps dann filterItemsCapStr und modalSlotsCap füllen
  filterItems.forEach((word) => {
    const firstLetter = word.charAt(0)

    const firstLetterCap = firstLetter.toUpperCase()

    const remainingLetters = word.slice(1)

    const capitalizedWord = firstLetterCap + remainingLetters

    const currentValue = testHardware[0][word]

    filterItemsCapStr.push(capitalizedWord)

    modalSlotsCap.push([capitalizedWord, currentValue])
  })

  // mappedKeys
  const mapFilterItems = reactive({
    Name: 'name',
    Modellnummer: 'modellnummer',
    Seriennummer: 'seriennummer',
    Erfassungsdatum: 'erfassungsdatum',
    Hersteller: 'hersteller',
    Kategorie: 'kategorie',
    Ort: 'ort',
    // Verbaut: 'verbaut',
  })

  return {
    currentToggleFilterItem,
    filterToggleBarState,
    searchBarText,
    filter: filterState,
    currentFilterItem,
    filterItemsCapStr,
    modalSlotsCap,
    mapFilterItems,
    testHardwareModal,
  }
})
