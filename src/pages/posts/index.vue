<script setup lang="ts">
//usefetchの場合
// const {
//   data: posts, error, refresh
// } = await useFetch(
//     'https://jsonplaceholder.typicode.com/posts/'
// );

//useLazyAsyncDataの場合
const {
  data: posts,
  error,
  pending,
  refresh,
} = await useLazyAsyncData('posts', () =>
    $fetch('https://jsonplaceholder.typicode.com/posts/')
);
console.log(posts);
console.log(useNuxtApp().payload.data);


</script>

<template>
  <div>
    <h1>Posts一覧</h1>
    <button @click="refresh()">再取得</button>
    <p v-if="error">{{ error }}</p>
    <p v-if="pending">Loading...</p>
    <ul>
      <li v-for="post in posts" :key="post.id">
        <NuxtLink :to="`/posts/${post.id}`">
          {{ post.title }}
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>
