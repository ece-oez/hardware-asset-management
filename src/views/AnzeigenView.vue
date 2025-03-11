<script setup>
import InformationCard from '@/components/InformationCard.vue'
import TableView from '@/components/TableView.vue'
import TreeView from '@/components/TreeView.vue'
import { useCardStore } from '@/stores/card'
import { useDatabaseStore } from '@/stores/database'
import { onMounted } from 'vue'

const cardStore = useCardStore()

const databaseStore = useDatabaseStore()

onMounted(() => {
  databaseStore.getData()
})
</script>
<template>
  <div class="flex gap-3 p-4">
    <TreeView class="w-1/5"></TreeView>
    <TableView class="w-full"></TableView>
    <InformationCard v-if="cardStore.cardState"></InformationCard>
  </div>
</template>
