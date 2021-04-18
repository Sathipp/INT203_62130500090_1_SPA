<template>
<div class="w-auto">
    <div class="flex items-start justify-evenly">
        <!-- YouTube -->
        <div class="pt-4 pb-4">
            <div class="flex items-center justify-center">
                <div>
                    <img src="../../pic/youtube-icon.png" class="w-12 h-auto" style="display: inline;">
                </div>
                <div>
                    <p class="text-2xl">YouTube</p>
                </div>
            </div>
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
            <div class="flex items-center justify-center">
                <div>
                    <img src="../../pic/twitter-icon.png" class="w-12 h-auto" style="display: inline;">
                </div>
                <div>
                    <p class="text-2xl">Twitter</p>
                </div>
            </div>
            <div style="width:420px; height:810px;">
            <a class="twitter-timeline" data-width="420" data-height="810" data-theme="light" href="https://twitter.com/PRISMA_Circle?ref_src=twsrc%5Etfw">Loading Twitter PRISMA</a>
            </div>
        </div>
        <!-- Facebook -->
        <div class="pt-4 pb-4">
            <div class="flex items-center justify-center">
                <div>
                    <img src="../../pic/fb-icon.png" class="w-12 h-auto" style="display: inline;">
                </div>
                <div>
                    <p class="text-2xl">Facebook</p>
                </div>
            </div>
            <div class="fb-page" data-href="https://www.facebook.com/PRISMAPage" data-tabs="timeline,message" data-width="420" data-height="810" data-small-header="false" data-adapt-container-width="false" data-hide-cover="false" data-show-facepile="false"><blockquote cite="https://www.facebook.com/PRISMAPage" class="fb-xfbml-parse-ignore"><a href="https://www.facebook.com/PRISMAPage">Loading Facebook PRISMA</a></blockquote></div>
        </div>
    </div>
</div>  
</template>

<script>

export default {
    mounted() {
        if (!process.server && !window.jQuery) {
            const scriptFacebook = document.createElement("script");
            scriptFacebook.onload = this.onScriptLoaded;
            scriptFacebook.type = "text/javascript";
            scriptFacebook.async = true;
            scriptFacebook.defer = true;
            scriptFacebook.crossorigin = "anonymous";
            scriptFacebook.src = "https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v10.0";
            scriptFacebook.nonce = "2DgWytFU";
            document.head.appendChild(scriptFacebook);
            
            const scriptTwitter = document.createElement("script");
            scriptTwitter.onload = this.onScriptLoaded;
            scriptTwitter.type = "text/javascript";
            scriptTwitter.src = "https://platform.twitter.com/widgets.js";
            scriptTwitter.charset = "utf-8";
            document.head.appendChild(scriptTwitter);
        } 
        else {
            this.onScriptLoaded();
        }
    },
    name: 'slidepic',
    props:{
        msg: String
    }
}
</script>