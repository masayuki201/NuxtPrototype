<script setup lang="ts">
const { fetchArticles, articles } = useArticles();
fetchArticles();
</script>

<template>
  <div>
    <p>新着記事！！</p>
    <ul>
      <li v-for="article in articles" :key="article.id">
        <NuxtLink :to="{path: '/details', query: { id:article.id }}">
          {{article.title }}
        </NuxtLink>
      </li>
    </ul>
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
