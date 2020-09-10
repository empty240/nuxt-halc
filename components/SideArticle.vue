<template>
  <div class="card-wrap">
    <nuxt-link :to="`/${article.fields.slug}`" class="link">
      <v-hover>
        <template v-slot="{ hover }">
        <v-card
        :elevation="hover ? 24 : 6"
        class="card-link"
        >
          <v-img
            class="white--text thumbnail"
            :src="findImageSrc(article)"
          >
            <v-container fill-height fluid>
              <v-layout fill-height>
                <v-flex xs12 align-end flexbox>
                  <span class="headline"></span>
                </v-flex>
              </v-layout>
            </v-container>
          </v-img>
          <v-card-title>
            <div>
              <span>{{article.fields.title}}</span>
            </div>
          </v-card-title>
        </v-card>
        </template>
        </v-hover>
      </nuxt-link>
    </div>
</template>


<script>
export default {
  props: {
    article: {
      type: Object,
      required: false
    }
  },
  methods: {
    findImageSrc(article) {
      if (article.fields.sideThumbnail) {
        return article.fields.sideThumbnail.fields.file.url
      } else {
        return article.fields.thumbnail.fields.file.url
      }
    }
  }
}
</script>

<style scoped>
.card-wrap {
  margin: 20px 0;
}
.link {
  text-decoration: none !important;
}
.card-link {
  display: flex;
}
.card-link:hover {
  opacity: .9;
}
.thumbnail {
  width: 100px;
  height: 100px;
  max-width: 100px;
  max-height: 100px;
}
.v-card__title {
  font-size: 14px;
  line-height: 1.5;
  display: flex;
  padding: 4px 8px 4px 10px;
}
</style>
