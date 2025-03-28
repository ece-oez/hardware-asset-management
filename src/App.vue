<script setup>
import { onMounted } from 'vue'
import TheLogin from './components/TheLogin.vue'
import TheModal from './components/TheModal.vue'
import WindowView from './views/WindowView.vue'
const loginState = false
</script>

<template>
  <TheLogin v-if="loginState"></TheLogin>
  <TheModal></TheModal>

  <WindowView :class="{ 'blur - sm': loginState }" />
</template>

<style scoped></style>
