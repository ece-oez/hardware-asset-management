<script setup>
import { komponentenBaum } from '@/config/komponentenBaum'
import TheIcons from './TheIcons.vue'
</script>

<template>
  <div class="select-none p-5 text-stone-800 bg-stone-200 rounded-4xl flex flex-col gap-3">
    <div v-for="komponente in komponentenBaum" class="font-bold">
      <button @click="komponente.show = !komponente.show">
        <TheIcons icon="bi bi-arrow-down-square" />
      </button>
      {{ komponente.heading }}

      <div
        v-for="element in komponente.elemente"
        :class="{ hidden: komponente.show === false }"
        class="font-normal"
      >
        <input type="checkbox" />
        {{ element.heading }}
      </div>
    </div>
  </div>
</template>

<style scoped></style>
