<script setup lang="ts">
const error = useError();
</script>

<template>
  <NuxtLayout>
    <p>{{ error }}</p>
    <button @click="clearError">Clear Error</button>
  </NuxtLayout>
</template>
