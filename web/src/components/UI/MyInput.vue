<template>
  <input
  type="text"

  >
</template>

<script>
export default {
    name: 'my-input',
}
</script>

<style lang="scss">

@import '@/assets/layout/index.scss';
input
    {
        padding: 3%;
        border: 0.1px $primary solid;
        border-radius: 4px;
        @include adaptiv-height(65);
        box-shadow: 5px 2px 2px grey;

    }
input::placeholder
{
    @include adaptiv-font(27, 17);
}

</style>