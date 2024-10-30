<template>
  <!-- Header -->
  <header class="flex items-center justify-between p-4 bg-green-800 text-white rounded-lg mb-4 shadow-md">
    <h1 class="text-2xl font-bold">ShoeShop</h1>
    <nav>
      <ul class="flex space-x-4">
        <li><a href="#" class="hover:text-green-400 mt-1">Trang chủ</a></li>
        <li>
          <a href="#" class="hover:text-green-400 flex" @click.prevent="toggleCart"> 
            Giỏ hàng <img src="@/views/products_img/cart.svg" alt="cart" class="w-5 h-5 ml-2"/>
          </a>
        </li>
      </ul>
    </nav>
  </header>
  <!-- container  -->
  <div class="container mx-auto p-4">

    <!-- Cart Popup -->
    <div class="text-green-700 w-full h-auto">
      <div v-if="isCartVisible" class="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
        <div class="relative bg-white rounded-lg p-4 w-2/3 max-h-[80vh] overflow-y-auto">
          <h2 class="text-xl font-bold mb-2">Giỏ hàng</h2>
          <div class="ml-3 flex h-auto items-center ">
            <!-- btn close cart  -->
            <button 
              type="button" 
              class="absolute top-2 right-4 p-2 text-gray-400 hover:text-gray-500"
              @click="toggleCart"
            > X </button>
          </div>
          <!-- list product  -->
          <ul class="mt-4 ">
            <li v-for="item in cart" :key="item.id" class="flex items-center mb-4 border border-green-600 p-2 rounded-lg">
              <img :src="item.image" alt="product image" class="h-24 w-24 object-cover rounded-md border border-gray-200">
              <div class="ml-4 flex-1">
                <span class="my-2 block font-medium text-gray-900">{{ item.name }}</span>
                <p class="my-2  text-sm text-gray-500">Màu: 
                  <span class=" text-sm text-gray-500 block w-3 h-3 rounded border border-gray-400" :style="{ backgroundColor: item.color }"></span> 
                </p>
                <span class="my-2 text-sm text-gray-500">Kích thước: {{ item.size }}</span>
                <p class="mt-2 text-sm text-gray-500">số lượng: {{ item.quantity }}</p>
              </div>
              <span class="font-bold">{{ formatCurrency(item.price) }}</span>
            </li>
          </ul>
          <hr class="my-4">
          <span>Tổng cộng: {{ cart.total }}</span>
          <button class="mt-4 p-2 w-full bg-green-600 text-white rounded">Check out</button>
        </div>
      </div>
    </div>


    <h1 class="text-2xl font-bold mb-4 mt-12">Danh sách sản phẩm</h1>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      <!-- products  -->
      <div v-for="product in products" :key="product.id" class="border border-gray-300 rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow duration-300">
        <img 
          :src="product.image" 
          alt="Product Image" 
          class="w-full h-fit object-cover rounded-lg mb-4 cursor-pointer" 
        />
        <h2 class="text-xl font-semibold">{{ product.name }}</h2>
        <p class="text-white-600">Giá: {{ formatCurrency(product.price) }}</p>
        <p class="text-gray-500">Ngày phát hành: {{ product.releaseDate }}</p>
        <p class="text-green-500 shadow-green-custom">{{ product.isBestseller ? 'Bán chạy' : 'Không bán chạy' }}</p>
        <div class="mt-2">
          <span class="font-semibold">Nhãn hiệu:</span> {{ product.brand }}
        </div>

        <!-- size  -->
        <div class="mt-2">
          <span class="font-semibold">Kích thước:</span>
          <ul class="flex gap-3">
            <button
              v-for="size in product.sizes" 
              :key="size"
              :class="['border', product.selectedSize === size ? 'border-white' : 'border-transparent']"
              @click="selectSize(product, size)"
              class="p-1"
            >
              {{ size }}
            </button>
          </ul>
        </div>

        <!-- color  -->
        <div class="mt-2">
          <span class="font-semibold">Màu sắc:</span>
          <ul class="flex gap-2">
            <li v-for="color in product.colors" :key="color" class="flex items-center mt-1 p-1">
              <button
                class="block w-5 h-5 rounded"
                :style="{ backgroundColor: color }"
                @click="selectColor(product, color)"
                @mouseover="mountOver(product.id, color)" 
                @mouseleave="mountLeave(product.id)" 
                :class="selectedColor === color ? 'border border-white' : ''"
                title="Màu: {{ color }}"
              ></button>
            </li>
          </ul>
        </div>
        
        <p class="text-white-600">số lượng: {{ product.quantity}}</p>

        <!-- add to cart  -->
        <div class="flex items-center gap-2 mt-4">
          <button 
            :class="[
              'w-full flex items-center justify-center text-white rounded-lg px-4 py-2 transition-colors duration-300', 
              product.quantity > 0 ? 
              'bg-green-600 hover:bg-[#13BB00] hover:scale-105' : 
              'bg-gray-600 cursor-not-allowed'
            ]"
            @click="addToCart(product)"
          >
            Mua hàng
            <img src="@/views/products_img/cart.svg" alt="cart" class="w-5 h-5 ml-2" />
          </button>
        </div>

      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const products = ref([
  {
    id: 1,
    name: 'Nike',
    price: 200000,
    releaseDate: '2024-02-01',
    isBestseller: true,
    brand: 'Nike',
    image: 'src/views/products_img/product1.jpg',
    colors: ['#FFFFFF', '#000000', '#FF0000', '#008000', '#FFFF0'],
    material: 'Synthetic',
    sizes: ['38', '39', '40', '41', '42', '43'],
    quantity: 5,
  },
  {
    id: 2,
    name: 'Nike',
    price: 200000,
    releaseDate: '2024-02-01',
    isBestseller: false,
    brand: 'Nike',
    image: 'src/views/products_img/product1.jpg',
    colors: ['#FFFFFF', '#000000', '#FF0000', '#008000', '#FFFF0'],
    material: 'Synthetic',
    sizes: ['38', '39', '40', '41', '42', '43'],
    quantity: 3,
  },
  {
    id: 3,
    name: 'Nike',
    price: 200000,
    releaseDate: '2024-02-01',
    isBestseller: true,
    brand: 'Nike',
    image: 'src/views/products_img/product1.jpg',
    colors: ['#FFFFFF', '#000000', '#FF0000', '#008000', '#FFFF0'],
    material: 'Synthetic',
    sizes: ['38', '39', '40', '41', '42', '43'],
    quantity: 1
  },
  {
    id: 4,
    name: 'Nike',
    price: 200000,
    releaseDate: '2024-02-01',
    isBestseller: false,
    brand: 'Nike',
    image: 'src/views/products_img/product1.jpg',
    colors: ['#FFFFFF', '#000000', '#FF0000', '#008000', '#FFFF0'],
    material: 'Synthetic',
    sizes: ['38', '39', '40', '41', '42', '43'],
    quantity: 0
  },
]);

const formatCurrency = (value) => {
  return `$${value.toLocaleString()}`;
};

const mountOver = (productId, color) => {
  const colorImageMap = {
    '#FFFFFF': 'src/views/products_img/product_white.jpg',
    '#000000': 'src/views/products_img/product_black.jpg',
    '#FF0000': 'src/views/products_img/product_red.jpg',
    '#008000': 'src/views/products_img/product_green.jpg',
  };
  
  const product = products.value.find(p => p.id === productId);
  const newImage = colorImageMap[color] || product.image; 
  if (product) {
    product.image = newImage; 
  }
};
const mountLeave = (productId) => {
  const product = products.value.find(p => p.id === productId);
  if (!product.colorSelected) {
    product.image = 'src/views/products_img/product1.jpg'; 
  }
};

const selectSize = (product, size) => {
  product.selectedSize = product.selectedSize === size ? null : size; 
};

const selectedColor = ref(null);
const selectColor = (product, color) => {
  product.selectedColor = color;
  console.log(`Color selected for product ${product.id}: ${color} & the rest quantity: ${product.quantity}`);
  const colorImageMap = {
    '#FFFFFF': 'src/views/products_img/product_white.jpg',
    '#000000': 'src/views/products_img/product_black.jpg',
    '#FF0000': 'src/views/products_img/product_red.jpg',
    '#008000': 'src/views/products_img/product_green.jpg',
    '#FFFF00': 'src/views/products_img/product_yellow.jpg',
  };
  product.image = colorImageMap[color] || product.image; 
  selectedColor.value = color; 
  product.colorSelected = true;
};

const cart = ref([]);
const addToCart = (product) => {
  if (product.selectedColor && product.selectedSize && product.quantity > 0) {
    cart.value.push({
      id: product.id,
      image: product.image,
      name: product.name,
      price: product.price,
      color: product.selectedColor,
      size: product.selectedSize,
      quantity: product.quantity,
    });
    product.quantity--; 
    console.log(`add to cart: ${JSON.stringify(cart.value)}`);
  }
};

const isCartVisible = ref(false);
const toggleCart = () => {
  isCartVisible.value = !isCartVisible.value;
};
</script>

<style scoped>
.shadow-green-custom {
  text-shadow: 4px 4px 8px rgba(19, 187, 0, 0.7); 
}
</style>