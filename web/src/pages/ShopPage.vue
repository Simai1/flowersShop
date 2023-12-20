<template>
  <div id="ShopPage">
    <div class="ShopPage_search">
      <my-input
    placeholder="Search...."></my-input>
    <my-select></my-select>
      </div>  
   


  <flower-list
  :cards="products"
  />
  </div>
</template>

<script>
import FlowerList from '../components/Shop/FlowerList.vue'
import MyInput from '../components/UI/MyInput.vue'
import axios from 'axios';
import MyNavbar from '../components/UI/MyNavbar.vue'
import MySelect from '../components/UI/MySelect.vue'
export default {
  components: { MyNavbar, MyInput, MySelect, FlowerList,  },

  data()
    {
        return{
           
            products:[
                // {
                //   name: 'flowers1',
                //   description: 'description1',
                //   price:1,
                //   img_url:'https://otkritkis.com/wp-content/uploads/2022/06/r62xx.jpg',
                // },
                // {
                //   title: 'flowers2',
                //   desc: 'description2',
                //   price:1,
                //   img:'abc',
                // },
                // {
                //   id: 3,
                //   title: 'flowers3',
                //   desc: 'description3',
                //   price:3,
                //   img:'abc',
                // },
            ],
           
        }
    },
    methods: {

     async loadFlowers()
      {
  
        const response = await axios.get('http://localhost:3000/product/flowers');
        console.log(response);
      }

    },
    mounted() {
            this.loadFlowers();
            
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