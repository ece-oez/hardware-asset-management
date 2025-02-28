import { ref } from 'vue'

export const komponentenBaum = [
  {
    heading: 'Steuerelement',
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
      {
        heading: 'NAS',
      },
      {
        heading: 'SAN',
      },
    ],
  },

  {
    heading: 'Sensoren',
    elemente: [
      {
        heading: 'Thermometer',
      },
      {
        heading: '...',
      },
      {
        heading: '...',
      },
    ],
  },

  {
    heading: 'Handhelds',
    elemente: [
      {
        heading: 'Scanner',
      },
      {
        heading: 'E-Reader',
      },
      {
        heading: 'Tablets',
      },
      {
        heading: 'Smartphone',
      },
      {
        heading: 'Spiele-Konsole',
      },
    ],
  },

  {
    heading: 'Wearables',
    elemente: [
      {
        heading: 'Smartglasses',
      },
      {
        heading: 'Smartwatch',
      },
      {
        heading: 'Fitnesstracker',
      },
    ],
  },

  {
    heading: 'Schnittstellen/ Adapter',
    elemente: [
      {
        heading: 'Dockingstation',
      },
      {
        heading: 'USB-Hub',
      },
      {
        heading: 'Adapter',
      },
      {
        heading: 'USB',
      },
      {
        heading: 'USB-C',
      },
      {
        heading: 'Displayport',
      },
      {
        heading: 'HDMI',
      },
      {
        heading: 'VGA',
      },
    ],
  },

  {
    heading: 'Netzwerk',
    elemente: [
      {
        heading: 'Repeater',
      },
      {
        heading: 'Modem',
      },
      {
        heading: 'Accesspoint',
      },
      {
        heading: 'Hub',
      },
      {
        heading: 'Router',
      },
      {
        heading: 'Switch',
      },
      {
        heading: 'Wlan-Adapter',
      },
      {
        heading: 'NIC',
      },
      {
        heading: 'Firewall',
      },
    ],
  },

  {
    heading: 'Strom',
    elemente: [
      {
        heading: 'Netzteil',
      },
      {
        heading: 'Akku/ Batterie',
      },
      {
        heading: 'USV',
      },
      {
        heading: 'PoE Switch',
      },
    ],
  },

  {
    heading: 'Peripheriegeräte',
    elemente: [
      {
        heading: 'Robotik',
      },
      {
        heading: 'Drohne',
      },
      {
        heading: 'Joystick',
      },
      {
        heading: 'Scanner',
      },
      {
        heading: 'Mikrofon',
      },
      {
        heading: 'Webcam',
      },
      {
        heading: 'Headset',
      },
    ],
  },

  {
    heading: 'Ein und Ausgabegeräte',
    elemente: [
      {
        heading: 'Lautsprecher',
      },
      {
        heading: 'Drucker',
      },
      {
        heading: 'Monitor',
      },
      {
        heading: 'Tastatur',
      },
      {
        heading: 'Maus',
      },
      {
        heading: 'Touchscreen',
      },
    ],
  },

  {
    heading: 'Audio',
    elemente: [
      {
        heading: 'Soundkarte',
      },
    ],
  },

  {
    heading: 'Kühlung',
    elemente: [
      {
        heading: 'Lüfter',
      },
      {
        heading: 'Wasser Kühlung',
      },
      {
        heading: 'Thermoelektrische Kühlung',
      },
    ],
  },
]
