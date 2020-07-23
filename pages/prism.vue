<template>
<div>
  <v-layout>
    <v-flex class="text-center">
      <pre data-file="wewew.js"><code class="language-css" data-file="aaa.js">
p { color: red }
p { color: blue }
p { color: green }</code>
</pre>

<pre><code class="language-css">p { color: blue }
p { color: blue }
p { color: green }</code>
</pre>
    </v-flex>
  </v-layout>
<pre><code class="language-css">p { color: blue }
p { color: blue }
p { color: green }</code>
</pre>
</div>
</template>

<script>
export default {
  data() {
    return {
      html: ""
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
  background-color: #999;
  padding: 2px 8px 3px;
  position: absolute;
  margin-top: -1em;
  border-radius: 0 0 4px 4px;
}

.v-application code {
  padding: 0;
}
</style>
