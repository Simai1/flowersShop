<template>
  <div id="ShopPage">
    <div class="ShopPage_search">
      <my-input
    placeholder="Search...."></my-input>
    <my-select></my-select>
      </div>  
   


  <flower-list
  :cards="cards"
  />
  </div>
</template>

<script>
import FlowerList from '../components/Shop/FlowerList.vue'
import MyInput from '../components/UI/MyInput.vue'
// import axios from 'axios';
import MyNavbar from '../components/UI/MyNavbar.vue'
import MySelect from '../components/UI/MySelect.vue'
export default {
  components: { MyNavbar, MyInput, MySelect, FlowerList,  },

  data()
    {
        return{
           
            cards:[
                {
                  id: 1,
                  title: 'flowers1',
                  desc: 'description1',
                  price:1,
                  img:'abc',
                },
                {
                  id: 2,
                  title: 'flowers2',
                  desc: 'description2',
                  price:1,
                  img:'abc',
                },
                {
                  id: 3,
                  title: 'flowers3',
                  desc: 'description3',
                  price:3,
                  img:'abc',
                },
            ],
           
        }
    },

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