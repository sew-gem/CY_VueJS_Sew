<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div class="mt-6 max-w-lg mx-auto py-10 px-20 bg-white rounded-lg shadow-md text-green-600 text-center">
        <h2 class="font-bold text-center m-4">Countdown Timer</h2>
        <div class="text-center mb-4">
            <input 
                v-model.number="timeInput" 
                type="number" 
                placeholder="00:00" 
                class="border border-green-600 py-2 px-4 rounded w-1/2"
            />
            <button @click="startCountdown" class="bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700 transition ml-2">
                Start
            </button>
        </div>

        <span class="text-4xl font-bold ">{{ formattedTime }}</span>

        <div v-if="isTimeOver" class="mt-4 text-center">
            <p class="text-xl font-bold">Time over!</p>
        </div>
    </div>
</template>

<script setup>
import { ref, computed, watch } from 'vue';

const timeInput = ref(0);
const timeLeft = ref(0);
const countdownInterval = ref(null);
const isTimeOver = ref(false);  

const formattedTime = computed(() => {
    const minutes = Math.floor(timeLeft.value / 60);
    const seconds = timeLeft.value % 60;
    return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
});

const startCountdown = () => {
    if (timeInput.value <= 0) return;

    timeLeft.value = timeInput.value;
    isTimeOver.value = false; 

    if (countdownInterval.value) {
        clearInterval(countdownInterval.value);
    }

    countdownInterval.value = setInterval(() => {
        if (timeLeft.value > 0) {
            timeLeft.value--;
        } else {
            clearInterval(countdownInterval.value);
        }
    }, 1000);
};

watch(timeLeft, (newValue) => {
    if (newValue === 0) {
        isTimeOver.value = true;
        console.log("Countdown finished!");
    }
});
</script>

<style scoped> 
</style>