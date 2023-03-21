<!-- createErrorの場合 -->
<!--<script setup lang="ts">-->
<!--const counter = ref(0);-->

<!--const inc = () => {-->
<!--  throw createError({-->
<!--    statusCode: '400',-->
<!--    statusMessage: 'Bad Request',-->
<!--    message: 'エラー発生!!!!',-->
<!--    fatal: true,-->
<!--  });-->
<!--  counter.value++;-->
<!--};-->

<!--</script>-->

<!--<template>-->
<!--  <div>-->
<!--    <h1>ユーザリスト</h1>-->
<!--    <h2>Counter</h2>-->
<!--    <p>Count: {{ counter }}</p>-->
<!--    <div><button @click="inc">+</button></div>-->
<!--  </div>-->
<!--</template>-->

<!-- サーバーサイドでcreateErrorの場合 -->
<script setup lang="ts">
const { data: users } = await useFetch(
    'https://jsonplaceholder.typicode.com/user/'
);
console.log('process');
if (!users.value) {
  throw createError({ statusCode: 404, statusMessage: 'Page Not Found' });
}
</script>
<template>
  <div>
    <h1>ユーザリスト</h1>
    <ul>
      <li v-for="user in users" :key="user.id">{{ user.name }}</li>
    </ul>
  </div>
</template>
