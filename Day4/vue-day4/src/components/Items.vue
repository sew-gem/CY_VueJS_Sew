<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div class="bg-white shadow-md rounded-lg p-4 m-2">
        <h3 class="text-lg font-bold">{{ product.name }}</h3>
        <p class="text-gray-700">{{ product.description }}</p>
        <button 
            @click="confirmProduct" 
            :class="{
                'bg-green-600 text-white rounded mt-2 px-4 py-1': !product.isCheck,
                'bg-gray-400 text-white rounded mt-2 px-4 py-1': product.isCheck
            }"
            :disabled="product.isCheck"
        >
        Xác nhận
        </button>
        <!-- <span v-if="product.isCheck" class="text-green-500 ml-8">Checked</span>
        <span v-else class="text-red-500 ml-8">Unchecked</span> -->
    </div>
</template>

<script setup>
import { defineProps, onMounted, defineEmits } from 'vue';

const props = defineProps({
    product: {
        type: Object,
        required: true
    }
});

onMounted(() => {
    console.log(`sản phẩm đã được tạo: ${props.product.name}`);
});

const emit = defineEmits(['confirm']);
const confirmProduct = () => {
    alert(`${props.product.name} Checked`);
    emit('confirm', props.product.id);
};
</script>

<style scoped></style>