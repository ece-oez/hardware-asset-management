<script setup>
import TheModal from './components/TheModal.vue'
import { useModalStore } from './stores/modal'
import WindowView from './views/WindowView.vue'

const modalStore = useModalStore()
</script>

<template>
  <TheModal></TheModal>

  <WindowView />
</template>

<style scoped></style>
