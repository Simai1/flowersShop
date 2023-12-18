<template>
   <div id="RegisterBlock"> 
    <div class="RegisterBlock_title">
        <div class="RegisterBlock_title_head">
            <div class="RegisterBlock_title_head_Register"><span>Register</span></div>
        </div>
        <div class="RegisterBlock_title_desc"><span>Register and help as help you</span></div>
    </div>
    <div class="RegisterBlock_form"><register-form></register-form></div>
    <div class="RegisterBlock_register"><span>Already have an account? </span><span class="RegisterBlock_register_link">Login</span></div>

  </div>
</template>

<script>
import RegisterForm from './RegisterForm.vue'
export default {
  components: { RegisterForm },

}
</script>

<style lang="scss">
@import '@/assets/layout/index.scss';

#RegisterBlock
{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background: $bground;
    

}

.RegisterBlock_title
{
display: flex;
flex-direction: column;
justify-content: center;
margin: 10% 5% 0%;
}


.RegisterBlock_title_head
{
    display: flex;
    justify-content: start;
    align-items: center;
    .RegisterBlock_title_head_Register
    {
      @include adaptiv-font(55,10);
    }
    .RegisterBlock_title_head_home
    {
      @include adaptiv-font(28, 7);

      img
      {
        height: 100%;
        margin-bottom: 6%;
      }
    }
    .RegisterBlock_title_head_home:hover
    {
      color: $primary;
    }

}
.RegisterBlock_title_desc
    {
      @include adaptiv-font(30, 7);
      color: #838383;
    }



.RegisterBlock_register
{
  margin-bottom: 10%;
    display: flex;
    justify-content: center;
    @include adaptiv-font(30, 7);
    color: #838383;
    span
    {
      margin: 2px;
    }
    .RegisterBlock_register_link
    {
      color: $primary;
    }
    .RegisterBlock_register_link:hover
    {
      color: $primaryDark;
    }
}
</style>