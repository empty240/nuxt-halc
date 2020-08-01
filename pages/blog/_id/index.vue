<template>
  <v-layout>
    <v-flex class="">
      <img :src="post.fields.thumbnail.fields.file.url" width="100%" />
      {{post}}
    </v-flex>
  </v-layout>
</template>
<script>
import { createClient } from '~/plugins/contentful.js'

const client = createClient()
export default {
  async asyncData({ params }) {
    // 記事詳細を取得
    const entries = await client.getEntries({
      content_type: process.env.CTF_CONTENT_TYPE_BLOG_ID,
      'fields.slug': params.slug
    })
    return {
      post: entries.items[0]
    }
  }
}
</script>
