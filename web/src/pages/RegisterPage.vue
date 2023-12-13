<template>
  <div id="RegisterPage">
    <div id="RegisterPage_block">
        <img  id="RegisterPage_pic" src="@/assets/pictures/Register_pic.png"/> 
        <register-block></register-block>
</div>
</div>
</template>

<script>
import RegisterBlock from '../components/Register/RegisterBlock.vue'
export default {
  components: { RegisterBlock },

}
</script>

<style lang="scss">
@import '@/assets/layout/index.scss';
#RegisterPage
{
    position: fixed;
    top:0;
    bottom: 0;
    right: 0;
    left: 0;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    

}

#RegisterPage_block
{
  width: 68%;
  display: flex;
  justify-content: center;
  align-items: center;


  #RegisterBlock
  {
    width: 50%;
    @include adaptiv-height(675);
    
  }
  #RegisterPage_pic
  {
    object-fit: contain;
    width: 50%;
  }

}
</style>