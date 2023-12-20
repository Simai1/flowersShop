<template>
  <div>
    <my-dialog 
  v-model:show="dialogVisiable"
  >
 <my-info></my-info>
  </my-dialog>


  <my-button
  @click="showDialog"
  >allo</my-button>
  </div>

</template>

<script>
import MyInfo from '../components/Me/MyInfo.vue';


export default {
  components: { MyInfo },

  data()
  {
    return{
      dialogVisiable: false,
    }

  },
  methods: {
    showDialog()
        {
          this.dialogVisiable=true;
        },
  },

}
</script>

<style>

</style>