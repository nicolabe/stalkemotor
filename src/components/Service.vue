<template>
  <div class="service" :style="borderStyle">
    <h2 class="service-header">{{service.name}}</h2>
    <img v-if="!loading" :src="imageSrc" :alt="service.name">
    <p>{{service.content}}</p>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import axios from "axios";

@Component
export default class Service extends Vue {
  service: Object = {}
  loading: boolean = true

  @Prop({default: {}})
  serviceData!: Object

  @Prop({default: ""})
  search!: string

  get borderStyle() {
    return `border: 8px solid ${this.service.color}`
  }

  get imageSrc() {
    if (!this.service.icon) {
      return ""
    }
    return require(`@/assets/${this.service.icon}`)
  }

  mounted() {
    axios.get(this.serviceData.url, {params: {
      q: this.search
    }})
    .then(res => {
      this.service = {
        ...this.serviceData,
        ...res.data
      }
      this.loading = false
    })
    .catch(err => console.log(err))
  }
}
</script>

<style scoped lang="scss">
  .service {
    padding: 16px;
    margin: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    min-width: 150px;

    img {
      width: 48px;
      height: 48px;
    }
  }

  .service-header {
    font-size: 20px;
    color: #333;
  }
</style>
