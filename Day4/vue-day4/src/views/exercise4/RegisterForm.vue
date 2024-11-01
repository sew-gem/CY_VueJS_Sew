<template>
    <div class="mt-6 max-w-lg mx-auto py-10 px-20 bg-white rounded-lg shadow-md text-green-600">
        <h2 class="text-2xl font-bold text-center mb-4">Register Now</h2>
        <form @submit.prevent="handleSubmit" class="flex flex-col gap-4">
            <input 
                v-model="name"
                class="border border-green-600 py-2 px-4 rounded" 
                type="text" 
                placeholder="Name" 
                required
            >
            <p v-if="nameError" class="text-red-500">{{ nameError }}</p>
            <input 
                v-model="email"
                class="border border-green-600 py-2 px-4 rounded" 
                type="email" 
                placeholder="Email" 
                required
            >
            <p v-if="emailError" class="text-red-500">{{ emailError }}</p>
            <input 
                v-model="password"
                class="border border-green-600 py-2 px-4 rounded" 
                type="password" 
                placeholder="Password" 
                required
            >
            <p v-if="passwordError" class="text-red-500">{{ passwordError }}</p>
            <button type="submit" class="bg-green-600 text-white py-2 rounded hover:bg-green-700 transition">Register</button>
        </form>
    </div>
</template>

<script setup>
    import { ref, computed, watch } from 'vue';

    const name = ref('');
    const email = ref('');
    const password = ref('');

    const nameError = ref('');
    const emailError = ref('');
    const passwordError = ref('');

    watch(name, (newValue) => {
        nameError.value = newValue.length < 3 ? 'Name must be at least 3 characters long.' : '';
    });

    watch(email, (newValue) => {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        emailError.value = !emailPattern.test(newValue) ? 'Please enter a valid email.' : '';
    });

    watch(password, (newValue) => {
        passwordError.value = newValue.length < 6 ? 'Password must be at least 6 characters long.' : '';
    });

    const isFormValid = computed(() => {
        return !nameError.value && !emailError.value && !passwordError.value && name.value && email.value && password.value;
    });

    const handleSubmit = () => {
        if (isFormValid.value) {
            alert('Form submitted!');
            name.value = '';
            email.value = '';
            password.value = '';
        }
    };
</script>

<style lang="scss" scoped>

</style>