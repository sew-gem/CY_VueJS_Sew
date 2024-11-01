<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div class="mt-6 max-w-lg mx-auto py-10 px-20 bg-white rounded-lg shadow-md text-green-600">
        <h2 class="font-bold text-center mb-4">Currency Converter</h2>
        <form @submit.prevent="convertCurrency">
            <input 
                v-model.number="amount" 
                type="number" 
                placeholder="Enter amount"
                class="rounded border border-green-600 py-2 px-4 w-full mb-4"
                required
            />
            <select v-model="fromCurrency" class="rounded border border-green-600 py-2 px-4 w-full mb-4">
                <option v-for="currency in currencies" :key="currency" :value="currency">{{ currency }}</option>
            </select>
            <select v-model="toCurrency" class="rounded border border-green-600 py-2 px-4 w-full mb-4">
                <option v-for="currency in currencies" :key="currency" :value="currency">{{ currency }}</option>
            </select>
            <button type="submit" class="bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700 transition w-full">
                Convert
            </button>
        </form>
        <div v-if="result !== null" class="mt-4 text-center">
            <p class="text-xl font-bold">Converted Amount: {{ result.toFixed(2) }} {{ toCurrency }}</p>
        </div>
    </div>
</template>

<script setup>
    import { ref, onMounted } from 'vue';
    import axios from 'axios';

    const amount = ref(0);
    const fromCurrency = ref('USD');
    const toCurrency = ref('EUR');
    const result = ref(null);
    const currencies = ref([]);

    const fetchCurrencies = async () => {
        try {
            const response = await axios.get('https://api.exchangerate-api.com/v4/latest/USD');
            currencies.value = Object.keys(response.data.rates);
        } catch (error) {
            console.error('Error fetching currencies:', error);
        }
    };

    const convertCurrency = async () => {
        if (amount.value <= 0) return;
        try {
            const response = await axios.get(`https://api.exchangerate-api.com/v4/latest/${fromCurrency.value}`);
            const rate = response.data.rates[toCurrency.value];
            result.value = amount.value * rate;
        } catch (error) {
            console.error('Error converting currency:', error);
        }
    };

    onMounted(() => {
        fetchCurrencies();
    });
</script>

<style scoped>
</style>