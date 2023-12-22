<template>
  <input
  type="text"
  :value="modelValue"
  @input="updateInput"
  >
</template>

<script>
export default {
    name: 'my-input',
    props:{
  modelValue: [String, Number]
},
methods:{
  updateInput(event){
    this.$emit('update:modelValue', event.target.value);
  }
}
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