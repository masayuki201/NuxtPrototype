<template>
  <div>
    <header>カスタムのヘッダー</header>
    <div class="container">
      <slot/>
    </div>
    <footer>
      © 2023 masanika-tech
    </footer>
  </div>
</template>

<style scoped>
header {
  border-bottom-style: solid;
  padding: 1rem;
}

footer {
  margin-top: 2rem;
  background-color: #f3cc35;
  padding: 1rem;
}

.container {
  margin: 2rem;
}
</style>
