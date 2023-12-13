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
}

</style>