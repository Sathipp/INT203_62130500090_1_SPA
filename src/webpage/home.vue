
<template>
<navbar></navbar>
<content>
    <slidepic></slidepic>

    <div class="text-inner text-center bg-pink-light p-10">
        <h3 class="font-sans text-3xl text-center text-pink-dark"><strong><span>Welcome to PRISMΛ Official Website</span></strong></h3>
        <p class="font-sans mb-4 text-xl text-center text-pink-dark"><span>We create band, cover, remix, and original song!</span></p>
    </div>
</content>
</template>


<script>
import navbar from "../components/navbar.vue";
import slidepic from "../components/slidepic.vue";

export default {
 components: {
    navbar, slidepic
  }
};
</script>


<style scoped>
@import 'https://fonts.googleapis.com/css?family=Kanit';
content{
    font-family: 'Kanit', sans-serif;
}
</style>