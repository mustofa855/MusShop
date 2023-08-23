<template>
    <div class="about-container">
      <div class="about-text">
        <h2>About</h2>
        <p>Selamat datang di MF Shop, destinasi online terbaik untuk segala kebutuhan belanja Anda. Di MF Shop, kami menghadirkan beragam pilihan produk berkualitas dengan harga terjangkau, mulai dari pakaian, aksesori, hingga produk rumah tangga. Kami berkomitmen untuk memberikan pengalaman belanja yang memuaskan dan memudahkan Anda menemukan apa yang Anda cari. Temukan kepuasan berbelanja dengan layanan pelanggan yang ramah dan proses pembayaran yang aman. Mari jelajahi katalog produk kami dan temukan kesempurnaan dalam setiap detail. Selamat berbelanja di MF Shop!</p>
        <p>Berdiri Sejak 2010 kami terus melayani customer-customer dengan pelayanan yang baik. Kami tidak pernah menggunakan barang atau produk kw, kami selalu menggunakan barang atau produk orsinil demi kenyaman dan keselamatan para customer kami. Kami akan berusaha semaksimal mungkin untuk menjadikan customer senang.</p>
      </div>
      <div class="about-image">
        <img src="../assets/img/homeBG2.jpg" alt="About Image">
      </div>
    </div>
  </template>
  
  <script setup>
  
  const { data } = useFetch('/api/currency/IDR')
  </script>
  
  <style scoped>
  .about-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 40px;
  }
  
  .about-text {
    flex: 1;
    padding-right: 20px;
  }
  
  .about-image {
    flex: 1;
    text-align: right;
  }
  
  h2 {
    margin-bottom: 20px;
    font-size: 36px;
  }
  
  p {
    margin: 20px 0;
    padding-right: 20px;
  }
  
  img {
    max-width: 100%;
  }
  </style>
  