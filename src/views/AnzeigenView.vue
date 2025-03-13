<script setup>
import InformationCard from '@/components/ansehen/InformationCard.vue'
import TableView from '@/components/ansehen/TableView.vue'
import TreeView from '@/components/ansehen/TreeView.vue'
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
  <div class="flex gap-3 p-4">
    <TreeView class="w-1/5" :class="{ 'blur-sm': modalStore.showModal }"></TreeView>
    <TableView class="w-full" :class="{ 'blur-sm': modalStore.showModal }"></TableView>
    <InformationCard
      v-if="cardStore.cardState"
      :class="{ 'blur-sm': modalStore.showModal }"
    ></InformationCard>
  </div>
</template>
