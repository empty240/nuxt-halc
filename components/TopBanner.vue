<template>
  <div class="top-banner mt-9">
    <nuxt-link :to="`/`">
      <div class="main">Fuzzy</div>
      <!-- <div class="sub">プログラミング学習Blog</div> -->
    </nuxt-link>
  </div>
</template>

<style scoped>
.top-banner {
  text-align: center;
  display: flex;
  justify-content: center;
}
.top-banner a {
  text-decoration: none !important;
  color: rgba(0, 0, 0, 0.87);
}
.main {
  font-size: 34px;
  font-family: serif;
}
.sub {
  font-size: 14px;
}
</style>
