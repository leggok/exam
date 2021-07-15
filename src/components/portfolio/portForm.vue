<template>
    <section class="what_we_do port_form">
        <div class="container">                
            <div class="content">
                <img src="../../assets/img/portfolio_form.jpg" alt="wwd">
                <div class="content_with_form">
                    <div class="top_form">Всех наших клиентов объединяет то, что они думают о будущем, идут впереди тенденций и предпочитают работать с лучшим!</div>                        
                    <form class="form" action="#" method="GET" enctype="multipart/form-data" id="modal_form">
                        <input type="email" class="modal_email" name="email" id="email" placeholder="Введите ваш email" v-model="email">
                        <button type="submit" class="portbtn submit_buttonn" id="btnSubmit" @click="modal_scs">Отправить запрос</button>       
                    </form>
                </div>
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
    name:'portForm', 
    data(){
        return {
            show: false,
            email: '',
            BOT_TOKEN: '1742544832:AAGLxm_DQYHy1YdzZnxIL6eLK1HGkV_W4e0',
            CHAT_ID: '-1001480500270',            
        }
    },   
    methods:{        
         modal_scs(e){                        
            e.preventDefault(); 
            const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            if(regex.test(this.email)){                                
                let text = ' Email: ' + this.email;
                axios
                    .get('https://api.telegram.org/bot'+this.BOT_TOKEN+'/sendMessage?chat_id='+this.CHAT_ID+'&text='+text)
                    .then(()=>{                                                          
                        this.email = '';                        
                        this.show = true;
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
     /*@import url("../../assets/css/portfolio/portForm.css");
    @import url("../../assets/css/common/modal.css");*/
</style>