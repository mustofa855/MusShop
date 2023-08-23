<template>
    <div class="carousel">
      <transition-group name="carousel-fade" tag="div">
        <div
          v-for="(item, index) in carouselItems"
          :key="index"
          v-show="currentIndex === index"
          class="carousel-item"
        >
          <img :src="item.image" :alt="item.alt" class="w-full h-auto">
        </div>
      </transition-group>
  
      <div class="carousel-navigation">
        <button @click="prevSlide" class="carousel-prev">Prev</button>
        <button @click="nextSlide" class="carousel-next">Next</button>
      </div>
    </div>
  </template>
  
  <script setup>
  const carouselItems = [
    // {
    //   image: require('../assets/img/carousel-1.jpg'),
    //   alt: 'Carousel 1',
    // },
    // {
    //   image: require('../assets/img/carousel-2.jpg'),
    //   alt: 'Carousel 2',
    // },
    {
      image: require('../assets/img/carousel-3.jpg'),
      alt: 'Carousel 3',
    }
  ];
  
  let currentIndex = 0;
  
  const prevSlide = () => {
    currentIndex = (currentIndex - 1 + carouselItems.length) % carouselItems.length;
  };
  
  const nextSlide = () => {
    currentIndex = (currentIndex + 1) % carouselItems.length;
  };
  </script>
  
  <style scoped>
  .carousel {
    position: relative;
    overflow: hidden;
    max-width: 100%;
  }
  
  .carousel-fade-enter-active,
  .carousel-fade-leave-active {
    transition: opacity 0.5s;
  }
  
  .carousel-fade-enter,
  .carousel-fade-leave-to {
    opacity: 0;
  }
  
  .carousel-item {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: auto;
    display: none;
  }
  
  .carousel-navigation {
    display: flex;
    justify-content: center;
    margin-top: 1rem;
  }
  
  .carousel-prev,
  .carousel-next {
    cursor: pointer;
    padding: 0.5rem 1rem;
    background-color: #12b488;
    border: none;
    border-radius: 9999px;
    color: white;
    margin: 0 0.5rem;
    transition: background-color 0.3s ease-in-out;
  }
  
  .carousel-prev:hover,
  .carousel-next:hover {
    background-color: #0e995d;
  }
  </style>
  