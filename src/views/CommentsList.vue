<template lang="pug">
div.comments-list
  p.orange.header Отзывы магазина
  button.btn.btn-light.bordered-item Написать отзыв
  div.list
    comment-prev( v-bind:comment="comment")
    comment-prev( v-bind:comment="comment")
    comment-prev( v-bind:comment="comment")
    comment-prev( v-bind:comment="comment")
    comment-prev( v-bind:comment="comment")
    comment-prev( v-bind:comment="comment")
    comment-prev( v-bind:comment="comment")
    comment-prev( v-bind:comment="comment")
    comment-prev( v-bind:comment="comment")
    comment-prev( v-bind:comment="comment")
</template>

<script>
import CommentPrev from '@/components/CommentPrev'

export default {
  components: {
    CommentPrev
  },
  data () {
    return {
      comment: {
        rating: 4
      }
    }
  }
}
</script>

<style lang="scss">
.comments-list {
  position: relative;

  .list {
    height: 65vh;
    overflow-y: scroll;
  }
}
</style>
