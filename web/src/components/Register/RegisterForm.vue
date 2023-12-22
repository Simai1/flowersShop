<template>
    <form @submit.prevent>
        <my-input
        type ="text"
        v-model="user.name"
      placeholder="Username"
      /> 
      <my-input
      type ="text"
      v-model="user.mail"
      placeholder="E-mail"
      />
  <my-input
  v-model="user.password"
  placeholder="Password"
  type = "password"
  />
  <my-button
  @click="CreateUser"
   class="Register_btn"><span>Register</span></my-button>
    </form>
  </template>
  
  <script>
import axios from 'axios';
  export default {
    data(){
        return{
            user:{
                name:'',
                mail:'',
                password:'',
            }
        }
    },
    methods:{
      async CreateUser()
      {
      try{
        const data = {
            login: this.user.mail,
            password: this.user.password
        };
        const response = await axios.post('http://localhost:3000/auth/register',data);
        this.user.mail='';
        this.user.name='';
        this.user.password='';
      }
      catch(e){ 
          alert('Ошибка регистрации!'); }
       }


    },
  
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