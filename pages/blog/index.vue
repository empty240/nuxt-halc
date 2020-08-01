<template>
  <v-layout>
    <v-flex class="">
      <h1>Blog</h1>
      <ul>
      <li v-for="(post, index) in posts" :key="index">
        <nuxt-link :to="`/blog/${post.fields.slug}`">{{
          post.fields.title
        }}</nuxt-link>
      </li>
    </ul>
    {{posts}}
    </v-flex>
  </v-layout>
</template>
<script>
import { createClient } from '~/plugins/contentful.js'

const client = createClient()
export default {
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
