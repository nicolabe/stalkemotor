<template>
  <div id="app">
    <h1 class="app-header">Stalkemotor</h1>
    <Search
      v-on:addServices="addServices"
      v-on:clearServices="clearServices"
      v-on:setSearch="setSearch"
    />
    <ServiceContainer
      v-if="services.length"
      v-bind:services="services"
      v-bind:search="search"
    />
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator';
import Search from './components/Search.vue';
import ServiceContainer from './components/ServiceContainer.vue';

@Component({
  components: {
    Search,
    ServiceContainer
  },
})
export default class App extends Vue {
  services: Array<Object> = [];
  search: string = "";

  addServices(services: Array<Object>) {
    this.services = services;
  }

  clearServices() {
    this.services = [];
  }

  setSearch(search: string) {
    this.search = search;
  }
}
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
