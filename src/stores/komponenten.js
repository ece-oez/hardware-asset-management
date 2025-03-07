import { ref, computed, reactive } from 'vue'
import { defineStore } from 'pinia'
import { komponentenBaum } from '@/config/komponentenBaum'

export const useKomponenteStore = defineStore('komponente', () => {
  const komponenten = ref(null)

  komponenten.value = komponentenBaum

  let kategorieListe = []

  function fillKategorieListe() {
    kategorieListe = []
    for (let index = 0; index < komponenteStore.komponenten.length; index++) {
      const heading = komponenteStore.komponenten[index].heading
      console.log(komponenteStore.komponenten[index].show)

      if (komponenteStore.komponenten[index].show === true) {
        kategorieListe.push(heading)
      }

      for (let i = 0; i < komponenteStore.komponenten[index].elemente.length; i++) {
        const komponente = komponenteStore.komponenten[index].elemente[i].heading
        if (komponenteStore.komponenten[index].elemente[i].show === true) {
          kategorieListe.push(komponente)
        }
      }
    }
  }

  function updateHardware() {
    const filteredTestHardware = testHardware.filter((hardware) => {
      fillKategorieListe()
      for (let index = 0; index < kategorieListe.length; index++) {
        const kategorie = kategorieListe[index]

        if (hardware.kategorie === kategorie) return hardware
      }
    })
    return filteredTestHardware
  }

  return { komponenten, kategorieListe, updateHardware }
})
