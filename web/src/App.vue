<template>
  <div id="App">
    <router-view></router-view>
  </div>
</template>

<script>
import LoginBlock from './components/LoginBlock.vue'
import LoginForm from './components/LoginForm.vue'
import MyInput from './components/UI/MyInput.vue'

export default {
  components: { MyInput, LoginForm, LoginBlock },


}
</script>

<style lang="scss">
@import '@/assets/layout/index.scss';

</style>