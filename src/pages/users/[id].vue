<script setup lang="ts">
const router = useRoute();

console.log(router.params.id);
</script>

<template>
  <p>ユーザID: {{ $route.params.id }}</p>
</template>

<style scoped>

</style>
