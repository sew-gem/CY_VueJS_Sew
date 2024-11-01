<template>
  <div id="app" class="bg-gray-100 min-h-screen w-full">
    <nav class="bg-green-600 rounded">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-2">
        <div class="relative">
          <div class="overflow-y-auto max-h-16 flex justify-center space-x-8 items-center custom-scroll">
            <router-link 
              to="/status" 
              class="text-white hover:text-green-400 px-3 pt-2 text-xs no-underline">
              Checker
            </router-link>
            
            <router-link 
              to="/counter" 
              class="text-white hover:text-green-400 px-3 py-2 text-xs no-underline">
              Counting
            </router-link>
            
            <router-link 
              to="/manageProduct" 
              class="text-white hover:text-green-400 px-3 py-2 text-xs no-underline">
              Filter
            </router-link>
            
            <router-link 
              to="/register" 
              class="text-white hover:text-green-400 px-3 py-2 text-xs no-underline">
              Register
            </router-link>
            
            <router-link 
              to="/countdown" 
              class="text-white hover:text-green-400 px-3 py-2 text-xs no-underline">
              Countdown
            </router-link>
            
            <router-link 
              to="/converter" 
              class="text-white hover:text-green-400 px-3 py-2 text-xs no-underline">
              Converter
            </router-link>
            
            <router-link 
              to="/news" 
              class="text-white hover:text-green-400 px-3 py-2 text-xs no-underline">
              News
            </router-link>
          </div>
        </div>
      </div>
    </nav>

    <div class="p-4">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </div>
  </div>
</template>

<script setup>
// Import components to render them in router-link if needed
// import NewsDetail from './views/exercise7/NewsDetail.vue';
</script>

<style scoped>
.custom-scroll::-webkit-scrollbar {
  display: none;  
}

.custom-scroll {
  -ms-overflow-style: none; 
  scrollbar-width: none;  
}
</style>