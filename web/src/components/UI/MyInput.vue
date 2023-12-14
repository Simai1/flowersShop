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
        padding: 0.5%;
        border: 0.1px $primary solid;
        border-radius: 4px;
        box-shadow: 5px 2px 2px grey;

    }


</style>