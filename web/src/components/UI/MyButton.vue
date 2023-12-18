<template>
    <button class="_btn"><slot></slot></button>

</template>

<script>
export default {
    name: 'my-button',

}
</script>

<style lang="scss">
@import '@/assets/layout/index.scss';
._btn
{
    display: flex;
    justify-content: center;
    align-items: center;
    background: $primary;
    border: 0;
    border-radius: 4px;
    box-shadow: 5px 2px 2px grey;
}
._btn:hover
{
    background: $primaryDark;
    box-shadow: 3px 2px 2px grey;
}
</style>