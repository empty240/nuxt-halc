<template>
  <v-layout>
    <v-flex class="">
      <v-row>
        <v-col
          sm="12"
          md="8"
          class="pa-7 main"
        >
          <img v-if="article.fields.thumbnail" :src="article.fields.thumbnail.fields.file.url" width="100%" />
          <div class="published-date">
            <span class="grey--text">
              {{ $jaDate(article.fields.createdAt) }}
              </span>
          </div>
          <div class="article-title mb-8">
            <span>{{article.fields.title}}</span>
          </div>
          <div v-html="$md.render(article.fields.content)" class="article-content mb-8"></div>
          <div class="series-header mb-1 pt-4">連載記事</div>
          <ul v-if="seriesArticles.length > 0" class="series">
            <li v-for="(seriesArticle, index) in seriesArticles" :key="index" class="pt-1">
              <nuxt-link v-if="seriesArticle.fields.title !== article.fields.title" :to="`/${seriesArticle.fields.slug}`" class="link">
              {{ seriesArticle.fields.title }}
              </nuxt-link>
              <span v-else>{{ seriesArticle.fields.title }}</span>
            </li>
          </ul>
          <!-- <div style="margin-top: 50px">{{article}}</div> -->
        </v-col>
        <v-col sm="12" md="4" class="pa-7">
          <blog-author />
          <related-articles
            :articles="relateArticles"
          />
        </v-col>
      </v-row>
    </v-flex>
  </v-layout>
</template>
<script>
import { createClient } from '~/plugins/contentful.js'
import Prism from '~/plugins/prism'
import BlogAuthor from "~/components/BlogAuthor.vue"
import RelatedArticles from "~/components/RelatedArticles.vue"


const client = createClient()
export default {
  components: {
    BlogAuthor,
    RelatedArticles
  },
  layout: 'article',
  async asyncData({ params }) {
    // 記事詳細を取得
    const entries = await client.getEntries({
      // 'fields.slug': params.slug,
      content_type: process.env.CTF_CONTENT_TYPE_BLOG_ID,
      order: '-sys.createdAt',
      'fields.published': true
    })
    const article = entries.items.find(item => item.fields.slug === params.slug)
    const relateArticles = entries.items.filter(item => item.fields.slug !== params.slug)
    const seriesArticles = entries.items.filter(item => item.fields.seriesTitle === article.fields.seriesTitle && item.fields.seriesTitle)
    
    return {
      article: article,
      relateArticles: relateArticles,
      seriesArticles: seriesArticles.reverse()
    }
  },
  mounted() {
    Prism.highlightAll()
  },
}
</script>

<style scoped>
.published-date {
  margin: 5px 0;
}
.article-title {
  font-size: 26px;
  font-weight: bold;
}
.series-header {
  font-size: 20px;
  border-top: solid 1px gray;
}
@media screen and (max-width:600px) {
.main { padding: 10px !important;}
}
</style>

<style>
.v-application p,
.v-application ul,
.v-application .gray-block{
    margin-bottom: 16px;
}
.v-application p {
  line-height: 1.8;
}
.v-application code {
  padding: 0;
  font-weight: 500;
}
.v-application h1 {
  margin-bottom: 24px;
}
h1 {
  font-size: 24px;
  border-left: 6px solid #1538b7;
  padding: 4px 0 0 8px;
  margin-top: 40px;
  background-color: #f5f5f5;
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
  /*font-family: Osaka;*/
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
.article-content img {
  width: auto;
  max-width: 100%;
}
</style>