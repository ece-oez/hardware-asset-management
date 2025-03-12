<script setup>
import TheIcons from './TheIcons.vue'
</script>

<template>
  <div class="flex border border-stone-500 rounded-lg p-2">
    <input type="text" placeholder="Suche nach ..." class="outline-none w-full" />
    <slot></slot>
  </div>
</template>

<style scoped></style>
