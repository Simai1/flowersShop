<template>
    <div id ="flower_list">
        <my-card
v-for="card in cards"
:key="card.name"
:card="card"
/>
    </div>

</template>

<script>
import MyCard from '../UI/MyCard.vue'
export default {
  components: { MyCard },
  props:{
    cards:{
        type:Array,
        required: false,
    }
    
}

}
</script>

<style lang="scss">
@import '@/assets/layout/index.scss';
#flower_list
{
    width: 100%;
    display: flex;
    flex-wrap: wrap;
}
</style>