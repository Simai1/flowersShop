<template>
  <div id="Ending">
    <div class="Ending_block"><h4><b>Flower </b>shop</h4></div>
    <div class="Ending_block"><h5>Contact</h5>
    <span>flower@example.com</span>
    <span>+7 (999) 999-99-99</span>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
@import '@/assets/layout/index.scss';
#Ending
{
    margin-top: 5%;
    width: 100%;
    height: 20vh;
    background: $bground;
    box-shadow: 0 -2px 2px grey;
    display: flex;
    justify-content: space-around;
    .Ending_block
    {
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
}

</style>