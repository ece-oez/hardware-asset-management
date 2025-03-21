<script setup>
import TheIcons from '@/components/TheIcons.vue'
</script>

<template>
  <div class="flex flex-col items-center justify-center gap-10 text-4xl">
    <TheIcons icon="bi bi-cup-hot-fill" class="text-9xl text-orange-950" />
    <slot></slot>
    <div>Go get you a coffee</div>
    <div>Site is loading ...</div>
  </div>
</template>

<style scoped></style>
