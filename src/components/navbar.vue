<template>
<div class="bg-black">      
        <!-- Box alignment -->
        <nav class="flex items-center justify-center h-20">
            <div>
                <router-link to="/">
                    <img src="../../pic/logo.png" class="header-logo max-h-14" title="PRISMΛ Official - プリスマ">
                </router-link>
            </div>
            <div>
                <ul class="flex flex-row pl-10 place-self-center">
                    <!-- Spacing -->
                    <!-- Typography-->
                    <li class="pr-4">
                        <button class="font-normal text-lg text-white">
                            <router-link to="/about">
                                 <p class="hover:text-pink-dark" >ABOUT</p>
                            </router-link> 
                        </button>
                    </li>
                    <li class="pr-4">
                        <button class="font-normal text-lg text-white">
                            <router-link to="/follow-us">
                                <p class="hover:text-pink-dark" >FOLLOW US</p>
                            </router-link> 
                        </button>
                    </li>
                    <li class="pr-4">
                        <button class="font-normal text-lg text-white">
                            <router-link to="/contact">
                                <p class="hover:text-pink-dark" >CONTACT</p>
                            </router-link>
                        </button>
                    </li>
                </ul>
            </div>
        </nav>
    </div>     
</template>

<script>
export default {
    name: 'navbar',
    props:{
        msg: String
    }
}
</script>

<style scoped>
@import 'https://fonts.googleapis.com/css?family=Kanit';
h1,h2,h3{
    font-family: 'Kanit', sans-serif;
}
.router-link-active {
    color: #FE3A8C;
}

</style>