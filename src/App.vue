<template>
  <div id="app">
    <h1 class="app-header">Stalkemotor</h1>
    <Search />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Search from './components/Search.vue';

@Component({
  components: {
    Search,
  },
})
export default class App extends Vue {}
</script>

<style lang="scss">
@import url(//db.onlinewebfonts.com/c/7794d0677e4adcb1a70cdc6c4e039d7a?family=Neuropol+X);
@font-face {font-family: "Neuropol X";
    src: url("//db.onlinewebfonts.com/t/7794d0677e4adcb1a70cdc6c4e039d7a.eot");
    src: url("//db.onlinewebfonts.com/t/7794d0677e4adcb1a70cdc6c4e039d7a.eot?#iefix") format("embedded-opentype"),
    url("//db.onlinewebfonts.com/t/7794d0677e4adcb1a70cdc6c4e039d7a.woff2") format("woff2"),
    url("//db.onlinewebfonts.com/t/7794d0677e4adcb1a70cdc6c4e039d7a.woff") format("woff"),
    url("//db.onlinewebfonts.com/t/7794d0677e4adcb1a70cdc6c4e039d7a.ttf") format("truetype"),
    url("//db.onlinewebfonts.com/t/7794d0677e4adcb1a70cdc6c4e039d7a.svg#Neuropol X") format("svg");
}

* {
  font-family: Roboto;
}

#app {
  display: flex;
  flex-direction: column;
  align-items: center;

  .app-header {
    color: #cc5500;
    text-transform: uppercase;
    font-size: 36px;
    font-family: "Neuropol X"
  }
}
</style>
