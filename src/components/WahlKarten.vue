<script setup>
import TheIcons from './TheIcons.vue';

const props = defineProps({
    icon: String,
    text: String
})

</script>

<template>

    <div class="bg-stone-400 flex flex-col justify-center items-center p-4 w-1/5 h-1/4 text-2xl rounded-lg shadow-2xl">
        <TheIcons :icon="props.icon"></TheIcons>
        {{ props.text }}
    </div>
 
</template>
