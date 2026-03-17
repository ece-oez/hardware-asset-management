<script setup>
import TextBlock from '@/components/guide/TextBlock.vue'
</script>
<template>
  <section class="flex flex-col gap-5">
    <h1 class="text-6xl text-center">Top Bar – Ausblick</h1>
    <div class="p-4 flex justify-around">
      <div class="w-1/2 flex flex-col justify-center items-center gap-5">
        <p class="text-lg">Auf der Top Navbar sind zwei wichtige Buttons:</p>

        <TextBlock
          class="w-full"
          nummer="1"
          title="Menu"
          text="Ganz links ist das Burger Menü Icon, mit dem man wie der Name schon sagt zu dem Menu kommt. Dort kannst du dich über die ganzen weiteren Seiten navigieren. Auf diese besagten Seiten wird im Nachhinein eingegangen."
        />

        <TextBlock
          class="w-full"
          nummer="2"
          title="Account"
          text="Und ganz rechts findest du das Account-Icon. Über dieses Symbol gelangst du zu
                  deinen Account-Einstellungen, wo du persönliche Daten bearbeiten und dein Konto
                  verwalten kannst. Außerdem findest du hier die Möglichkeit, dich abzumelden."
        />
      </div>
      <div class="w-1/2 h-max border border-stone-400">
        <img src="../../assets/img/guide/top.png" alt="" />
      </div>
    </div>
  </section>
</template>
