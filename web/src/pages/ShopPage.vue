<template>
  <div id="ShopPage">
    <div class="ShopPage_search">
      <my-input
    placeholder="Search...."></my-input>
    <my-select></my-select>
      </div>  
   


  <my-card></my-card>
  </div>
</template>

<script>
import MyInput from '../components/UI/MyInput.vue'
// import axios from 'axios';
import MyNavbar from '../components/UI/MyNavbar.vue'
import MySelect from '../components/UI/MySelect.vue'
export default {
  components: { MyNavbar, MyInput, MySelect,  },

}
</script>

<style lang="scss">
@import '@/assets/layout/index.scss';
#ShopPage
{
  .ShopPage_search
  {
    display: flex;
    justify-content: space-between;
    width: 90%;
  }
  input {
    margin:1%;
    width: 50%;
  }
  select {
    margin:1%;
    width: 30%;
  }
}
</style>