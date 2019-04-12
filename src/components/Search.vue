<template>
  <div class="search-container">
    <input type="text" v-model="search" v-on:input="doSearch" placeholder="Start stalkingen her ..." autofocus />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import axios from "axios";

@Component
export default class Search extends Vue {
  search: string = "";

  async doSearch (): Promise<void> {
    if (this.search.length >= 2) {
      const { data } = await axios.get("/api/search", {
        params: {
          q: this.search
        }
      })
    }
  }


}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .search-container {
    display: flex;
    flex: 1 1 auto;
    width: 80%;

    input {
      flex: 1;
      height: 40px;
      padding: 10px 16px;
      font-size: 24px;
      border: 2px solid #cc5500;
      border-radius: 10px;
      outline: none;

      &::placeholder {
        font-size: 24px;
        color: #858585;
      }
    }
  }
</style>
