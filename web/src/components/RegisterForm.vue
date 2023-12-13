<template>
    <form @submit.prevent>
        <my-input
      placeholder="Username"
      ></my-input> 
      <my-input
      placeholder="E-mail"
      ></my-input>
  <my-input
  placeholder="Password"
  ></my-input>
  <my-button class="Register_btn"><span>Register</span></my-button>
    </form>
  </template>
  
  <script>

  export default {

  
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
  
      @include adaptiv-font(40, 8);
  }
  input::placeholder
      {
        @include adaptiv-font(30, 7);
      }

  .Register_btn
  {
   
    span
    {
        @include adaptiv-font(30, 7);
        position: relative;
    }

    margin: 2% 5%;
    @include adaptiv-height(60);
 
  }
  }
  </style>