import { ref, computed, reactive } from 'vue'
import { defineStore } from 'pinia'

export const useDatabaseStore = defineStore('database', () => {
  // const url = 'public/api/get_data.php'
  
  const url = 'http://localhost/test/get_data.php'
  const fetchedData = ref(null);
  const fetchState = ref('loading');

  async function getData() {

    let response;
    try {
      response = await fetch(url, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
        }
      });
      if (!response.ok) throw new Error('Response not okey!');
    } catch {
      fetchState.value = 'failed';
      return;
    }

    
    const obj = await response.json();

    return obj

    
  }

  async function createData(name, modellnummer, seriennummer, erfassungsdatum, hersteller, kategorie, ort, verbaut) {
  const url = 'http://localhost/test/create_data.php'

    let obj = {
      'name': name,
      'modellnummer': modellnummer,
      'seriennummer': seriennummer,
      'erfassungsdatum': erfassungsdatum,
      'hersteller': hersteller,
      'kategorie': kategorie,
      'ort': ort,
      'verbaut': verbaut,
    }

    let jsn = JSON.stringify(obj);

    let response = await fetch(url, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
      },
      "body": jsn
    })

    const answer = await response.json()

    console.log(answer);
  }


  return {createData, getData, fetchedData, fetchState}
})
