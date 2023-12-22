<template>
  <form @submit.prevent> 
    <my-input
    v-model="user.mail"
    placeholder="E-mail"
    ></my-input>
<my-input
v-model="user.password"
placeholder="Password"
type="password"
></my-input>
<my-button class="Login_btn" @click="AuthUser"><span >Login</span></my-button>
  </form>
</template>

<script>
import MyButton from '../UI/MyButton.vue'
import MyInput from '../UI/MyInput.vue'
import axios from 'axios'
export default {
  components: { MyInput, MyButton },
  
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
      async AuthUser()
      {
      try{
        const data = {
            login: this.user.mail,
            password: this.user.password
        };
        const response = await axios.post('http://localhost:3000/auth/login',data);
        this.$router.push('/about');
      }
      catch(e){ 
          alert('Ошибка входа!'); }
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