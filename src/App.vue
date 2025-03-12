<script setup>
import { useModalStore } from './stores/modal'
import WindowView from './views/WindowView.vue'

const modalStore = useModalStore()
</script>

<template>
  <div
    v-if="modalStore.showModal"
    class="w-full h-full"
    :class="{
      'absolute z-4000': modalStore.showModal,
    }"
  ></div>
  <WindowView />
</template>

<style scoped></style>
