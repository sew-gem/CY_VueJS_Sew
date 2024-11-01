<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div class="w-lg mx-auto p-6 bg-white rounded-lg shadow-md">
        <p>this is news list</p>
            <ul>
                <li
                v-for="news in News"
                :key="news.id"
                class="text-lg font-semibold text-green-800"
                > 
                </li> 
            </ul>
    </div>
</template>

<script setup>
import { ref } from 'vue';
// import NewsDetail from './newsDetail.vue'

const News = ref([
    {id: 1, name: 'article 1', content: 'content articles...'},
    {id: 2, name: 'article 1', content: 'content articles...'},
    {id: 3, name: 'article 1', content: 'content articles...'},
    {id: 4, name: 'article 1', content: 'content articles...'},
])
</script>

<style lang="scss" scoped>

</style>    