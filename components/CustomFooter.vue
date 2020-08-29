<template>
  <v-footer :absolute="true" app class="footer">
      <span>&copy; {{ new Date().getFullYear() }}</span>
      <span class="ml-2">made with Nuxt.js and Contentful</span>
    </v-footer>
</template>

<style scoped>
.footer {
  display: block;
  text-align: center;
}
</style>
