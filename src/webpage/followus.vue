<template>
<navbar></navbar>
<content>
    <div class="text-inner text-center bg-pink-light p-10">
        <h3 class="font-sans text-2xl text-center text-pink-dark"><strong><span>ช่องทางการติดตาม</span></strong></h3>
        <socialmedia></socialmedia>
        <form @submit="checkForm">
            <p for="email" class="text-lg leading-7 text-black font-semibold pr-52 pt-3">Email Subscription</p>
            <div class="flex justify-center w-full gap-2 pt-2">
                <input type="text" id="email" v-model="email" name="email" class="bg-gray-light rounded px-4 py-2 ">
                <div class="pt-1">
                    <button class="w-24 h-8 rounded-full text-md text-black bg-pink-dark hover:text-white">
                        Subscribe
                    </button>
                </div>
                <div class="pt-1">
                    <button class="w-28 h-8 rounded-full text-md text-pink-dark bg-black hover:text-white">
                        Unsubscribe
                    </button>
                </div>
            </div>
        </form>    
    </div>     
</content>   
</template>

<script>
import socialmedia from "../components/socialmedia.vue";

export default {
 components: {
    socialmedia
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