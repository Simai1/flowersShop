<template>
<div id="LoginPage">
    <div id="LoginPage_block">
<login-block></login-block>
 <img  id="LoginPage_pic" src="@/assets/pictures/Login_pic.png"/> 
</div>
</div>
</template>

<script>
import LoginBlock from '../components/LoginBlock.vue'

export default {
  components: { LoginBlock },

}
</script>

<style lang="scss">
@import '@/assets/layout/index.scss';
#LoginPage
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

#LoginPage_block
{
  width: 68%;

  display: flex;
  justify-content: center;
  align-items: center;
  #LoginBlock
  {
    width: 50%;

    @include adaptiv-height(634);
  }
  #LoginPage_pic
  {
    object-fit: contain;
    width: 50%;
  }

}

</style>