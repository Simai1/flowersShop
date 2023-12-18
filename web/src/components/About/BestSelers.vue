<template>
  <div id="BestSelers">
<div class="BestSelers_name"><h2 class="BestSelers_name_text">Best selers</h2></div>
<div class="BestSelers_cards">
    <my-card></my-card>
    <my-card></my-card>
    <my-card></my-card>
</div>
  </div>
</template>

<script>

export default {


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
        width: 100%;
        display: flex;
        justify-content: space-around;
        flex-direction: row;
        flex-wrap: wrap;
    }
}
</style>