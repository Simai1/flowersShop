<template>
  <div id="BestSelers">
<div class="BestSelers_name"><h2 class="BestSelers_name_text">Best selers</h2></div>
<div class="BestSelers_cards">
<flower-list
:cards="cards"
/>
</div>
  </div>
</template>

<script>
import FlowerList from '../Shop/FlowerList.vue'

export default {
  components: { FlowerList },
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
#BestSelers
{
    margin-top: 5%;
    width: 90%;
    display: flex;
    flex-direction: column;
    align-items: center;
    
    .BestSelers_name
    {
        text-align: center;  
    width: 80%;        
        .BestSelers_name_text
        {
            position: relative;
        }
        .BestSelers_name_text::before
        {
            display: block;                
            @include  adaptiv-wigth(100);                 
            content: '';                     
            position: absolute;             
            border-bottom: 2px solid gray;   
            top:50%;                        
            right: calc(  290*100vw / 1440);                  
        }
        .BestSelers_name_text::after
        {
            display: block;
            @include  adaptiv-wigth(100);  
            content: '';
            position: absolute;
            border-bottom: 2px solid gray;
            top:50%;
            left: calc(  290*100vw / 1440);                
        }
    }
    .BestSelers_cards
    {
        #flower_list
{
  display: flex;
  justify-content: center;
}
        width: 100%;
        flex-direction: row;
        flex-wrap: wrap;
    }
}
</style>