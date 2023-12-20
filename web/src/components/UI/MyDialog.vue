<template>
    <div class="dialog" v-if="show" @click="hideDialog">
        <div class = "dialog_content" @click.stop>
            <slot></slot>
        </div>
    </div>

  </template>
  
  <script>
import { getTransitionRawChildren } from 'vue';

  export default {
  name: 'my-dialog',
  props:{
      show:{
          type: Boolean,
          default: false,
      }
  },
  methods:
  {
    hideDialog()
    {
        this.$emit('update:show', false);
    }
  }
  }
  </script>
  
  <style lang="scss">
  @import '@/assets/layout/index.scss';
  .dialog
{
    top:0;
    bottom: 0;
    right: 0;
    left: 0;
    position: fixed;
    background: rgba(0,0,0, 0.5) !important;
    display: flex;

    .dialog_content
    {
        background: $bground;
        margin: auto;
        padding: 20px;
        border-radius: 15px;
        border: 8px #cc945c solid;
        min-width: 300px;
        min-height: 50px;
        z-index: 3;
    }
}
  </style>