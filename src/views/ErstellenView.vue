<script setup>
import { formItems } from '@/config/formItems';
import containedComponentsList from '@/components/containedComponentsList.vue';

</script>
<template>
  <div>
    <div v-for="formItem in formItems" class="grid grid-cols-2 gap-4">
      <div :key="formItem.label" class="flex flex-col w-[200px] p-1">
        <label>{{ formItem.label }}</label>
        <input type="text" class="w-full border-1" />
      </div>
    </div>
    <containedComponentsList />
  </div>
</template>
