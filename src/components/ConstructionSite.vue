<script setup>
import TheIcons from './TheIcons.vue'
</script>

<template>
  <div class="flex flex-col items-center justify-center gap-10 text-4xl">
    <TheIcons icon="bi bi-cone-striped" class="text-9xl text-orange-500" />
    <slot></slot>
    Site in construction.
  </div>
</template>

<style scoped></style>
