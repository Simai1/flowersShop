<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#"><span><b>Flower </b>Shop</span></a>
   
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <a class="nav-link active" aria-current="page" href="#">About</a>
        <a class="nav-link" href="#">Shop</a>
        <a class="nav-link" href="#">Cart</a>
        <a class="nav-link" href="#">Me</a>
      </div>

    </div>
  </div>
</nav>
</template>

<script>
export default {
    name: 'my-navbar',
}
</script>

<style lang="scss">
@import '@/assets/layout/index.scss';

.navbar
{
   background: $bground !important;
   
   
}
b
{
    color: #9c7044 !important;
}

</style>