<template>
    <div class="w-lg mx-auto p-6 bg-white rounded-lg shadow-md">
        <h2 class="text-2xl font-semibold mb-4">List Products</h2>
        
        <div class="mb-4">
            <button @click="showAllProducts" class="mr-2 bg-green-500 text-white rounded px-4 py-2">All Products</button>
            <button @click="showFilter" class="bg-blue-500 text-white rounded px-4 py-2">Filter</button>
        </div>

        <div v-if="isFiltering" class="mb-4">
            <label for="minPrice" class="block mb-2">min prise:</label>
            <input 
                type="number" 
                id="minPrice" 
                v-model="minPrice" 
                class="border rounded-md p-2 mb-4 w-full" 
                placeholder="enter a number"
            />
        </div>

        <ul class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <li v-for="product in displayedProducts" :key="product.id" class="border p-4 rounded shadow-sm bg-white">
                <h2 class="text-lg font-semibold">{{ product.name }}</h2>
                <p class="text-gray-600">{{ product.description }}</p>
                <p class="text-green-600 font-bold">${{ product.price.toFixed(2) }}</p>
            </li>
        </ul>

        <p v-if="displayedProducts.length === 0" class="text-red-500 mt-4">Không có sản phẩm nào phù hợp.</p>
    </div>
</template>

<script setup>
import { ref, computed } from 'vue';

const products = ref([
    { id: 1, name: 'Product 1', description: 'Description Product 1', price: 29.99 },
    { id: 2, name: 'Product 2', description: 'Description Product 2', price: 49.99 },
    { id: 3, name: 'Product 3', description: 'Description Product 3', price: 19.99 },
    { id: 4, name: 'Product 4', description: 'Description Product 4', price: 39.99 },
    { id: 5, name: 'Product 5', description: 'Description Product 5', price: 59.99 },
    { id: 5, name: 'Product 6', description: 'Description Product 6', price: 29.99 },
    { id: 5, name: 'Product 7', description: 'Description Product 7', price: 29.99 },
    { id: 5, name: 'Product 8', description: 'Description Product 8', price: 29.99 },
    { id: 5, name: 'Product 9', description: 'Description Product 8', price: 29.99 },
]);

const minPrice = ref(0);
const isFiltering = ref(false); 

const showAllProducts = () => {
    isFiltering.value = false;
    minPrice.value = 0;
};

const showFilter = () => {
    isFiltering.value = true;
};

const displayedProducts = computed(() => {
    if (isFiltering.value) {
        return products.value.filter(product => product.price >= minPrice.value);
    }
    return products.value; 
});
</script>

<style scoped>
</style>