<template>
<navbar></navbar>
<content>
    <div class="text-inner text-center bg-pink-light p-10">
        <h3 class="font-sans text-2xl text-center text-pink-dark"><strong><span>ช่องทางการติดตาม</span></strong></h3>
        <socialmedia></socialmedia> 
        <p for="email" class="text-lg leading-7 text-black font-semibold pt-3">Email Subscription</p>
        <div class="flex justify-center w-full gap-2 pt-2">
            <input type="text" id="email" v-model="email" name="email" class="bg-gray-light rounded px-4 py-2 ">
            <div class="pt-1">
                <button @click="handleSubscribe" class="w-24 h-8 rounded-full text-md text-black bg-pink-dark hover:text-white">
                    Subscribe
                </button>
            </div>
            <div class="vertical-line"></div>
            <div class="pt-1">
                <button @click="handleUnsubscribe" class="w-28 h-8 rounded-full text-md text-pink-dark bg-black hover:text-white">
                    Unsubscribe
                </button>
            </div>
            <div class="text-medium leading-7 text-black font-medium pt-2 pl-1">
                <input type="checkbox" id="delete" v-model="checkedDelete" value="delete">
                <label for="delete" class="pl-2">Delete history</label>
            </div>
        </div>

        <p v-if="invalidEmail" class="text-lg leading-7 text-red font-medium pt-3">Email is invalid!</p>
        <p v-if="subscribeSuccess" class="text-lg leading-7 text-green font-medium pt-3">Subscribe {{newSubscribedEmail}} completed! Thank you!</p>
        <p v-if="resubscribeSuccess" class="text-lg leading-7 text-green font-medium pt-3">Resubscribe {{newSubscribedEmail}} completed! Thank you!</p>
        <p v-if="subscribedEmailExisted" class="text-lg leading-7 text-red font-medium pt-3">Email already subscribed!</p>
        <p v-if="unsubscribeSuccess" class="text-lg leading-7 text-green font-medium pt-3">Unsubscribe {{newSubscribedEmail}} completed!</p>
        <p v-if="noSubscribedEmailExisted" class="text-lg leading-7 text-red font-medium pt-3">Email is not existed!</p>
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
            checkedDelete: [],
            invalidEmail: false,
            newSubscribedEmail: "",
            subscribeSuccess: false,
            resubscribeSuccess: false,
            subscribedEmailExisted: false,
            noSubscribedEmailExisted: false,
            unsubscribeSuccess: false,
        };
    },
    methods: {
        resetData() {
            this.email = "";
            this.checkedDelete = [];
            this.invalidEmail = false;
            this.newSubscribedEmail = "";
            this.subscribeSuccess = false;
            this.unsubscribeSuccess = false;
            this.resubscribeSuccess = false;
            this.subscribedEmailExisted = false;
            this.noSubscribedEmailExisted = false;
            this.unsubscribeSuccess = false;
        },
        handleSubscribe() {
            this.invalidEmail = this.email === "" ? true : false;
            if (this.invalidEmail) {
                this.resetData();
                this.invalidEmail = true;
            }
            else {
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
                console.log(error);
            }
        },
        handleUnsubscribe() {
            this.invalidEmail = this.email === "" ? true : false;
            if (!this.invalidEmail) {
                this.submitUnsubscribe({
                    "email": this.email,
                    "checkedDelete": this.checkedDelete,
                });
            }
        },
        async submitUnsubscribe(data) {
            this.resetData();
            try {
                await fetch(baseURL).then(response => {
                    return response.json();
                }).then(response => {
                    for (var i=0; i < response.length; i++) {
                        if (response[i].email == data.email) {
                            if (data.checkedDelete.length) {
                                fetch(`${baseURL}/${response[i].id}`, {
                                    method: "DELETE"
                                });
                            }
                            else {
                                fetch(`${baseURL}/${response[i].id}`, {
                                    method: "PUT",
                                    headers: {
                                        "Content-type": "application/json",
                                    },
                                    body: JSON.stringify({
                                        email: data.email,
                                        subscription: false,
                                    }),
                                });
                            } 
                            
                            this.unsubscribeSuccess = true;
                            break;
                        }
                    }
                    if (!this.unsubscribeSuccess) {
                        this.noSubscribedEmailExisted = true;
                    }
                })
            }
            catch (error) {
                console.log(error);
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

.vertical-line {
  border-left: 2px solid gray;
  height: 40px;
}
</style>