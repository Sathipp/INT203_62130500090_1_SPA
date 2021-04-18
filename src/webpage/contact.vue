<template>
<navbar></navbar>
<body>
    <div class="text-inner text-center bg-pink-light p-10">
        <h3 class="font-sans text-2xl text-center text-pink-dark"><strong><span>ช่องทางการติดต่อ</span></strong></h3>
    </div>   
</body> 
</template>

<script>
import navbar from "../components/navbar.vue";

export default {
 components: {
    navbar
  }
};
</script>

<style scoped>
@import 'https://fonts.googleapis.com/css?family=Kanit';
body{
    font-family: 'Kanit', sans-serif;
}

h1,h2,h3{
    font-family: 'Kanit', sans-serif;
}
</style>