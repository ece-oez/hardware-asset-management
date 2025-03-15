<script setup></script>

<template>
  <div class="absolute w-full h-full flex justify-center items-center z-2000">
    <div
      class="absolute flex flex-col items-center gap-10 w-1/3 h-2/3 p-10 shadow-2xl rounded-xl border border-stone-500 z-3000"
    >
      <div class="text-4xl">login</div>

      <div class="flex border text-stone-600 border-stone-400 rounded-full p-2 w-3/4">
        <input type="text" placeholder="Username" class="outline-none w-full" />
        <i class="bi bi-person-fill text-xl"></i>
      </div>

      <div class="flex border text-stone-600 border-stone-400 rounded-full p-2 w-3/4">
        <input type="text" placeholder="Username" class="outline-none w-full" />
        <i class="bi bi-key-fill text-xl"></i>
      </div>

      <div class="flex justify-between w-full h-max">
        <div class="flex items-center justify-center gap-2 h-full">
          <input type="checkbox" class="text-stone-400" />
          <div>Remember me</div>
        </div>
        <a href="">forgot password?</a>
      </div>
      <button
        class="flex border text-white text-center bg-stone-400 border-stone-400 rounded-full p-2 w-3/4"
      >
        login
      </button>
    </div>

    <div class="absolute w-1/3 h-2/3 bg-white opacity-10 shadow-sm rounded-xl"></div>
  </div>
</template>

<style scoped></style>
