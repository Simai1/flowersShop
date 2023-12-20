<template>
    <div id="AboutPage">
<about-us></about-us>
<best-selers></best-selers>
<new-flower></new-flower>
<ending-page></ending-page>
    </div>
</template>

<script>
import AboutUs from '../components/About/AboutUs.vue'
import BestSelers from '../components/About/BestSelers.vue'
import EndingPage from '../components/About/EndingPage.vue'
import NewFlower from '../components/About/NewFlower.vue'

export default {
  components: { AboutUs, BestSelers, NewFlower, EndingPage },


}
</script>

<style lang="scss">
@import '@/assets/layout/index.scss';
#AboutPage
{
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 2;

}
</style>