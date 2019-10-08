<template lang="pug">
div.comments-list
  p.orange.header Отзывы магазина
  button.btn.btn-light.bordered-item(@click="newComment") Написать отзыв
  div.list
    comment-prev( v-for="(comment, index) in comments" :key="index"  :comment="comment")
</template>

<script>
import CommentPrev from '@/components/CommentPrev'

export default {
  components: {
    CommentPrev
  },
  methods: {
    newComment () {
      this.$router.push(`/newcomment`)
    }
  },
  computed: {
    comments () {
      return this.$store.state.comments
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
