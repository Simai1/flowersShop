<template>
  <div id="LoginBlock"> 
    <div class="LoginBlock_title">
        <div class="LoginBlock_title_head">
            <div class="LoginBlock_title_head_login"><span>Login</span></div>
            <div class="LoginBlock_title_head_home"><img src="@/assets/pictures/home_vector.svg"/><span>Back to home</span></div>
        </div>
        <div class="LoginBlock_title_desc"><span>Login and have more fun</span></div>
    </div>
    <div class="LoginBlock_form"><login-form></login-form></div>
    <div class="LoginBlock_register"><span>dont have account? </span><span class="LoginBlock_register_link">Register</span></div>

  </div>
</template>

<script>
import LoginForm from './LoginForm.vue'
export default {
  components: { LoginForm },

}
</script>

<style lang="scss">
@import '@/assets/layout/index.scss';

#LoginBlock
{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background: $bground;
    

}

.LoginBlock_title
{
display: flex;
flex-direction: column;
justify-content: center;
margin: 10% 5% 0%;
}

.LoginBlock_form
{

}
.LoginBlock_title_head
{
    display: flex;
    justify-content: space-between;
    .LoginBlock_title_head_login
    {
      @include adaptiv-font(32, 20);
    }
    .LoginBlock_title_head_home
    {
      @include adaptiv-font(18, 14);

      img
      {
        height: 37%;
        margin-bottom: 6%;
      }
    }
    .LoginBlock_title_head_home:hover
    {
      color: $primary;
    }

}
.LoginBlock_title_desc
    {
      @include adaptiv-font(18, 14);
      color: #838383;
    }


.LoginBlock_register
{
  margin-bottom: 10%;
    display: flex;
    justify-content: center;
    @include adaptiv-font(18, 14);
    color: #838383;
    span
    {
      margin: 2px;
    }
    .LoginBlock_register_link
    {
      color: $primary;
    }
    .LoginBlock_register_link:hover
    {
      color: $primaryDark;
    }
}
</style>