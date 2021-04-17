
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
                    <li class="pr-4"><button class="font-medium" style="color: #FFFFFF; font-size: 16px;"><p class="hover:text-pink-dark" >ABOUT</p></button></li>
                    <li class="pr-4"><button class="font-medium" style="color: #FFFFFF; font-size: 16px;"><p class="hover:text-pink-dark" >FOLLOW US</p></button></li>
                    <li class="pr-4"><button class="font-medium" style="color: #FFFFFF; font-size: 16px;"><p class="hover:text-pink-dark" >CONTACT</p></button></li>
                </ul>
            </div>
        </nav>
    </div>

    <div class="w-auto">
        <img src="../../pic/storyteller.png" style="position: relative;">
    </div>

    <div class="text-inner text-center bg-pink-light p-10">
        <h3 class="font-sans text-3xl text-center" style="color: #FE3A8C;"><strong><span>Welcome to PRISMΛ Official Website</span></strong></h3>
        <p class="font-sans mb-4 text-xl text-center"><span style="color: #FE3A8C;">We create band, cover, remix, and original song!</span></p>
    </div>
</div>
</template>

<script>
export default {
    name: 'Home',
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