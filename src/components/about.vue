<template>
<body>
<div class="bg-black"> 
    <!-- Container Layout -->
    <div id="menubar" class="container mx-auto">
        
        <!-- Box alignment -->
        <nav class="flex items-center justify-center h-20 bg-black" style="font-size: 100%;" >
            <div>
                <a href="./" title="PRISMΛ Official - プリスマ" rel="home">
                <img src="../../pic/logo.png" class="header-logo max-h-14" alt="logo=Prisma"></a>
            </div>

            <div>
                <ul class="flex flex-row pl-10 place-self-center">
                    <!-- Spacing -->
                    <!-- Typography-->
                    <li class="pr-4"><button class="font-light text-xl" style="color: #FE3A8C;"><p>ABOUT</p></button></li>
                    <li class="pr-4"><button class="font-light text-xl" style="color: #FFFFFF;"><p class="hover:text-pink-dark" >FOLLOW US</p></button></li>
                    <li class="pr-4"><button class="font-light text-xl" style="color: #FFFFFF;"><p class="hover:text-pink-dark" >CONTACT</p></button></li>
                </ul>
            </div>
        </nav>
    </div>

    <div class="w-auto">
        <img src="../../pic/prisma-circle.png" style="position: relative;">
    </div>

    <div class="text-inner text-center bg-pink-light p-10">
        <h3 class="text-2xl text-center" style="color: #FE3A8C;"><strong><span>เซอร์เคิลพริสม่าคืออะไร?</span></strong></h3>
        <p class="mb-4 text-xl text-center"><span style="color: #555555;">
        เซอร์เคิลพริสม่าคือกลุ่มคนที่สนใจ Pop Culture ของญี่ปุ่นเเละรวมตัวกันเพื่อสร้างสรรค์ผลงานที่จะมอบความสุขให้เเก่ทุกคนค่ะ<br> 
        ซึ่งผลงานหลักของเราจะเป็นการ Cover เพลงจากทางฝั่งญี่ปุ่น รวมไปถึงผลงานภาพวาดต่าง ๆ จากนักวาดของเราค่ะ<br> 
        นอกจากนี้เรายังรับทำผลงานทางด้าน Music และ Music Video อีกด้วยนะคะ หากสนใจสามารถติดต่อเข้ามาได้เลยค่ะ!</span></p>
    </div>
</div>  
</body>  
</template>

<script>
export default {
    name: 'About',
    props:{
        msg: String
    }
}
</script>

<style scoped>
@import 'https://fonts.googleapis.com/css?family=Kanit|Prompt';
body{
    font-family: 'Kanit', sans-serif;
}

h1,h2,h3{
    font-family: 'Kanit', sans-serif;
}
#menubar{
    background-color: pink-light;
}
</style>