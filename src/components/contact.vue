<template>
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
                    <li class="pr-4"><button class="font-medium" style="color: #FFFFFF; font-size: 16px;"><p class="hover:text-pink-dark">ABOUT</p></button></li>
                    <li class="pr-4"><button class="font-medium" style="color: #FFFFFF; font-size: 16px;"><p class="hover:text-pink-dark">FOLLOW US</p></button></li>
                    <li class="pr-4"><button class="font-medium" style="color: #FE3A8C; font-size: 16px;"><p>CONTACT</p></button></li>
                </ul>
            </div>
        </nav>
    </div>
</div>
<div class="text-inner text-center bg-pink-light p-10">
    <h3 class="font-sans text-3xl text-center" style="color: #FE3A8C;"><strong><span>ช่องทางการติดต่อ</span></strong></h3>
</div>    
</template>

<script>
export default {
    name: 'Contact',
    props:{
        msg: String
    }
}
</script>

<style scoped>
#menubar{
    background-color: pink-light;
}
</style>