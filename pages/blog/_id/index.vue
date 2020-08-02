<template>
  <v-layout>
    <v-flex class="">
      <img :src="post.fields.thumbnail.fields.file.url" width="100%" />
      <div v-html="$md.render(post.fields.content)"></div>
      {{post}}
    </v-flex>
  </v-layout>
</template>
<script>
import { createClient } from '~/plugins/contentful.js'
import Prism from '~/plugins/prism'

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
  },
  mounted() {
    Prism.highlightAll();
  },
}
</script>

<style>
.v-application code {
  padding: 0;
  font-weight: 500;
}
h1 {
  font-size: 24px;
  border-left: 6px solid #1538b7;
  padding: 0 0 0 8px;
}
h2 {
  font-size: 20px;
  border-bottom: 1px solid #808390;
  padding: 0 0 4px 8px;
}
.code-row {
  margin: 30px 18px -16px;
}
.code-row .filename {
  color: white;
  background-color: #6f6f6f;
  padding: 2px 8px;
  position: absolute;
  margin-top: -1em;
  border-radius: 0 0 4px 4px;
  text-shadow: 1px 1px 2px #2b2a2a;
  box-shadow: 8px 10px 10px -4px rgba(0, 0, 0, 0.3);
  font-family: Osaka;
}

pre[class*="language-"] {
  background-color: #25232b;
}
</style>