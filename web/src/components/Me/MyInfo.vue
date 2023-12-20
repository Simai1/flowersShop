<template>
  <div id="Info">
    <h2>My profile</h2>
    <div><span>Username: </span><span></span></div>
    <div><span>E-mail:</span><span></span></div>
    <my-button>Exit</my-button>
  </div>
</template>

<script>

export default {


}
</script>


<style lang="scss">
@import '@/assets/layout/index.scss';
#Info
{
    display: flex;
    flex-direction: column;
    
    margin: 5%;
}
</style>