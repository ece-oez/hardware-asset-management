<script setup>
import {menuItems} from "../config/menuItems.js";


</script>

<template>

    <div class="w-full h-full bg-amber-400">
        
        <div v-for="menuItem in menuItems">
            {{menuItem.text}}
        </div>
        
    </div>

</template>

<style scoped>

</style>
