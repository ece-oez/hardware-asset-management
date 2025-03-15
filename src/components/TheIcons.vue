<script setup>
const props = defineProps({
  icon: String,
})
</script>

<template>
  <div class="cursor-pointer">
    <i :class="$props.icon"></i>
  </div>
</template>

<style scoped></style>
