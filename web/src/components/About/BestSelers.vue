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
               
                  name: 'Композиция из цветов СНЕГОВИК',
                  description: '"композиция снеговик',
                  price:14900,
                  img_url:"https://www.buket-piter.ru//thumb/kQ5H22egynasp5-W_z_r9w/285r285/203678/%D0%A1%D0%BD%D0%B5%D0%B3%D0%BE%D0%B2%D0%B8%D0%BA_%D0%B8%D0%B7_%D1%86%D0%B2%D0%B5%D1%82%D0%BE%D0%B2-1.jpg",
                },
                {
               
               name: 'Елочка с Украшениями',
               description: 'кашпо декоративное -1 шт., оазис 0,5 - 2 шт., ель нобилис 0,5 - 4 шт., шары елочные - 8 шт.',
               price:4750,
               img_url:'https://www.buket-piter.ru//thumb/57gKYSQf4Fpj56XPNG91pA/285r285/203678/%D0%95%D0%BB%D0%BE%D1%87%D0%BA%D0%B0_%D0%BD%D0%BE%D0%B2%D0%BE%D0%B3%D0%BE%D0%B4%D0%BD%D1%8F%D1%8F_%D1%81_%D1%88%D0%B0%D1%80%D0%B8%D0%BA%D0%B0%D0%BC%D0%B8%2B.jpg',
             },
             {
               
               name: 'Новогодний венок с Красными Украшениями',
               description: 'ветка натурального нобилиса - 3 шт., новогодний шар - 7 шт., шишка новогодняя - 13 шт., декор - 2 шт., каркас - 1 шт., атласная лента',
               price:3990,
               img_url:'https://www.buket-piter.ru//thumb/wYkybqhxaX5VAWj2XLeRow/285r285/203678/%D0%BA%D1%80%D0%B0%D1%81%D0%BD%D1%8B%D0%B9_%D0%B2%D0%B5%D0%BD%D0%BE%D0%BA.jpg',
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