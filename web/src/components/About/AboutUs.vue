<template>
     <div class="AboutUs">
        <div class="AboutUs_text">
          <div class="AboutUs_text_slog"><h1>Flowers, 🌻what the world needs </h1></div>
          <div class="AboutUs_text_desc"><span>Our shop is the best!!</span></div>
        </div>
        <div class="AboutUs_imgs"><img v-for="img in images" :key="img" :src="img"/></div>
      </div>
</template>

<script>
export default {
    data(){
    return{
        images:['https://avatars.yandex.net/get-music-content/4747389/fc168be3.a.15012476-1/m1000x1000?webp=false',
        'https://geo-media.beatport.com/image_size/1400x1400/d8bba596-8a03-4b9f-b293-396dbae3493a.jpg',
    'https://www.pawlinska.com/wp-content/uploads/2019/12/89-big.jpg',
'https://floramorcom.files.wordpress.com/2022/11/taisiia-shestopal-dnbbqimxh60-unsplash-1-edited.jpg',
'https://images.squarespace-cdn.com/content/v1/5e4c23eed951fb33724f8c50/1582057229271-QVEQUXLI5DVMO9HSE89G/image-asset.jpeg',
'https://www.heidelberg-guide.com/wp-content/uploads/hdg-gin-rose.jpg'

],
    }
  },
}
</script>

<style lang="scss">
@import '@/assets/layout/index.scss';
.AboutUs
  {
    margin-top: 5%;
    width: 90%;
    display: flex;
    justify-content: center;
    .AboutUs_text_slog
    {
        width: 50%;
    }
    .AboutUs_imgs
    {
        width: 55%;
        display: flex;
        flex-wrap: wrap;
    }
    img {
     @include  adaptiv-height-wigth(192, 192);
     object-fit: cover;
     margin: 1%;
     border-radius: 6px;
     box-shadow: 3px 2px 2px grey;
    }
  }
</style>