<template>
    <div class="min-h-screen flex items-center justify-center relative">
      <div
        v-for="(image, index) in images"
        :key="index"
        class="bg-cover bg-center absolute inset-0 z-0"
        :style="{ backgroundImage: `url(${image})`, animation: `slide 10s ease-in-out infinite ${index * 1}s` }"
      ></div>
      <div class="absolute inset-0 z-10 bg-black opacity-50"></div>
      <div class="animate__animated animate__fadeIn text-center z-20">
        <h1 class="text-4xl md:text-6xl text-white font-semibold mb-6">
          Disponible très bientôt !
        </h1>
        <p class="text-xl text-white mb-6">
          Notre site est en cours de construction. Revenez plus tard !
        </p>
        <CountDown />
        <div class="my-32"></div>
        <!-- Place a big logo to bottom -->
        <div class="animate__animated animate__bounce">
        <img src="~/assets/images/Login/logo.svg" alt="Logo" class="h-34 mx-auto mb-6" />
      </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        images: [
          'https://firebasestorage.googleapis.com/v0/b/dev-helium-artworks.appspot.com/o/1.webp?alt=media&token=b1726ea2-eb6b-4865-97a8-40a8164ed660',
          'https://firebasestorage.googleapis.com/v0/b/dev-helium-artworks.appspot.com/o/2.webp?alt=media&token=0edea6a1-37fd-4443-9f06-b927a05cb106'
          
        ],
      };
    },
  };
  </script>
  
  <style scoped>
  
  @keyframes slide {
    0% {
      opacity: 0;
    }
    5% {
      opacity: 1;
    }
    25% {
      opacity: 1;
    }
    30% {
      opacity: 0;
    }
    100% {
      opacity: 0;
    }
  }
  </style>
  