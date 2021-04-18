<template>
<navbar></navbar>
<content>
    <div class="w-auto">
        <img src="../../pic/prisma-circle.png" style="position: relative;">
    </div>

    <div class="text-inner text-center bg-pink-light p-10">
        <h3 class="text-2xl text-center" style="color: #FE3A8C;"><strong><span>เซอร์เคิลพริสม่าคืออะไร?</span></strong></h3>
        <p class="mb-4 text-xl text-center text-gray"><span>
        เซอร์เคิลพริสม่าคือกลุ่มคนที่สนใจ Pop Culture ของญี่ปุ่นเเละรวมตัวกันเพื่อสร้างสรรค์ผลงานที่จะมอบความสุขให้เเก่ทุกคนค่ะ<br> 
        ซึ่งผลงานหลักของเราจะเป็นการ Cover เพลงจากทางฝั่งญี่ปุ่น รวมไปถึงผลงานภาพวาดต่าง ๆ จากนักวาดของเราค่ะ<br> 
        นอกจากนี้เรายังรับทำผลงานทางด้าน Music และ Music Video อีกด้วยนะคะ หากสนใจสามารถติดต่อเข้ามาได้เลยค่ะ!</span>
        </p>
    </div>
</content>  
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
content{
    font-family: 'Kanit', sans-serif;
}

h1,h2,h3{
    font-family: 'Kanit', sans-serif;
}
</style>