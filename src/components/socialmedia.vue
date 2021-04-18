<template>
<div class="w-auto">
    <div class="flex items-start justify-evenly">
        <!-- YouTube -->
        <div class="pt-4 pb-4">
            <p class="text-2xl"><img src="../../pic/youtube-icon.png" class="w-12 h-auto" style="display: inline;">YouTube</p>
            <iframe 
                id="ytplayer1" type="text/html" width="420" height="270" 
                src="https://www.youtube.com/embed/?listType=playlist&list=PLzsf1jzoponfbzVmaxkayGJWtcVQhv64U" 
                frameborder="0" allowfullscreen>
            </iframe>
            <iframe 
                id="ytplayer2" type="text/html" width="420" height="270"
                src="https://www.youtube.com/embed/?listType=playlist&list=PLzsf1jzopond7HUmItPL3G7zVsoXiM-dx"
                frameborder="0" allowfullscreen>
            </iframe>
            <iframe
                id="ytplayer3" type="text/html" width="420" height="270"
                src="https://www.youtube.com/embed/?listType=playlist&list=PLzsf1jzopondo6Xj-_kM4WdA5BKmhJNNm"
                frameborder="0" allowfullscreen>
            </iframe>
        </div>
        <!-- Twitter -->
        <div class="pt-4 pb-4">
            <p class="text-2xl"><img src="../../pic/twitter-icon.png" class="w-12 h-auto" style="display: inline;">Twitter</p>
            <a class="twitter-timeline" data-width="420" data-height="810" data-theme="light" href="https://twitter.com/PRISMA_Circle?ref_src=twsrc%5Etfw">Tweets by PRISMA_Circle</a>
        </div>
        <!-- Facebook -->
        <div class="pt-4 pb-4">
            <p class="text-2xl"><img src="../../pic/fb-icon.png" class="w-12 h-auto" style="display: inline;">Facebook</p>
            <div class="fb-page" data-href="https://www.facebook.com/PRISMAPage" data-tabs="timeline,message" data-width="420" data-height="810" data-small-header="false" data-adapt-container-width="false" data-hide-cover="false" data-show-facepile="false"><blockquote cite="https://www.facebook.com/PRISMAPage" class="fb-xfbml-parse-ignore"><a href="https://www.facebook.com/PRISMAPage">PRISMΛ_Official</a></blockquote></div>
        </div>
    </div>
</div>  
</template>

<script>
export default {
    name: 'slidepic',
    props:{
        msg: String
    }
}
</script>