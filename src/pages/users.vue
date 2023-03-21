<script setup la lang="ts">
// const counter = useState('counter');
const counter = useCounter();


</script>

<template>
  <div>
    <h1>Usersページ</h1>
    <p>Count:{{ counter }}</p>
    <NuxtPage />
  </div>
</template>


<style scoped>

</style>
