<script setup lang="ts">
// const counter = useState('counter', () => 0);
const counter = useCounter();

</script>

<template>
  <div>
    <Head>
      <Title>Aboutページ</Title>
      <Meta name="description" content="Aboutページ" />
    </Head>
    <h1>About Page</h1>
    <h2>Counter</h2>
    <p>Count: {{ counter }}</p>
    <div><button @click="counter++">+</button></div>
    <div><button @click="counter--">-</button></div>

  </div>
</template>
