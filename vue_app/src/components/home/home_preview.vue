<template>
    <section class="preview ind">
        <div class="side">
            <div class="wrap">                    
                <div class="side_list">
                    <ul class="social_links">
                        <li v-for="soc in soc_list" :key="soc.title">
                            <a :href="soc.link" target="_blank" rel="noopener nofollow" :title="soc.title">
                                <i :class="soc.icon"></i>
                            </a>
                        </li>                             
                    </ul>                        
                </div>
                <div class="side_content">СТУДИЯ ДИЗАЙНА ИНТЕРЬЕРА</div>                
            </div>                
        </div>
        <div class="in_main">
            <h1 class="title">РОСКОШНЫЙ ДИЗАЙН ИНТЕРЬЕРА В НУР-СУЛТАНЕ</h1>
            <div class="sub_title">Мы создаем уникальные проекты любой сложности на высоком уровне качества!</div>        
            <a class="btn submit_button" href='#' id="send_btn" @click="modal_form">Расчет стоимости</a>        
        </div>
        <vodal :show="show" animation="rotate" @hide="show = false">                                        
            <div id="forms">
                <div class="inner_top">Напишите мне</div>      
                <div class="inner_middle">Наш менеджер напишет вам в течении 10 минут</div>    
                <form action="#" method="GET" enctype="multipart/form-data" id="modal_form">
                    <input type="email" class="modal_email" name="email" id="email" placeholder="Введите ваш email" v-model="email">
                    <button type="submit" id="btnSubmit" @click="modal_scs">Отправить запрос</button>     
                </form>                                      
            </div>
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
    name:"homePreview",
    data(){
        return {
            show: false,
            email: '',
            BOT_TOKEN: '1742544832:AAGLxm_DQYHy1YdzZnxIL6eLK1HGkV_W4e0',
            CHAT_ID: '-1001480500270',
            soc_list:[
                {
                    title:"Instagram",
                    icon:"icon-instagram",
                    link:"https://instagram.com"
                },
                {
                    title:"Vkontakte",
                    icon:"icon-vkontakte",
                    link:"https://vkontakte.com"
                },
                {
                    title:"Facebook",
                    icon:"icon-facebook",
                    link:"https://facebook.com"
                },
                {
                    title:"Pinterest",
                    icon:"icon-pinterest",
                    link:"https://pinterest.com"
                },
            ]
        }
    },   
    methods:{
        modal_form(e){
            e.preventDefault();   
            this.show = true;
            document.getElementById('forms').style.display = "block";
            document.getElementById("success").style.display = "none";                                                 
        },
        modal_scs(e){            
            e.preventDefault();
            const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            if(regex.test(this.email)){                                
                let text = ' Email: ' + this.email;
                axios
                    .get('https://api.telegram.org/bot'+this.BOT_TOKEN+'/sendMessage?chat_id='+this.CHAT_ID+'&text='+text)
                    .then(()=>{                                                          
                        this.email = '';                        
                        document.getElementById('email').classList.remove('err_form');                        
                        document.getElementById('forms').style.display = "none";
                        document.getElementById("success").style.display = "block";                        
                    })  
            }else{
                this.email = '';
                document.getElementById('email').classList.add('err_form');  
            }                                      
        }
    }
}
</script>

<style>
    /*@import url("../../assets/css/home/home_preview.css");
    @import url("../../assets/css/common/modal.css");*/
</style>