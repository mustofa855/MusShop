<template>
  <div>
    <header class="shadow-sm bg-white  w-full">
      <nav class="container mx-auto p-4 flex justify-between">
        <NuxtLink to="/" class="font-bold mx-14">
          <img src="../assets/img/MF Shop.png" style="width: 40px;" alt="">
        </NuxtLink>
        <ul class="flex gap-4 mx-10">
          <li><NuxtLink to="/">Home</NuxtLink></li>
          <li><NuxtLink to="/about">About</NuxtLink></li>
          <li><NuxtLink to="/contact">Contact</NuxtLink></li>
          <li><NuxtLink to="/products">Products</NuxtLink></li>
        </ul>
      </nav>
    </header>

    <!-- Output the page content -->
    <div class="container mx-auto p-4">
      <slot />
    </div>

    <footer class="container mx-auto p-4 flex justify-center items-center border-t-2  bottom-0 bg-white w-full">
      <div class="col-md-12">
        <div class="inner-content text-center">
          <p>
            Copyright &copy; - 2023 MF SHOP Co., Ltd.
            <a rel="nofollow noopener" target="_blank"></a>
          </p>
        </div>
      </div>
    </footer>
  </div>
</template>

<style scoped> 
.router-link-exact-active {
    color: #0891b2;
}
</style>
