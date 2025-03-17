<script setup>
import TheIcons from '@/components/TheIcons.vue'
import { ref } from 'vue'

const showMiniModal = ref(false)
</script>
<template>
  <div>
    <!-- modal -->
    <div v-if="showMiniModal" class="absolute w-full flex justify-center items-baseline">
      <div
        class="bg-white z-5000 p-5 shadow-2xl rounded-lg flex flex-col items-center justify-center gap-5"
      >
        <TheIcons
          icon="bi bi-coin"
          class="text-5xl text-yellow-500 flex items-center justify-center"
        />

        <div>Dies ist ein Kostenpflichtiges Feature.</div>
        <div
          class="text-blue-300 cursor-pointer hover:text-blue-500 hover:duration-300 not-focus:duration-300"
        >
          erfahre mehr
        </div>

        <button
          @click="showMiniModal = false"
          class="border rounded-lg text-stone-600 h-10 px-10 hover:bg-stone-200 hover:duration-300 not-focus:duration-300"
        >
          Schließen
        </button>
      </div>
    </div>

    <div v-if="showMiniModal === true" class="absolute w-full h-[90%] z-3000"></div>

    <!-- account page -->
    <div class="flex flex-col items-center gap-10" :class="{ 'blur-xs': showMiniModal === true }">
      <h1 class="pt-10 font-bold text-5xl">Account</h1>
      <!-- picture -->
      <div class="flex items-center justify-center w-full gap-10">
        <div class="w-50">
          <img src="../assets/img/some/nutzer.png" class="rounded-full" alt="" />
        </div>
        <div class="flex gap-5">
          <button
            @click="showMiniModal = true"
            class="bg-blue-400 text-white rounded-lg h-10 px-10 hover:bg-stone-200 hover:duration-300 not-focus:duration-300 hover:text-stone-600"
          >
            <!-- <input type="file" accept="image/png, image/jpeg" /> -->
            Bild ändern
          </button>
          <button
            class="border rounded-lg text-red-600 h-10 px-10 hover:bg-stone-200 hover:duration-300 not-focus:duration-300"
          >
            Bild löschen
          </button>
        </div>
      </div>

      <!-- name -->
      <div class="w-1/3">
        <div class="text-stone-600">Profilname</div>
        <div class="flex border border-stone-400 rounded-sm p-2 w-full">
          <input type="text" placeholder="Ece Özmen" class="outline-none w-full" />
        </div>
      </div>
      <div class="w-1/3">
        <div class="text-stone-600">Username</div>
        <div class="flex border border-stone-400 rounded-sm p-2 w-full">
          <input type="text" placeholder="eo-13" class="outline-none w-full" />
        </div>
      </div>
      <div class="w-1/3">
        <div class="text-stone-600">Passwort</div>
        <div class="flex border border-stone-400 rounded-sm p-2 w-full">
          <input type="password" placeholder="info-ente1299!Heiko" class="outline-none w-full" />
        </div>
      </div>

      <button
        class="bg-blue-400 text-white rounded-lg h-10 px-10 hover:bg-stone-200 hover:duration-300 not-focus:duration-300 hover:text-stone-600"
      >
        Speicher Änderungen
      </button>
    </div>
  </div>
</template>
