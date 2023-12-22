<template>
  <div id="ShopPage">
    <div class="ShopPage_search">
      <my-input
      v-model="search"
      @change="Search"
    placeholder="Search...." 
    
    ></my-input>
    <my-select
    v-model="selectedSort"
    @change ="Sorted"
    ></my-select>
      </div>  
   


  <flower-list
  :cards="products"
  :btn_txt="btn_txt"
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
           search:'',
            products:[  ],
            btn_txt:'Put in the basket',
            selectedSort: '',
            cards:[
                {
               
                  name: 'Композиция из цветов СНЕГОВИК',
                  description: '"композиция снеговик',
                  price:14900,
                  img_url:"https://www.buket-piter.ru//thumb/kQ5H22egynasp5-W_z_r9w/285r285/203678/%D0%A1%D0%BD%D0%B5%D0%B3%D0%BE%D0%B2%D0%B8%D0%BA_%D0%B8%D0%B7_%D1%86%D0%B2%D0%B5%D1%82%D0%BE%D0%B2-1.jpg",
                }]
        }
    },


    methods: {
       



     async loadFlowers()
      {

        
        const response = await axios.get('http://localhost:3000/product/flowers/');
        this.products = response.data.products;
        console.log(response);
      },
      async Search()
      {
        const response =  await axios.get('http://localhost:3000/product/flowers/'+ this.search);
        this.products = response.data.products;
        return this.products;
      },
      Sorted()
      {
        if (this.selectedSort==="по убыванию цены")
        {
          this.products = this.sortedArrayDown;
        }
        if (this.selectedSort==="по возрастанию цены")
        {
          this.products = this.sortedArrayUp;
        }
        
      }
      ,

    },
    mounted() {
            this.loadFlowers();
            
        },
        computed:
    {
      sortedArrayUp: function() {
    function compare(a, b) {
      if (a.price < b.price)
        return -1;
      if (a.price > b.price)
        return 1;
      return 0;
    }
    return this.products.sort(compare);
      },

      sortedArrayDown: function() {
    function compare(a, b) {
      if (a.price < b.price)
        return 1;
      if (a.price > b.price)
        return -1;
      return 0;
    }
    return this.products.sort(compare);
      },

 
       SearchFlower(){
        return this.Search();
        
      },
    }
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