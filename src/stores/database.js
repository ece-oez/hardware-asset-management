import { ref, computed, reactive } from 'vue'
import { defineStore } from 'pinia'

export const useDatabaseStore = defineStore('database', () => {
  // const url = 'public/api/get_data.php'

  // const data = ref(null);
  // async function getData() {
  // const url = 'http://localhost/test/get_data.php'

  //   let response = await fetch(url, {
  //     method: 'POST',
  //     headers: {
  //       Accept: 'application/json',
  //     },
  //   })

  //   data.value = await response.json()
  // }

  // async function createData(name, modellnr, seriennr) {
  // const url = 'http://localhost/test/create_data.php'

  //   let obj = {
  //     'name': name,
  //     'modellnr': modellnr,
  //     'seriennr': seriennr,
  //   }

  //   let jsn = JSON.stringify(obj);

  //   let response = await fetch(url, {
  //     method: 'POST',
  //     headers: {
  //       Accept: 'application/json',
  //     },
  //     "body": jsn
  //   })

  //   const answer = await response.json()

  //   console.log(answer);
  // }

  return {}
})
