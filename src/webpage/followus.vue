<template>
<navbar></navbar>
<content>
    <div class="text-inner text-center bg-pink-light p-10">
        <h3 class="font-sans text-2xl text-center text-pink-dark"><strong><span>ช่องทางการติดตาม</span></strong></h3>
        <p for="email" class="text-lg leading-7 text-black font-semibold pr-52 pt-3">Email Subscription</p>
        <div class="flex justify-center w-full gap-2 pt-2">
            <input type="text" id="email" v-model="email" name="email" class="bg-gray-light rounded px-4 py-2 ">
            <div class="pt-1">
                <button @click="handleSubscribe" class="w-24 h-8 rounded-full text-md text-black bg-pink-dark hover:text-white">
                    Subscribe
                </button>
            </div>
            <div class="pt-1">
                <button @click="handleUnsubscribe" class="w-28 h-8 rounded-full text-md text-pink-dark bg-black hover:text-white">
                    Unsubscribe
                </button>
            </div>
        </div>
        <p v-if="invalidEmail" class="text-lg leading-7 text-black font-semibold pr-52 pt-3">Email is invalid!</p>
        <p v-if="subscribeSuccess" class="text-lg leading-7 text-black font-semibold pr-52 pt-3">Subscribe {{newSubscribedEmail}} completed! Thank you!</p>
        <p v-if="resubscribeSuccess" class="text-lg leading-7 text-black font-semibold pr-52 pt-3">Resubscribe {{newSubscribedEmail}} completed! Thank you!</p>
        <p v-if="subscribedEmailExisted" class="text-lg leading-7 text-black font-semibold pr-52 pt-3">Email already subscribed!</p>
        <socialmedia></socialmedia> 
    </div>     
</content>   
</template>

<script>
import socialmedia from "../components/socialmedia.vue";

const baseURL = "http://localhost:3000/subscription"

export default {
    components: {
        socialmedia
    },
    data() {
        return {
            email: "",
            invalidEmail: false,
            newSubscribedEmail: "",
            subscribeSuccess: false,
            resubscribeSuccess: false,
            subscribedEmailExisted: false,
        };
    },
    methods: {
        resetData() {
            this.email = "";
            this.invalidEmail = false;
            this.newSubscribedEmail = "";
            this.subscribeSuccess = false;
            this.resubscribeSuccess = false;
            this.subscribedEmailExisted = false;
        },
        handleSubscribe() {
            this.invalidEmail = this.email === "" ? true : false;
            if (!this.invalidEmail) {
                this.submitSubscribe({
                    "email": this.email,
                });
            }
        },
        async submitSubscribe(data) {
            this.resetData();
            try {
                await fetch(baseURL).then(response => {
                    return response.json();
                }).then(response => {
                    for (var i=0; i < response.length; i++) {
                        if (response[i].subscription && response[i].email == data.email) {
                            this.subscribedEmailExisted = true;
                            break;
                        }
                        else if (!response[i].subscription && response[i].email == data.email) {
                            fetch(`${baseURL}/${response[i].id}`, {
                                method: "PUT",
                                headers: {
                                    "Content-type": "application/json",
                                },
                                body: JSON.stringify({
                                    email: data.email,
                                    subscription: true,
                                }),
                            });
                            this.newSubscribedEmail = data.email;
                            this.resubscribeSuccess = true;
                            break;
                        }
                    }
                })
                if(!this.subscribedEmailExisted && !this.resubscribeSuccess) {
                    await fetch(baseURL, {
                        method: "POST",
                        headers: {
                            "content-type": "application/json",
                        },
                        body: JSON.stringify({
                            email: data.email,
                            subscription: true,
                        }),
                    });
                    this.newSubscribedEmail = data.email;
                    this.subscribeSuccess = true;
                }
            }
            catch (error) {
                console.log(`Error: Cannot submit subscribe - ${error}`);
            }
        },
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