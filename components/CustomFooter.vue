<template>
  <v-footer :absolute="true" app class="footer">
      <span>&copy; {{ new Date().getFullYear() }}</span>
      <span class="ml-2">made with <a href="https://ja.nuxtjs.org/" target="_blank">Nuxt.js</a> and <a href="https://www.contentful.com/" target="_blank">Contentful</a></span>
    </v-footer>
</template>

<style scoped>
.footer {
  display: block;
  text-align: center;
}
a {
  color: rgba(0, 0, 0, 0.87);
}
</style>
