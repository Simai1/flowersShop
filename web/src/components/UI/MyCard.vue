<template>
  <div class="card" style="width: 18rem;">
  <img v-bind:src="card.img_url" class="card-img-top">
  <div class="card-body">
    <h5 class="card-title">{{card.name}}</h5>
    <p class="card-text"><span>{{card.description}}</span></p>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item"><span>{{ card.price }}</span></li>
  </ul>
  <div class="card-body">
    <!-- <a href="#" class="card-link">Card link</a> -->
    <my-button><span>Put in the basket</span></my-button>
  </div>
</div>
</template>

<script>
import MyButton from './MyButton.vue'
export default {
  components: { MyButton },
  name: 'my-card',
  data(){
    return{
      image1:'https://otkritkis.com/wp-content/uploads/2022/06/r62xx.jpg',
    }
  },
  props:{
        card:
        {
            type: Object,
            required: false,
        }
    }
}
</script>

<style lang="scss">
@import '@/assets/layout/index.scss';
.card
{
  box-shadow: 5px 2px 2px grey;
  background: $forCard !important;
  margin: 1%;

  .list-group-item
  {
    background: $forCard !important;
  }
}
</style>