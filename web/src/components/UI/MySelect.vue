<template>
   <select :value="modelValue" @change="changeOption">
    <option disabled value="" > Выберите из списка  </option>
    <option>по возрастанию цены</option>
    <option>по убыванию цены</option>
  </select>
</template>

<script>
export default {
name:'my-select',

methods:{
        changeOption(event)
        {
            this.$emit('update:modelValue', event.target.value);
        }
    },
    
}
</script>

<style lang="scss">
@import '@/assets/layout/index.scss';
select
{       
    padding: 0.5%;
    border: 0.1px $primary solid;
    border-radius: 4px;
    box-shadow: 5px 2px 2px grey;
}
</style>