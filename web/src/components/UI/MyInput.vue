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
        padding: 10px;
        border: 0.1px $primary solid;
        border-radius: 4px;
    }


</style>