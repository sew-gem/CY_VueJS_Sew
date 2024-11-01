<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div class="bg-white shadow-md rounded-lg p-4 my-4 mx-2">
        <h2 class="text-2xl font-semibold mb-4">Danh sách trạng thái sản phẩm</h2>
        <ul>
            <li 
                v-for="product in products" 
                :key="product.id"
                class="text-lg font-semibold"
            >
                {{ product.name }}: 
                <span v-if="product.isCheck" class="text-green-500 ml-8" > checked </span>
                <span v-else class="text-red-500 ml-8" > uncheck </span>
            </li>
        </ul>
    </div>
</template>

<script setup>
import { defineProps } from 'vue';

defineProps({
    products: {
        type: Array,
        required: true
    }
});
</script>

<style scoped>
</style>