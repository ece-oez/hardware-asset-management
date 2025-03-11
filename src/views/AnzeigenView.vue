<script setup>
import InformationCard from '@/components/InformationCard.vue'
import TableView from '@/components/TableView.vue'
import TreeView from '@/components/TreeView.vue'
import { useCardStore } from '@/stores/card'
import { useDatabaseStore } from '@/stores/database'
import { useModalStore } from '@/stores/modal'
import { onMounted } from 'vue'

const cardStore = useCardStore()

const databaseStore = useDatabaseStore()

const modalStore = useModalStore()

onMounted(() => {
  // databaseStore.getData()
  // databaseStore.createData('lenovo', '789', '758' );
})
</script>
<template>
  <div class="flex gap-3 p-4" :class="{ '': modalStore.showModal }">
    <div v-if="modalStore.showModal" class="absolute w-300 h-100 bg-red-900 rounded-lg">modal</div>
    <TreeView class="w-1/5"></TreeView>
    <TableView class="w-full"></TableView>
    <InformationCard v-if="cardStore.cardState"></InformationCard>
  </div>
</template>
