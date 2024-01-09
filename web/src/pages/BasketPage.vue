<template>
  <div id="basket">
  <flower-list
  :cards= $store.state.cart 
  :btn_txt="btn_txt"
  />
  <my-button @click ="BuyCart">Buy</my-button>
  </div>
</template>

<script>
import FlowerList from '../components/Shop/FlowerList.vue'
import MyButton from '../components/UI/MyButton.vue'
export default {
  components: { FlowerList, MyButton },
  data()
    {
        return{

            btn_txt:'Delete',
        }
    },
    methods:
    {
      BuyCart()
      {
        this.$store.commit('DeleteCart');
        alert('Заказ куплен. Скоро с Вами свяжется наш консультант.');
      }
    }
}
</script>

<style lang="scss">
@import '@/assets/layout/index.scss';
#basket
{
  display: flex;
  flex-direction: column;
  align-items: center;
  button {
    width: 50%;
  }
}
</style>