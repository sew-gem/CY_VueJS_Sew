<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div class="p-4">
        <h2 class="text-2xl font-semibold mb-4">Danh sách sản phẩm</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <Item 
                v-for="product in products" 
                :key="product.id" 
                :product="product" 
                @confirm="handleConfirm" 
            />
        </div>
        <Check :products="products" />
    </div>
</template>

<script setup>
import { ref } from 'vue'; 
import Item from './Items.vue';
import Check from './Check.vue';

const products = ref([
    { id: 1, name: 'Product 1', description: 'Description...', isCheck: false },
    { id: 2, name: 'Product 2', description: 'Description...', isCheck: false },
    { id: 3, name: 'Product 3', description: 'Description...', isCheck: false }
]);

const handleConfirm = (productId) => {
    const product = products.value.find(p => p.id === productId);
    if (product) {
        product.isCheck = true; 
    }
};
</script>

<style scoped>
</style>