<script setup lang="ts">
// 旧実装
// const { fetchArticles, articles } = useArticles();
// fetchArticles();

// useFetch($fetch)利用
const { data: articles, refresh } = await useFetch('/api/blogs');

const route = useRoute();
const enableCustomLayout = () => {
  route.meta.layout = 'custom';
};

const show = ref(false);

const handleClick = () => {
  show.value = true;
};
</script>

<template>
  <div>
    <p>新着記事！！</p>
    <ul>
      <li v-for="article in articles" :key="article.id">
        <NuxtLink :to="{path: '/details', query: { id:article.id }}">
        </NuxtLink>
      </li>
    </ul>
    <!-- データ更新処理 -->
    <button @click="refresh">最新情報取得</button>
    <!-- レイアウト変更 -->
    <div>
      <button @click="enableCustomLayout">Update layout</button>
    </div>

    <div>
      <button @click="handleClick">Coupon Get</button>
      <LazyCoupon v-if="show" />
    </div>

    <Advertisement />
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
</style>
