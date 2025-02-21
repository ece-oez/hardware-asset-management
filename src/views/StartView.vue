<script setup>
import TheMenu from '@/components/TheMenu.vue';
import TopBar from '@/components/TopBar.vue';
import WahlKarten from '@/components/WahlKarten.vue';
import { useMenuStore } from '@/stores/counter';

const menuStore = useMenuStore();


</script>
<template>
    <div class="h-screen flex flex-col">
        <TopBar class="w-full p-3"></TopBar>
        <div class="flex flex-row h-full">
            <div v-if="menuStore.menuBtnState" class="w-1/5 border-e-2 border-stone-400 shadow-2xl">
            <!-- menü punkte array -->
             <TheMenu/>
                Info
            </div>
            <div class="w-full h-full flex justify-around items-center">
                <WahlKarten icon="bi bi-eyeglasses" text="Daten Lesen"></WahlKarten>
                <!-- <WahlKarten icon="bi bi-pen" text="Daten Bearbeiten"></WahlKarten> -->
                <WahlKarten icon="bi bi-plus-circle-dotted" text="Daten Erstellen"></WahlKarten>
            </div>
        </div>
        
    </div>
    
    

    
</template>

<style scoped>

.menuAnim{
    animation: slide-right;
    animation-duration: 2s;
}

@keyframes slide-right {
    0%{
        transform: scaleX(20px);
    }
}

</style>
