<template>
<navbar></navbar>
<content>
    <h3 class="text-2xl text-center text-pink-dark pt-10"><strong><span>ช่องทางการติดต่อ</span></strong></h3>
    <div class="text-inner text-center bg-pink-light p-80 pt-5">
        <div class="container mx-auto bg-white text-inner text-left p-14 pb-6">
            <h3 class="font-bold text-pink-dark">Frequently Asked Questions</h3> 
            
            <h3 class="font-bold">■ Usage on website</h3>
            You can freely use contents as long as it is personal propose only. Feel free to modify the lyrics. <br>However, it does not mean that it is officially recognized by PRISMA.

            <h3 class="font-bold">■ Usage on live</h3>
            License is required to grant right in performancing on live stage. <br>There is no prohibition as long as it is within the bounds of common sense.

            <h3 class="font-bold">■ Usage in event</h3>
            Feel free to use characterfor cosplay. There is no prohibition in making videos or images. <br>Please follow the official terms of use for characters created by PRISMA, such as Vocaloid.
        </div>  
        <div class="container mx-auto bg-white text-inner text-left p-14 pt-6"> 
            <h3 class="font-bold text-pink-dark">Inquiry by Email</h3> 
            For inquiry by email, please press following button.    
            <p><a href="mailto:prismacircle.official@gmail.com">
                <button class="bg-pink-dark hover:bg-gray text-white font-medium py-1 px-4 rounded-full">SEND MAIL&nbsp;&nbsp;&nbsp;❯</button>
            </a></p>
            or send us email to <div class="font-bold">prismacircle.official@gmail.com</div>

            <div class="pt-5">
                *Please note that it may take some time to reply to the email you sent. We may not be able to reply in some case.<br>
                *Please also refer to the above "Frequently Asked Questions" before making an inquiry.
            </div>
        </div>  
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