<template>
  <div class="service-container">
    <h3 class="service-subheader">Vi fant følgende resultater: </h3>
    <div  class="service-list">
      <div v-for="service in services" v-bind:key="service.id">
        <Service
          v-bind:serviceData="service"
          v-bind:search="search"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import Service from './Service.vue';

@Component({
  components: {
    Service
  }
})
export default class ServiceContainer extends Vue {
  @Prop()
  services!: Array<Object>

  @Prop({default: ""})
  search!: string
}
</script>

<style lang="scss">
  .service-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .service-list {
    display: flex;
    flex-direction: row;
  }

  .service-subheader {
    color: #333;
  }
</style>
