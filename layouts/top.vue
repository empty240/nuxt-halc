<template>
  <v-app dark>
    <v-container>
      <nuxt />
    </v-container>
    <v-footer :absolute="!fixed" app>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: "mdi-apps",
          title: "Welcome",
          to: "/"
        },
        {
          icon: "mdi-chart-bubble",
          title: "Inspire",
          to: "/inspire"
        },
        {
          icon: "mdi-chart-bubble",
          title: "Mark",
          to: "/mark"
        },
        {
          icon: "mdi-chart-bubble",
          title: "Prism",
          to: "/prism"
        },
        {
          icon: "mdi-chart-bubble",
          title: "Blog",
          to: "/blog"
        }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: "Vuetify.js"
    };
  }
};
</script>
