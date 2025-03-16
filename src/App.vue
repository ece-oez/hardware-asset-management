<script setup>
import TheLogin from './components/TheLogin.vue'
import TheModal from './components/TheModal.vue'
import WindowView from './views/WindowView.vue'
</script>

<template>
  <TheLogin></TheLogin>
  <TheModal></TheModal>

  <WindowView class="blur-sm" />
</template>

<style scoped></style>
