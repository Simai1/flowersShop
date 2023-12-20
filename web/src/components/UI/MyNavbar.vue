<template>
 <div>
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" ><span><b>Flower </b>Shop</span></a>
   
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <a class="nav-link active" aria-current="page" href="#" @click="$router.push('/about')">About</a>
        <a class="nav-link" href="#" @click="$router.push('/shop')">Shop</a>
        <a class="nav-link" href="#" @click="$router.push('/basket')">Cart</a>
        <button class="btn btn-sm btn-outline-secondary" type="button" @click="showDialog">Me</button>
      </div>
    </div>
  </div>
</nav>
<my-dialog
v-model:show="dialogVisiable"
>
<my-info></my-info>
</my-dialog>

</div>
</template>

<script>
import MyInfo from '../Me/MyInfo.vue';
import MyDialog from './MyDialog.vue'
export default {
  components: { MyDialog, MyInfo },
    name: 'my-navbar',
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

<style lang="scss">
@import '@/assets/layout/index.scss';

.navbar
{
   background: $bground !important;
   box-shadow: 0 2px 2px grey;
   
   
}
b
{
    color: #9c7044 !important;
}
.btn:hover
{
  background: #cc945c;
}

</style>