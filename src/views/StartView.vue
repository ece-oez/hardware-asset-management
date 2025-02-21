<script setup>
import TheMenu from '@/components/TheMenu.vue'
import TopBar from '@/components/TopBar.vue'
import WahlKarten from '@/components/WahlKarten.vue'
import { useMenuStore } from '@/stores/counter'

const menuStore = useMenuStore()
</script>

<template>
  <div class="h-screen flex flex-col">
    <TopBar class="w-full p-3"></TopBar>
    <div class="flex flex-row h-full">
      <div
        id="menu"
        v-if="menuStore.menuBtnState"
        class="w-1/5 border-e-2 border-stone-400 shadow-2xl"
      >
        <TheMenu />
      </div>
      <div class="w-full h-full flex justify-around items-center">
        <WahlKarten icon="bi bi-eyeglasses text-6xl" text="Daten Lesen"></WahlKarten>
        <!-- <WahlKarten icon="bi bi-pen" text="Daten Bearbeiten"></WahlKarten> -->
        <WahlKarten
          icon="bi bi-plus-circle-dotted text-5xl"
          text="Daten Erstellen"
          class="gap-4"
        ></WahlKarten>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
