<template>
  <div class="card" style="width: 18rem;">
  <img v-bind:src="card.img_url" class="card-img-top">
  <div class="card-body">
    <h5 class="card-title">{{card.name}}</h5>
    <p class="card-text"><span>{{card.description}}</span></p>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item"><span>{{ card.price }} ₽</span></li>
  </ul>
  <div class="card-body">
    <!-- <a href="#" class="card-link">Card link</a> -->
    <my-button @click="pushButton"><span>{{btn_text}}</span></my-button>
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
      cardN:{},
    }
  },
  props:{
        card:
        {
            type: Object,
            required: false,
        },
        btn_text:
        {
          type: String,
        }
    },
    methods:
    {
      pushButton()
      {

        if (this.btn_text==="Put in the basket")
        {
          console.log(this.$store.state.Nid);
        this.cardN={
          id:this.$store.state.Nid,
          name: this.card.name,
          description: this.card.description,
          price: this.card.price,
          img_url: this.card.img_url,

        };
        this.$store.commit('addCard',this.cardN);
        this.$store.commit('incId');
        console.log(this.$store.state.cart);
        }
       if(this.btn_text==="Delete")
       {
        this.$store.commit('deleteCard', this.card.id);
        console.log(this.$store.state.cart);
       }
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