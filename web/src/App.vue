<template>
  <div id="App">
    <my-navbar></my-navbar>
    <router-view></router-view>
  </div>
</template>

<script>
import LoginBlock from './components/Login/LoginBlock.vue'
import LoginForm from './components/Login/LoginForm.vue'
import MyInput from './components/UI/MyInput.vue'

export default {
  components: { MyInput, LoginForm, LoginBlock },


}
</script>

<style lang="scss">
@import '@/assets/layout/index.scss';

</style>