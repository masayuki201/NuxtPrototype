<script setup la lang="ts">
// const counter = useState('counter');
const counter = useCounter();

const resetError = (error) => {
  error.value = null;
};

const someErrorLogger = (error) => {
  //取得したエラーで別の処理を行う
  console.log('someErrorLogger', error);
};
</script>

<template>
  <div>
<!--    <h1>Usersページ</h1>-->
<!--    <NuxtErrorBoundary @error="someErrorLogger">-->
<!--      <NuxtPage />-->
<!--      <template #error="{ error }">-->
<!--        <p>{{ error }}</p>-->
<!--        <button @click="resetError(error)">Clear Error</button>-->
<!--      </template>-->
<!--    </NuxtErrorBoundary>-->
    <h1>Usersページ</h1>
      <NuxtPage />

  </div>
</template>


<style scoped>

</style>
