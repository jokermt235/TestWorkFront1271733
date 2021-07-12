<template>
    <div class="tile is-ancestor mt-5">
        <div class="tile is-parent">
        </div>
        <div class="tile is-parent">
            <form  v-on:submit.prevent class="loginForm tile is-child box">
                <div class="mt-2 mb-2 d-flex">
                    <h5 class="title">Войти в панель</h5>
                </div>
                <b-field grouped class="mt-3" >
                    <b-field label="E-mail" expanded>
                        <b-input placeholder="Имя пользователя" v-model="email" expanded></b-input>
                    </b-field> 
                </b-field>
                <b-field grouped class="mt-3">
                    <b-field label="Пароль"  expanded>
                        <b-input placeholder="Пароль" type="password" v-model="password" expanded></b-input>
                    </b-field>
                </b-field>
                <b-button type="is-success" @click="login()" expanded>Отправить</b-button>
            </form>
        </div>
        <div class="tile is-parent">
        </div>
    </div>
</template>
<script>
const CustomFirebase = require('@/scripts/custom-firebase.js');
export default{
    data(){
        return {
            email : "",
            password : "",
            code : "+996",
            phone : ""
        };
    },
    mounted(){
    },
    methods:{
        login(){
            let email = this.email;
            let password = this.password;
            CustomFirebase.default.auth().signInWithEmailAndPassword(email, password)
            .then(user => {
                if(user){
                    this.$router.push("home");
                }
            })
            .catch(error => {
                console.log(error); 
            });
        }
    }
}
</script>
<style scoped>
    .phoneNumber{
        height: calc(1.5em + .75rem + 10px);
        border-radius:0px;
    }
    .loginForm{
        padding:55px 55px 55px;
        background:#005f1126;
    }
    .loginButton{
        margin-top:10px;
        background:#01C187;
        width:100%;
        border:none;
        border-radius:0px;
        color:white;
        padding:10px 10px;
    }
    .loginButton:focus{
        outline:none;
    }
    .mt-5{
        margin-top:5em;
    }
    .mt-3{
        margin-top:3em;
    }
</style>
