<template>
  <v-app dark>
    <top-banner />
    <v-container style="max-width: 1150px;">
      <nuxt />
    </v-container>
    <custom-footer />
  </v-app>
</template>

<script>
import TopBanner from "~/components/TopBanner"
import CustomFooter from "~/components/CustomFooter"

export default {
  components: {
    TopBanner,
    CustomFooter
  }
}
</script>
