<script setup>
import { onMounted, ref } from 'vue'
import TheLogin from './components/TheLogin.vue'
import UpdateFormular from './components/UpdateFormular.vue'
import TheModal from './components/TheModal.vue'
import WindowView from './views/WindowView.vue'
const loginState = ref(false)
</script>

<template>
  <TheLogin v-if="loginState"></TheLogin>
  <TheModal></TheModal>
  <UpdateFormular></UpdateFormular>

  <WindowView :class="{ 'blur - sm': loginState }" />
</template>

<style scoped></style>
