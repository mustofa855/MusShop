<template>
  <div class="app-container">
    <header class="shadow-sm bg-white  w-full">
      <nav class="container mx-auto p-4 flex justify-between nav-bar">
        <NuxtLink to="/" class="font-bold mx-4 sm:mx-14">
          <img src="../assets/img/MF Shop.png" class="w-full max-w-xs img-container" alt="">
        </NuxtLink>
        <div class="flex items-center">
          <button @click="showNavbar = !showNavbar" class="block sm:hidden text-gray-500 hover:text-gray-600 focus:outline-none">
            <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
          <ul :class="['hidden', 'sm:flex', 'gap-4', 'mx-4', 'sm:mx-10', {'hidden': !showNavbar}]" class="block sm:flex gap-4 mx-4 sm:mx-10">
            <li><NuxtLink to="/">Home</NuxtLink></li>
            <li><NuxtLink to="/about">About</NuxtLink></li>
            <li><NuxtLink to="/contact">Contact</NuxtLink></li>
            <li><NuxtLink to="/products" class="btn bg-sky-600 hover:bg-sky-700">Products</NuxtLink></li>
          </ul>
        </div>
      </nav>
    </header>

    <main class="container mx-auto main-content">
      <!-- output the page content -->
      <slot />
    </main>

    <footer class="container mx-auto p-4 flex justify-center items-center border-t-2 fixed bottom-0 bg-white w-full">
      <div class="inner-content text-center">
        <p>
          Copyright &copy; - 2023 MF SHOP Co., Ltd.
        </p>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showNavbar: false
    };
  }
};
</script>

<style scoped>
/* Gayamu yang lain */

/* Tambahan untuk gambar */
.img-container {
  width: 40px;
}

@media screen and (max-width: 768px) {
  .img-container {
    width: 30px;
  }
}
</style>
