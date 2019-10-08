<template lang="pug">
  div#app
    transition.durations-4s(enter-active-class="animated slideInRight"
               leave-active-class="animated slideOutLeft"
               mode="out-in")
      router-view(style="animation-duration: 0.4s")
</template>

<script>
export default {
  created () {
    this.$store.dispatch('GET_COMMENTS')
  },
  data () {
    return {
      transitionName: 'slide-right'
    }
  }
}
</script>

<style lang="scss">
body, html {
  margin: 0;
  background: #F8F8F8;
}

body {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

p {
  margin: 0;
}

#app {
  font-family: 'Roboto', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background: #F8F8F8;
  height: calc(100vh - 64px);
  overflow: hidden;
  padding: 32px 16px;
  font-size: 14px;
  line-height: 16px;
  width: calc(100% - 32px);
  max-width: 760px;
}

.header {
  font-weight: bold;
}

.orange {
  color: #F56A3F;
}

.bordered-item {
  border: 1px solid #D9D9D9;
  border-radius: 8px;
  transition: 0.4s;
}

.input-error {
  border: 1px solid rgb(172, 78, 78);
  border-radius: 8px;
}

.btn {
  padding: 16px;
  width: 100%;
  font-weight: bold;
  font-family: 'Roboto', sans-serif;
  margin: 24px 0;
  cursor: pointer;

  &:focus {
    outline: none;
  }
}

.btn-light {
  color: #000000;
  background: #FFFFFF;
  transition: 0.4s;

  &:hover {
    color: #FFFFFF;
    background: #C4C4C4;
  }
}

.btn-dark {
  color: #FFFFFF;
  background: #C4C4C4;
  transition: 0.4s;

  &:hover {
    color: #000000;
    background: #FFFFFF;
  }
}

.fill-star {
  fill: #F56A3F;
  transition: 0.5s;
  transform: rotate(360deg);
  transform-origin: center;

}

.stars {
  margin: 8px 0;

  .star {
    margin: 2px;
    cursor: pointer;
    transform-origin: center;
  }
}

.placeholder {
  &::-webkit-input-placeholder { /* Chrome/Opera/Safari */
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 16px;
    color: #C4C4C4;
  }

  &::-moz-placeholder { /* Firefox 19+ */
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 16px;
    color: #C4C4C4;
  }

  &:-ms-input-placeholder { /* IE 10+ */
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 16px;
    color: #C4C4C4;
  }

  &:-moz-placeholder { /* Firefox 18- */
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 16px;
    color: #C4C4C4;
  }
}
</style>
