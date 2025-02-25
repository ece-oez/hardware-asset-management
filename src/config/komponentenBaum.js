import { ref } from 'vue'

export const komponentenBaum = [
  {
    heading: 'Steuerelement',
    // show: ref(false),
    elemente: [
      {
        heading: 'Prozessor/CPU',
      },
      {
        heading: 'Motherboard',
      },
    ],
  },
  {
    heading: 'Grafik',
    elemente: [
      {
        heading: 'GPU',
      },
      {
        heading: 'Grafikkarte',
      },
      {
        heading: 'VR-Brille',
      },
    ],
  },

  {
    heading: 'Speicher',
    elemente: [
      {
        heading: 'RAM',
      },
      {
        heading: 'SD-Karte',
      },
      {
        heading: 'Micro-SD',
      },
      {
        heading: 'USB-Stick',
      },
      {
        heading: 'SSD',
      },
      {
        heading: 'HDD',
      },
      {
        heading: 'CD',
      },
      {
        heading: 'DVD',
      },
      {
        heading: 'Blu-ray',
      },
    ],
  },
]
