<script setup>
import WahlKarten from '@/components/WahlKarten.vue'
import { useMenuStore } from '@/stores/menu'
import { RouterLink } from 'vue-router'

const menuStore = useMenuStore()
</script>

<template>
  <div class="flex justify-around items-center">
    <RouterLink to="/anzeigen" class="w-1/5 h-1/4">
      <WahlKarten icon="bi bi-eyeglasses text-6xl" text="Daten Anzeigen" />
    </RouterLink>

    <!-- <WahlKarten icon="bi bi-pen" text="Daten Bearbeiten"></WahlKarten> -->
    <RouterLink to="/erstellen" class="w-1/5 h-1/4">
      <WahlKarten icon="bi bi-plus-circle-dotted text-5xl" text="Daten Erstellen" class="gap-4" />
    </RouterLink>
  </div>
</template>

<style scoped></style>
