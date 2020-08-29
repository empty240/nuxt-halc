<template>
  <v-app dark>
    <v-container pa-7 style="max-width: 1185px;">
      <nuxt />
    </v-container>
    <v-footer :absolute="!fixed" app>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
</script>
