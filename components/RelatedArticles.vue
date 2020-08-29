<template>
<div>
  <div v-if="articles.length > 0" class="side-title">関連記事</div>
  <div v-for="(post, index) in articles" :key="index"
      class="card-wrap">
          <nuxt-link :to="`/${post.fields.slug}`" class="link">
      <v-hover>
        <template v-slot="{ hover }">
        <v-card
        :elevation="hover ? 24 : 6"
        class="card-link"
        >
          <v-img
            class="white--text"
            height="120px"
            :src="post.fields.thumbnail.fields.file.url"
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
              <span>{{post.fields.title}}</span>
            </div>
          </v-card-title>
        </v-card>
        </template>
        </v-hover>
      </nuxt-link>
    </div>
</div>
</template>


<script>
export default {
  props: {
    articles: {
      type: Array,
      required: false
    }
  }
}
</script>

<style scoped>
.side-title {
    font-size: 18px;
    border-left: 6px solid #1538b7;
    padding: 2px 0 2px 8px;
    margin-top: 20px;
    background-color: #f5f5f5;
}
.card-wrap {
  margin: 20px 0;
}
.link {
  text-decoration: none !important;
}
.card-link:hover {
  opacity: .9;
}
.v-card__title {
  font-size: 14px;
  line-height: 1.5;
}
</style>
