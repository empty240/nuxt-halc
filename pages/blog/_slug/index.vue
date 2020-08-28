<template>
  <v-layout>
    <v-flex class="">
      <v-row>
        <v-col
          sm="12"
          md="9"
          class="pa-7"
        >
      <img v-if="article.fields.thumbnail" :src="article.fields.thumbnail.fields.file.url" width="100%" />
      <v-row>
        <span class="grey--text">{{ $jaDate(article.fields.createdAt) }}</span>
      </v-row>
      <v-row>
        <span>{{article.fields.title}}</span>
      </v-row>
      <div v-html="$md.render(article.fields.content)"></div>
      <div style="margin-top: 50px">{{article}}</div>
        </v-col>
        <v-col
          sm="12"
          md="3"
          class="pa-7"
        >
          <blog-author />
          <div v-for="(post, index) in relateArticles" :key="index"
      >
          <nuxt-link :to="`/blog/${post.fields.slug}`" class="link">
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
              <span class="grey--text">Number 10</span><br>
              <span>{{post.fields.title}}</span>
            </div>
          </v-card-title>
        </v-card>
        </template>
        </v-hover>
      </nuxt-link>
          </div>
        </v-col>
      </v-row>
    </v-flex>
  </v-layout>
</template>
<script>
import { createClient } from '~/plugins/contentful.js'
import Prism from '~/plugins/prism'
import BlogAuthor from "~/components/BlogAuthor.vue";

const client = createClient()
export default {
  components: {
    BlogAuthor
  },
  layout: 'article',
  async asyncData({ params }) {
    // 記事詳細を取得
    const entries = await client.getEntries({
      // 'fields.slug': params.slug,
      content_type: process.env.CTF_CONTENT_TYPE_BLOG_ID,
    })
    const article = entries.items.find(item => item.fields.slug === params.slug)
    const relateArticles = entries.items.filter(item => item.fields.slug !== params.slug)
    return {
      article: article,
      relateArticles: relateArticles
    }
  },
  mounted() {
    Prism.highlightAll()
  },
}
</script>

<style>
.v-application h1,
.v-application p,
.v-application ul,
.v-application .gray-block{
    margin-bottom: 16px;
}
.v-application code {
  padding: 0;
  font-weight: 500;
}
h1 {
  font-size: 24px;
  border-left: 6px solid #1538b7;
  padding: 0 0 0 8px;
  margin-top: 40px;
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

pre[class*="language-"], pre {
  background-color: #25232b;
  margin-bottom: 20px;
}
pre {
  padding: 1em;
}
pre code {
  line-height: 1 !important;
}
.token.comment, .token.prolog, .token.doctype, .token.cdata {
    color: #808f9e;
}

img {
  width: 100%;
}

.v-application p code,
.v-application li code {
  font-family: Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace;
  font-size: 15px;
  font-weight: normal;
  color: #111;
  padding: 0.1em 0.4rem;
  margin: 0 2px;
  background-color: #efefef;
  line-height: 1.5;
}

.gray-block {
  padding: 8px; 
  background-color: #eee;
}
</style>