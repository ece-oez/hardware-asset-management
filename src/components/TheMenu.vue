<script setup>
import { menuItems } from '../config/menuItems.js'
</script>

<template>
  <div class="w-full h-full">
    <div v-for="menuItem in menuItems">
      {{ menuItem.thema }}
      <div v-for="element in menuItem.elemente">
        {{ element.titel }}
        <i :class="element.icon"></i>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
