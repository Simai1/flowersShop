<template>
  <form @submit.prevent> 
    <my-input
    placeholder="e-mail"
    ></my-input>
<my-input
placeholder="password"
></my-input>
<my-button><span >Login</span></my-button>
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
    margin: 10px 5%;
}
button
{
  span
  {
      @include adaptiv-font(20, 15);
  }

    margin: 10px 5%;
  
}
}
</style>