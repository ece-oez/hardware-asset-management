<script setup>
import { ref } from 'vue'

const pswd = ref('')
const usrname = ref('')

let pswdHash = ''

// function mySubmit() {
//   const hashObj = new jsSHA('SHA-512', 'TEXT', { numRounds: 1 })
//   hashObj.update(pswd)
//   const hash = hashObj.getHash('HEX')
//   pswdHash = hash
//   console.log(pswdHash)
// }
</script>

<template>
  <div class="absolute w-full h-full flex justify-center items-center z-2000">
    <div
      class="absolute flex flex-col items-center gap-10 w-1/3 h-2/3 p-10 shadow-2xl rounded-xl border border-stone-500 z-3000"
    >
      <div class="text-4xl font-bold text-stone-700">login</div>

      <div class="flex border text-stone-600 border-stone-400 rounded-lg p-2 px-4 w-3/4">
        <input type="text" v-model="usrname" placeholder="Username" class="outline-none w-full" />
        <i class="bi bi-person-fill text-xl"></i>
      </div>

      <div class="flex border text-stone-600 border-stone-400 rounded-lg p-2 px-4 w-3/4">
        <input type="password" v-model="pswd" placeholder="Passwort" class="outline-none w-full" />
        <i class="bi bi-key-fill text-xl"></i>
      </div>

      <div class="flex justify-between w-3/4 h-max">
        <!-- <div class="flex items-center justify-center gap-2 h-full">
          <input type="checkbox" class="text-stone-400" />
          <div>Remember me</div>
        </div> -->
        <div class="flex items-center justify-center gap-2 h-full">
          <div>Passwort vergessen?</div>
        </div>
        <a class="underline text-blue-500" href="">passwort zurücksetzen</a>
      </div>
      <button
        @click="mySubmit()"
        class="bg-blue-400 text-white rounded-lg h-10 w-3/4 hover:bg-stone-200 hover:duration-300 not-focus:duration-300 hover:text-stone-600"
        type="submit"
      >
        Login
      </button>
    </div>

    <div class="absolute w-1/3 h-2/3 bg-white opacity-10 shadow-sm rounded-xl"></div>
  </div>
</template>

<style scoped></style>
