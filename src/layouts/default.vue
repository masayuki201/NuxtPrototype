<script setup lang="ts">
definePageMeta({
  pageTransition: false
})
</script>

<template>
  <div>
    <header>Nuxt3Prototypeアプリケーション</header>
    <div class="container">
      <Navber />
      <slot/>
    </div>
    <footer>
      © 2023 masanika-tech
    </footer>
  </div>
</template>

<style scoped>
header {
  border-bottom-style: solid;
  padding: 1rem;
}

footer {
  margin-top: 2rem;
  background-color: #8080ee;
  padding: 1rem;
}

.container {
  margin: 2rem;
}

.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>

