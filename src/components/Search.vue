<template>
  <div class="search-container">
    <input type="text" v-model="search" v-on:input="debouncedSearch" placeholder="Start stalkingen her ..." autofocus />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import axios from "axios";
import { debounce } from "../utils/debounce";

@Component
export default class Search extends Vue {
  search: string = "";
  debouncedSearch: Object = {};

  mounted() {
    this.debouncedSearch = debounce(this.doSearch, 250);
  }

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
    flex: 1 1 auto;
    width: 80%;
    margin-bottom: 40px;

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
