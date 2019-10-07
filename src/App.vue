<template lang="pug">
  div#app
    router-view
</template>

<style lang="scss">
body, html {
  margin: 0;
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
}

.btn {
  padding: 16px;
  width: 100%;
  font-weight: bold;
  font-family: 'Roboto', sans-serif;
  margin: 24px 0;

  &:focus {
    outline: none;
  }
}

.btn-light {
  color: #000000;
  background: #FFFFFF;
}

.btn-dark {
  color: #FFFFFF;
  background: #C4C4C4;
}
</style>
