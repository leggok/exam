<template>
     <section class="feedback">
        <div class="container">
            <div class="input raleway-light">
                <form id="form_contact" @submit="sendMessage">
                    <input class="inner" type="text" name="user_name" id="user_name" data-required placeholder="Ваше имя" v-model="user_name">
                    <input class="inner" type="text" name="user_email" id="user_email" data-required placeholder="Ваш email" v-model="user_email">                    
                    <textarea class="inner textarea" name="msg" id="msg" placeholder="Ваш коментарий" v-model="msg"></textarea>
                    <button class="btn" type="submit">Отправить</button>
                </form>
            </div>
        </div>
        <vodal :show="show" animation="rotate" @hide="show = false">                                                                
            <div id="success">
                <div class="inner_top">Спасибо что оставили заявку!</div>
                <div class="inner_middle">А пока вы ждете письмо, можете просмотреть наши <router-link class="modal_link" to="/portfolio">лучшие проекты!</router-link></div>
                <div class="inner_bottom">Мы Cоздаем Прекрасное!</div>
            </div>    
        </vodal>
    </section>
</template>



<script>
import axios from 'axios';
import Vue from 'vue';
import Vodal from 'vodal';

import "vodal/common.css";
import "vodal/rotate.css";

Vue.component(Vodal.name, Vodal);

export default {
    name:'feedback',    
    data(){
        return{
            show: false,
            user_name:'',
            user_email:'',                   
            msg:'',
            BOT_TOKEN: '1742544832:AAGLxm_DQYHy1YdzZnxIL6eLK1HGkV_W4e0',
            CHAT_ID: '-1001480500270',
        }
    },
    methods:{
        sendMessage(e){
            e.preventDefault();
            let valid = true;          
            if((this.user_name === "")||(this.user_email === "")){
                valid = false;                         
                document.querySelectorAll('.inner')
                    .forEach(element => element.classList.add('err_form'))
            }   
            const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;                                   
            if(valid && regex.test(this.user_email)){              
                let text = 'Name: '+this.user_name + '\r' + ' Email: '+this.user_email + '\r' + ' Message: '+ this.msg;
                axios
                    .get('https://api.telegram.org/bot'+this.BOT_TOKEN+'/sendMessage?chat_id='+this.CHAT_ID+'&text='+text)
                    .then(()=>{                                  
                        this.user_name = '';
                        this.user_email = '';                        
                        this.msg = '';
                        this.show = true;                        
                        document.getElementById("success").style.display = "block"; 
                        document.querySelectorAll('.inner')
                            .forEach(element => element.classList.remove('err_form'))
                    })  
            }else{
                this.user_name = '';
                this.user_email = '';                        
                this.msg = '';
                document.querySelectorAll('.inner')
                    .forEach(element => element.classList.add('err_form'))
            }            
        }
    }
}
</script>                                            



<style>
    /*@import url("../../assets/css/contacts/feedback.css");*/
    /*@import url("../../assets/css/common/modal.css");*/
    #form_contact {
        grid-template-columns: repeat(auto-fit, minmax(381px, 1fr));
    }
    #form_contact .btn {
        grid-column-start: 1;
        grid-column-end: 3;
    }
</style>