<template>
  <v-layout>
    <v-flex class="article-list">
      <v-row>
      <v-col v-for="(post, index) in posts" :key="index"
        sm="6"
        md="4"
      >
      <nuxt-link :to="`/${post.fields.slug}`" class="link">
      <v-hover>
        <template v-slot="{ hover }">
        <v-card
        :elevation="hover ? 24 : 6"
        class="card-link"
        >
          <v-img
            class="white--text"
            height="200px"
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
              <span class="grey--text">{{ $jaDate(post.fields.createdAt) }}</span><br>
              <span>{{post.fields.title}}</span>
            </div>
          </v-card-title>
        </v-card>
        </template>
        </v-hover>
      </nuxt-link>
      </v-col>
      </v-row>
      <!-- <div>{{ posts }}</div> -->
    </v-flex>
  </v-layout>
</template>

<script>
import { createClient } from '~/plugins/contentful.js'

const client = createClient()
export default {
  layout: 'list',
  async asyncData({ params }) {
    // 記事一覧を取得
    const entries = await client.getEntries({
      content_type: process.env.CTF_CONTENT_TYPE_BLOG_ID,
      order: '-sys.createdAt'
    })
    return {
      posts: entries.items
    }
  }
}
</script>

<style scoped>
.article-list {
  margin-bottom: 50px;
}
.blog-title {
  text-align: center;
}
.v-card__title {
  font-size: 1.15rem;
}
.link {
  text-decoration: none !important;
}
.card-link:hover {
  opacity: .9;
}
</style>