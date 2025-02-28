<script setup>
import InformationCard from '@/components/InformationCard.vue'
import TableView from '@/components/TableView.vue'
import TreeView from '@/components/TreeView.vue'
import { useCardStore } from '@/stores/card'

const cardStore = useCardStore()
</script>
<template>
  <div class="flex gap-3 p-4">
    <TreeView class="w-1/4"></TreeView>
    <TableView class="w-full"></TableView>
    <InformationCard v-if="cardStore.cardState"></InformationCard>
  </div>
</template>
