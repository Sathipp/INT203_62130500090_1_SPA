<template>
<navbar></navbar>
<content>
    <div class="w-auto">
        <img src="../../pic/prisma-circle.png" style="position: relative;">
    </div>

    <div class="text-inner bg-pink-light p-10 pb-5 flex justify-start">
        <h3 class="text-xl text-left text-pink-dark p-3"><strong><span>เซอร์เคิลพริสม่าคืออะไร❓</span></strong></h3>
        <p class="mb-4 text-base text-left text-gray p-3"><span>
        เซอร์เคิลพริสม่าคือกลุ่มคนที่สนใจ Pop Culture ของญี่ปุ่นเเละรวมตัวกันเพื่อสร้างสรรค์ผลงานที่จะมอบความสุขให้เเก่ทุกคนค่ะ<br>
        ซึ่งผลงานหลักของเราจะเป็นการ Cover เพลงจากทางฝั่งญี่ปุ่น รวมไปถึงผลงานภาพวาดต่าง ๆ จากนักวาดของเราค่ะ<br>
        นอกจากนี้เรายังรับทำผลงานทางด้าน Music และ Music Video อีกด้วยนะคะ หากสนใจสามารถติดต่อเข้ามาได้เลยค่ะ!</span>
        </p>
        
        <h3 class="text-xl text-left text-pink-dark p-3"><strong><span>มีใครเป็นสมาชิกบ้าง❓</span></strong></h3>
        <p class="mb-4 text-base text-left text-gray p-3">
            <span>
                ในปัจจุบันเซอร์เคิลพริสม่ามีสมาชิกทั้งหมด 21 คนซึ่งจะเเบ่งเป็นหลายฝ่าย มีหน้าที่เเตกต่างกัน ไม่ว่าจะเป็น<br>
        
                ⮞ Illustrator นักวาดที่คอยสร้างสรรค์ผลงานภาพวาดที่สวยงาม<br>
                ⮞ Vocalist นักร้องที่ทำหน้าที่บรรเลงผลงานเพลงให้ผท่านผู้ชมได้รับฟัง<br>
                ⮞ Producer ผู้ที่คอยปรับแต่งเสียงเพลงให้ไพเราะและน่าฟัง<br>
                ⮞ Video Animator ผู้ที่สร้างสรรค์ผลงาน Graphic Animation ต่าง ๆ ประกอบไปกับเสียงเพลง<br>
                ⮞ และ Supporter ที่คอยสนับสนุนการทำงานโดยรวมของเซอร์เคิลครับ<br>
                <div class="pt-4 pb-4"> ซึ่งได้มีการแบ่งสมาชิกในเซอร์เคิลเป็น 6 ยูนิตด้วยกัน สามารถดูได้ตามลิงก์ด้านล่างเลยครับ</div>
            </span>
            <a href="https://www.facebook.com/PRISMAPage/photos/pcb.1134183247010588/1134178497011063/">
                <button class="bg-pink-dark hover:bg-gray text-white font-medium py-1 px-4 rounded-full">Click here!</button>
            </a>
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
img {
    object-fit: cover;
    width: 100%;
    height: 42rem; 
}
</style>