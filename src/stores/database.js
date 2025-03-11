import { ref, computed, reactive } from 'vue'
import { defineStore } from 'pinia'

export const useDatabaseStore = defineStore('database', () => {
  const url = 'public/api/get_data.php'
  async function getData() {
    let response = await fetch(url, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
      },
    })

    const data = await response.json()

    console.log(data)
  }

  return { getData }
})
