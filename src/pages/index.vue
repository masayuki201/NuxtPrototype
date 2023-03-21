<script setup lang="ts">
// 旧実装
// const { fetchArticles, articles } = useArticles();
// fetchArticles();

// server api
const { data } = await useFetch('/api/hello');


// useFetch($fetch)利用
// const { data: articles, refresh } = await useFetch('/api/blogs');
// const route = useRoute();
// const enableCustomLayout = () => {
//   route.meta.layout = 'custom';
// };
//
// const show = ref(false);
//
// const handleClick = () => {
//   show.value = true;
// };
// const { count, inc, dec } = useCounter(100);
//
// const { $hello } = useNuxtApp();


</script>

<template>
  <div>
    <h1>Main Page</h1>
    <h2>{{ data }}</h2>
  </div>

<!--  <div>-->
<!--    <div>-->
<!--      <img src="~/assets/image002.jpg" alt="Sunset Icon" />-->
<!--    </div>-->
<!--    <p>新着記事！！</p>-->
<!--    <ul>-->
<!--      <li v-for="article in articles" :key="article.id">-->
<!--        <NuxtLink :to="{path: '/details', query: { id:article.id }}">-->
<!--        </NuxtLink>-->
<!--      </li>-->
<!--    </ul>-->
<!--    &lt;!&ndash; データ更新処理 &ndash;&gt;-->
<!--    <button @click="refresh">最新情報取得</button>-->
<!--    &lt;!&ndash; レイアウト変更 &ndash;&gt;-->
<!--    <div>-->
<!--      <button @click="enableCustomLayout">Update layout</button>-->
<!--    </div>-->

<!--    <div>-->
<!--      <button @click="handleClick">Coupon Get</button>-->
<!--      <LazyCoupon v-if="show" />-->
<!--    </div>-->

<!--    <div>Count:{{ count }}</div>-->
<!--    <div>-->
<!--      <button @click="() => inc()">+</button>-->
<!--      <button @click="() => dec()">-</button>-->
<!--    </div>-->

<!--    <div>-->
<!--      <h2>{{ $hello('World') }}</h2>-->
<!--    </div>-->


<!--    <Advertisement />-->
<!--  </div>-->
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
</style>
