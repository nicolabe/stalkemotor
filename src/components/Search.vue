<template>
  <div class="search-container">
    <form v-on:submit.prevent="doSearch">
      <input type="text" v-model="search" placeholder="Start stalkingen her ..." autofocus />
      <button class="search-submit" type="submit">Søk</button>
    </form>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import axios from "axios";

@Component
export default class Search extends Vue {
  search: string = "";

  async doSearch (): Promise<void> {
    if (this.search.length >= 2) {
      const response = await axios.get("/api/services")
      if (response.data.length) {
        this.$emit("clearServices");
      }
      this.$emit("addServices", response.data)
      this.$emit("setSearch", this.search)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .search-container {
    display: flex;
    margin-bottom: 40px;
    flex: 1 1 auto;
    width: 80%;

    form {
      display: flex;
      flex: 1;

      input {
        flex: 1 1 auto;
        height: 40px;
        padding: 10px 16px;
        font-size: 24px;
        border: 2px solid #cc5500;
        border-radius: 10px;
        outline: none;
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;

        &::placeholder {
          font-size: 24px;
          color: #858585;
        }
      }
    }
  }

  .search-submit {
    background-color: #cc5500;
    border: 1px solid transparent;
    display: inline-block;
    padding: 6px 12px;
    color: white;
    border-radius: 10px;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    position: relative;
    z-index: 2;
    cursor: pointer;
    font-size: 20px;
  }
</style>
