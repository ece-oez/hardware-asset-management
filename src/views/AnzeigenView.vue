<script setup>
import TableView from '@/components/TableView.vue'
import TreeView from '@/components/TreeView.vue'
</script>
<template>
  <div class="flex gap-3 p-4">
    <TreeView class="w-1/4"></TreeView>
    <TableView class="bg-green-800 w-full"></TableView>
  </div>
</template>
