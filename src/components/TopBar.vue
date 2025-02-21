<script setup>
import TheIcons from './TheIcons.vue';
import { useMenuStore } from '@/stores/counter';
import {ref} from "vue";

const menuStore = useMenuStore();

const menuIcon =ref("bi bi-list");

function toggleMenu(){
    menuStore.menuBtnState = !menuStore.menuBtnState;
    if(menuStore.menuBtnState === false) menuIcon.value = "bi bi-list";
    else menuIcon.value = "bi bi-arrow-left-square";
}

</script>

<template>

    <div class="border-b-2 border-stone-400 text-2xl text-stone-700 flex justify-between">
        <TheIcons :icon="menuIcon" @click="toggleMenu()" :class="{'translate-x-70':menuStore.menuBtnState === true}"></TheIcons>
        <TheIcons icon="bi bi-person-circle"></TheIcons>
    </div>
  
</template>

<style scoped>

</style>
