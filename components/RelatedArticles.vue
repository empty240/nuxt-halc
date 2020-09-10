<template>
<div>
  <div v-if="articles.length > 0" class="side-title">関連記事</div>
  <side-article v-for="(article, index) in articles" :key="index"
      :article="article"
      class="card-wrap">
  </side-article>
</div>
</template>


<script>
import SideArticle from "~/components/SideArticle"
export default {
  components: {
    SideArticle
  },
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
</style>
