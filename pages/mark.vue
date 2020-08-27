<template>
  <v-layout>
    <v-flex class="text-center">
      <div v-html="$md.render(ss)"></div>
      <div v-html="$md.render(markdown)"></div>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  data() {
    return {
      ss: 'aaaa`bb"`ccccc',
      markdown: `
# h1 Heading
## h2 Heading
### h3 Heading
#### h4 Heading

!が末尾に付く破壊的メソッド(\`save!\`など)では、レコードが無効な場合に例外が発生します。
非破壊的なメソッドは、\`v-for="(koma, index) in this.komaList"\`無効な場合に例外を発生しません。
\`save\`と\`update\`は無効な場合にfalseを返し、createは無効な場合に単にそのオブジェクトを返します。

## Emphasis

**This is bold text**

__This is bold text__

*This is italic text*

_This is italic text_

~~Strikethrough~~

## Blockquotes


> Blockquotes can also be nested...
>> ...by using additional greater-than signs right next to each other...
> > > ...or with spaces between arrows.

## Lists

Unordered

+ Create a list by starting a line with '+', '-', or '*'
+ Sub-lists are made by indenting 2 spaces:
  - Marker character change forces new list start:
    * Ac tristique libero volutpat at
    + Facilisis in pretium nisl aliquet
    - Nulla volutpat aliquam velit
+ Very easy!

Ordered

1. Lorem ipsum dolor sit amet
2. Consectetur adipiscing elit
3. Integer molestie lorem at massa


1. You can use sequential numbers...
1. ...or keep all the numbers as '1.'

Start numbering with offset:

57. foo
1. bar
      `
    };
  }
};
</script>
