<template>
  <div class="scene">
    <div class="scene__sheet-wrapper">
      <div class="scene__sheet">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati reiciendis tempora assumenda, nostrum maxime repellat quaerat deserunt nemo? Eveniet, libero?
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'scene',
  data () {
  }
}
</script>

<style lang="scss">
@import "~styles/variables";

.scene {
  display: flex;
  align-items: center;
  height: $scene-height;
}

.scene__sheet-wrapper {
  height: 100%;
  padding: 20px 5%;
  overflow: auto;
}

.scene__sheet {
  min-height: 100%;
  padding: 20px;
  box-shadow: 0px 5px 20px rgba($color-darkest, .8);
}
</style>
