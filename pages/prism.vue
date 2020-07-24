<template>
  <v-layout>
    <v-flex>
      <pre data-file="wewew.js"><code class="language-css" data-file="aaa.js">
p { color: red }
p { color: blue }
p { color: green }</code>
</pre>
      <div class="md" v-html="$md.render(abc)"></div>
      <pre><code class="language-css">p { color: blue }
p { color: blue }
p { color: green }</code>
</pre>
      <pre class="line-numbers"><code class="language-css">p { color: blue }
p { color: bluedwdwdwdwdwdwdbluedwdwdwdwdwdwdbluedwdwdwdwdwdwdbluedwdwd }
p { color: green }</code>
</pre>
      <div class="md" v-html="$md.render(abc)"></div>
      <pre
        data-file="extream.vue"
      ><code class="language-markup" v-text="html"></code>
</pre>
      <div class="md" v-html="$md.render(abc)"></div>
      <pre
        data-file="src/page/fine.vue"
      ><code class="language-js" v-text="ss"></code>
</pre>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  data() {
    return {
      abc: `
!が末尾に付く破壊的メソッド(\`save!\`など)では、レコードが無効な場合に例外が発生します。
非破壊的なメソッドは、\`v-for="(koma, index) in this.komaList"\`無効な場合に例外を発生しません。
\`save\`と\`this.$router.push('/500')\`は無効な場合にfalseを返し、createは無効な場合に単にそのオブジェクトを返します。
      `,
      html: `
<template>
  <v-layout>
    {{ data }}
    <tr class="kkk">
      <com-koma
        v-for="(koma, index) in this.komaList"
        :key="index"
        :komaIndex="index"
        :koma="koma"
      ></com-koma>
      <td class="com-select">
        {{
          comSelectingKoma ? this.komaList[comSelectingKoma].label : ""
        }}
      </td>
    </tr>
  </v-layout>
</template>`,
      ss: `
export default {
  data() {
    return {
      html: 'aaaa'
    };
  },
  watch: {
    errorCode: {
      handler (val) {
        if (val === INTERNAL_SERVER_ERROR) {
          this.$router.push('/500')
        }
      },
      immediate: true
    },
    $route () {
      this.$store.commit('error/setCode', null)
    }
  }
};`
    };
  },
  mounted() {
    Prism.highlightAll();
  }
};
</script>

<style>
pre[data-file]::before {
  content: attr(data-file);
  background-color: #6f6f6f;
  padding: 2px 8px;
  position: absolute;
  margin-top: -1em;
  border-radius: 0 0 4px 4px;
  text-shadow: 1px 1px 2px #2b2a2a;
  box-shadow: 8px 10px 10px -4px rgba(0, 0, 0, 0.3);
}

.v-application p {
  margin: 24px 0;
}

.v-application code {
  padding: 0;
  font-weight: 500;
}

.language-markup .tag,
.language-markup .punctuation {
  color: #d68065;
}
.language-markup .attr-value .punctuation {
  color: #fff;
}
.md {
  text-align: left;
}
pre {
  background-color: #1d1933 !important;
  font-family: monospace !important;
}

.md code {
  font-family: Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace;
  font-size: 15px;
  font-weight: normal;
  color: #111;
  padding: 0 0.3rem;
  margin: 0 2px;
  background-color: #eee;
  line-height: 1.5;
}
</style>
