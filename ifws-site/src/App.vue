<template>
  <div id="app">
    <NetworkAlert />
    <Particle />
    <div id="container">
      <Navbar />
      <RouterView />
      <Footer />
    </div>
  </div>
</template>

<script setup>
import Navbar from './components/Navbar.vue'
import Particle from './components/Particle.vue'
import NetworkAlert from './components/NetworkAlert.vue'
import Footer from './components/Footer.vue'
</script>

<style>
#container {
  max-width: 960px;
  margin: 0 auto;
  background-color: #fff;
  border: 1px solid #999;
  box-shadow: 0 0 8px #aaa;
  position: relative;
  z-index: 1;
}
</style>
