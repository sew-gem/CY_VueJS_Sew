<template>
  <div class="flex flex-col items-center justify-center w-lg mx-auto py-10 bg-white rounded-lg shadow-md">
    <h2 class="text-lg font-bold text-green-600 mb-4">Total click: <span class="font-semibold">{{ count }}</span></h2>
    <button 
      @click="incrementCount" 
      class="px-6 py-2 bg-green-500 text-white rounded hover:bg-green-700 transition"
    >
    Nhấp Vào Đây
    </button>
  </div>
</template>

<script setup>
    import {ref} from 'vue'

    const count = ref(0);
    function incrementCount(){
        count.value++;
    }
</script>

<style scoped> </style>