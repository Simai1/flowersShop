<template>
  <form @submit.prevent> 
    <my-input
    placeholder="E-mail"
    ></my-input>
<my-input
placeholder="Password"
></my-input>
<my-button class="Login_btn"><span >Login</span></my-button>
  </form>
</template>

<script>
import MyButton from './UI/MyButton.vue'
import MyInput from './UI/MyInput.vue'
export default {
  components: { MyInput, MyButton },

}
</script>

<style lang="scss">
@import '@/assets/layout/index.scss';

form{
    display: flex;
flex-direction: column;

input
{
    margin: 2% 5%;

    @include adaptiv-font(30, 8);
}
input::placeholder
    {
      @include adaptiv-font(30, 7);
    }
.Login_btn
{
 
  
  span
  {
      @include adaptiv-font(30, 7);
  }

    margin: 2% 5%;
  @include adaptiv-height(60);
}
}
</style>