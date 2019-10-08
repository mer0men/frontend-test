<template lang="pug">
  div.comment-view
    svg.back-btn(width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg" @click="back")
      path(fill-rule="evenodd" clip-rule="evenodd" d="M4.41421 10L10.7071 16.2929L9.29289 17.7071L0.585785 9L9.29289 0.292892L10.7071 1.70711L4.41421 8H19V10H4.41421Z" fill="black")
    p.header Оценить
    div.stars
      svg.star(width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" v-for="n in 5" @click="setRating(n)")
        path(:class="{'fill-star': n <= comment.rating}" d="M15.0767 1.21993C15.4183 0.398634 16.5817 0.398636 16.9233 1.21993L20.5265 9.883C20.6705 10.2292 20.9961 10.4658 21.3699 10.4958L30.7224 11.2456C31.6091 11.3166 31.9686 12.4232 31.2931 13.0018L24.1674 19.1057C23.8826 19.3496 23.7583 19.7324 23.8453 20.0972L26.0223 29.2236C26.2287 30.0889 25.2874 30.7727 24.5283 30.3091L16.5213 25.4184C16.2012 25.2229 15.7988 25.2229 15.4787 25.4184L7.47169 30.3091C6.71259 30.7727 5.77134 30.0889 5.97773 29.2236L8.15472 20.0972C8.24173 19.7324 8.11736 19.3496 7.83257 19.1057L0.706938 13.0018C0.0314007 12.4232 0.390928 11.3166 1.27758 11.2456L10.6301 10.4958C11.0039 10.4658 11.3295 10.2292 11.4735 9.883L15.0767 1.21993Z" fill="#C4C4C4")
    input.bordered-item.placeholder(placeholder="Укажите ваш никнейм" v-model.trim="comment.nickname" :class="{'input-error' : checked && !comment.nickname}" )
    div.comment
      textarea.bordered-item.placeholder(placeholder="Расскажите, что можно улучшить?" v-model.trim="comment.comment" :class="{'input-error' : checked && (comment.comment.length < 20)}")
      p.orange.info Минимум 20 символов
    button.btn.btn-light.bordered-item(:disabled="busy" @click="newComment") Отправить
</template>

<script>
export default {
  data () {
    return {
      comment: {
        rating: 0,
        nickname: '',
        comment: '',
        date: undefined
      },
      checked: false,
      busy: false
    }
  },
  methods: {
    back () {
      this.$router.go(-1)
    },
    setRating (rating) {
      this.comment.rating = rating
    },
    newComment () {
      this.comment.date = new Date()
      this.busy = true
      this.checked = true

      console.log(this.comment)
      if (this.comment.nickname && this.comment.comment.length > 19) {
        this.$store.dispatch('ADD_COMMENT', this.comment)
          .then(() => this.back())
          .catch(() => {
            this.busy = false
          })
      } else {
        this.busy = false
      }
    }
  }
}
</script>

<style lang="scss">
.comment-view {
  position: relative;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;

  .back-btn{
    position: absolute;
    left: 0;
    top: 0;
  }

  .header {
    margin: 8px 0;
    text-align: center;
  }

  input {
    width: calc(100% - 32px);
    padding: 16px;
    margin: 8px 0;

    &:focus {
      outline: none;
    }
  }

  .comment {
    position: relative;
    width: 100%;

    .info {
      position: absolute;
      right: 16px;
      bottom: 24px;
      font-size: 12px;
      line-height: 14px;
    }
  }

  textarea {
    resize: none;
    width: calc(100% - 32px);
    height: 20vh;
    margin: 8px 0;
    padding: 16px;

    &:focus {
      outline: none;
    }
  }
}

</style>
