<template>
  <header class="header">
    <h1 class="header__title">{{title}}</h1>
    <button class="btn header__settings">
      <img src="http://via.placeholder.com/25x25" alt="settings">
    </button>
  </header>
</template>

<script>
export default {
  name: 'header',
  data () {
    return {
      title: 'Textual Game'
    }
  }
}
</script>

<style lang="scss">
@import "~styles/variables";

.header {
  display: flex;
  align-items: center;
  height: $header-height;
  background: rgb(236, 236, 236);
}

.header__title {
  flex: 1 1 auto;
  margin: 0;
  transform: translateX($btn-settings-width/2);
  font-size: 18px;
  text-align: center;
}

.header__settings {
  flex: 0 1 $btn-settings-width;
  text-align: center;

  img {
    display: block;
    margin: 0 auto;
    border-radius: 100%;
  }
}
</style>
