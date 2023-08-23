<template>
  <div class="home-container" :class="{ 'parallax': isParallaxActive }">
    <div class="home-content">
      <div class="content-text py-20">
        <p>Selamat datang di MF Shop, tempat di mana kepuasan berbelanja Anda adalah prioritas kami. Temukan produk berkualitas dengan harga terjangkau dalam koleksi kami yang luas. Kami hadir untuk memenuhi kebutuhan Anda dan memberikan pengalaman belanja yang tak terlupakan. Jelajahi berbagai pilihan produk terbaik kami dan mari kita mulai petualangan belanja bersama!</p>
      </div>
      <div class="get-started-btn">
        <NuxtLink to="/products">
          <button class="bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded pb-3" style="font-size: 18px;">
            Start Shop <i class="material-icons pt-1">shopping_cart</i>
          </button>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>


<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const isParallaxActive = ref(false);

// Aktifkan efek paralaks saat pengguna menggulir
onMounted(() => {
  const handleScroll = () => {
    isParallaxActive.value = window.scrollY > 50;
  };
  window.addEventListener('scroll', handleScroll);
  onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll);
  });
});
</script>

<style scoped>
.home-container {
  position: relative;
  background-image: url('../assets/img/homeBG1.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 100vh;
  /* display: flex; */
  justify-content: center;
  align-items: center;
  transition: transform 0.2s ease-out;
}

.home-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  max-width: 1200px; /* Untuk mengatur lebar konten */
  margin: 0 auto; /* Untuk membuat konten berada di tengah */
}

.content-text {
  flex: 1; /*Agar teks mengambil sisa lebar dari space-between */
}

.home-content h2 {
  font-size: 36px;
  margin-bottom: 20px;
  background-color: transparent;
  text-align: left;
}

.home-content p {
  margin: 0;
}

.get-started-btn button {
  background-color: #3f83f8;
  border: none;
  padding: 10px 20px;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.get-started-btn button:hover {
  background-color: #2a67c0;
}

p {
  padding: 80px 80px;
}
</style>
