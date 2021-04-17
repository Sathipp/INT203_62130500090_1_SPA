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
                    <li class="pr-4"><button class="font-light text-xl" style="color: #FFFFFF;"><p class="hover:text-pink-dark">ABOUT</p></button></li>
                    <li class="pr-4"><button class="font-light text-xl" style="color: #FE3A8C;"><p>FOLLOW US</p></button></li>
                    <li class="pr-4"><button class="font-light text-xl" style="color: #FFFFFF;"><p class="hover:text-pink-dark" >CONTACT</p></button></li>
                </ul>
            </div>
        </nav>
    </div>

    <div class="text-inner text-center bg-pink-light p-10">
        <h3 class="font-sans text-2xl text-center" style="color: #FE3A8C;"><strong><span>ช่องทางการติดตาม</span></strong></h3>

        <form @submit="checkForm">
            <p for="email" class="text-md leading-7 text-black font-semibold">Email Subscription</p>
                <div class="flex justify-center w-full gap-2">
                        <input type="text" id="email" v-model="email" name="email" class="bg-gray-300 rounded px-4 py-2 ">
                        <div class="pt-2">
                            <button class="w-24 h-auto rounded-full text-base text-black bg-pink-dark hover:text-white">
                                Subscribe
                            </button>
                        </div>
                        <div class="pt-2">
                            <button class="w-28 h-auto rounded-full text-base text-pink-dark bg-black hover:text-white">
                                Unsubscribe
                            </button>
                        </div>
                </div>
        </form>    
    </div>
</div>     
</body>   
</template>

<script>
export default {
    name: 'FollowUs',
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