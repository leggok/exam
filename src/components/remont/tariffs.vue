<template>
    <section class="tariffs">
        <div class="container">
            <div class="title">Линейка тарифов</div>
            <div class="wrap_cards">
                <div class="card">
                    <div class="card_info">
                        <div class="card_top">Пакет <span>“LIGHT”</span></div>
                        <div class="card_for_what">Для квартир с предчистовой и улучшенной черновой отделкой</div>
                        <div class="card_size"><span>18 000</span> тг/кв.м.</div>
                        <div class="card_rule">Ремонт "под ключ" подразумевает:</div>
                        <ul class="card_rules_list">
                            <li>
                                - Вырванивание поверхностей потолков и стен;
                            </li>
                            <li>
                                - Заливка пола "Экопол";                                
                            </li>
                            <li>
                                - Покраска стен и потолка;                                
                            </li>
                            <li>
                                - Укладка кафеля/керамогранита;                                
                            </li>
                            <li>
                                - Монтаж лепнины потолочной;
                            </li>
                            <li>
                                - Укладка ламината;                               
                            </li>
                            <li>
                                - Поклейка обоев;                               
                            </li>
                            <li>
                                - Установка и монтаж сантехнического оборудования;                                
                            </li>
                            <li>
                                - Установка дверей;                                
                            </li>
                            <li>
                                - Установка и монтаж розеток и выключателей;                                
                            </li>
                            <li>
                                - Установка и монтаж приборов освещения;                                
                            </li>
                            <li>
                                - Вывоз мусора;                                
                            </li>
                            <li>
                                - Расчет расходуемых материалов;                                
                            </li>
                            <li>
                                - Закуп/прием материалов;                                
                            </li>
                            <li>
                                - Уборка помещения
                            </li>
                        </ul>
                    </div>                                         
                    <a class="buttons submit_button" id="send_btn" @click="modal_form">Заказать тариф</a>  
                </div>
                <div class="card">
                    <div class="card_top">Пакет <span>“STANDART”</span></div>
                    <div class="card_for_what">Для квартир с предчистовой и улучшенной черновой отделкой по проекту Дизайна</div>
                    <div class="card_size"><span>22 000</span> тг/кв.м.</div>
                    <div class="card_rule">Ремонт "под ключ" все, что входит в пакет услуг "LIGHT", дополнительно:</div>
                    <ul class="card_rules_list">
                        <li>
                            - Монтаж/демонтаж электрической проводки;
                        </li>
                        <li>
                            - Монтаж/демонтаж дверных проемов;                                
                        </li>
                        <li>
                            - Монтаж гипсокартоновых конструкций;                                
                        </li>
                        <li>
                            - Монтаж молдингов и других элементов настенного лепного декора;                           
                        </li>
                        <li>                                
                            - Монтаж и установка конструктивных элементов интерьера (МДФ-панели, гипсовые панели и другое);
                        </li>
                        <li>
                            - Монтаж и установка всех видов освещения (трековые светильники, софиты, светодиодная подсветка и другое);
                        </li>
                        <li>
                            - Поклейка фотообоев;
                        </li>
                        <li>
                            -Установка и монтаж мелких деталей (ключки, зеркала, ограничители  открывания дверей и т.д.)
                        </li>                            
                    </ul>
                    <a class="buttons submit_button" id="send_btn" @click="modal_form">Заказать тариф</a>  
                </div>
                <div class="card">
                    <div class="card_top">Пакет <span>“BUSINESS”</span></div>
                    <div class="card_for_what">Для квартир/домов и коммерческих помещений с черновой отделкой по проекту Дизайна интерьера</div>
                    <div class="card_size"><span>30 000</span> тг/кв.м.</div>
                    <div class="card_rule">Ремонт "под ключ" все, что входит в пакет услуг "STANDART", дополнительно:</div>
                    <ul class="card_rules_list">
                        <li>
                            - Монтаж/демонтаж перегородок;
                        </li>
                        <li>
                            - Заливка пола бетонной стяжкой;                          
                        </li>
                        <li>
                            - Выравнивание поверхностей стен песчанной штукатуркой "под маяк";                          
                        </li>
                        <li>
                            - Монтаж всех видов настенного декора;
                        </li>
                        <li>
                            - Монтаж и установка металлических конструкций (лестницы, сцены, дополнительный этаж и другое);
                        </li>
                        <li>
                            - Монтаж и установка элементов интерьера из натурального/искусственного камня, МДФ, гипса, пластика и дерева;
                        </li>
                        <li>
                            - Клининг.
                        </li>                          
                    </ul>
                    <a class="buttons submit_button" id="send_btn" @click="modal_form">Заказать тариф</a>  
                </div>
                <div class="card">
                    <div class="card_top">Пакет <span>“VIP”</span></div>
                    <div class="card_for_what">Для  всех видов помещений с черновой отделкой совместно с нашими услугами по ведению ремонта и дизайну интерьера</div>
                    <div class="card_size"><span>45 000</span> тг/кв.м.</div>
                    <div class="card_rule">Ремонт "под ключ" все, что входит в пакет услуг   "BUSINESS" дополнительно:</div>
                    <ul class="card_rules_list">
                        <li>
                            - Разработка Эскизного Проекта дизайна интерьера с 3д-визуализацией;
                        </li>
                        <li>
                            - Разработка Рабочего Проекта, подразумевающего все чертежи и схемы;
                        </li>
                        <li>
                            - Авторский надзор дизайнера на объекте и при производстве мебели и других элементов интерьера;
                        </li>
                        <li>
                            - Подбор всех материалов, мебели, элементов декора;
                        </li>
                        <li>
                            - Надзор за исполнением сторонних исполнителей (производство мебели и другое);                                                                
                        </li>
                        <li>
                            - Технический инженерный надзор.
                        </li>                            
                    </ul>
                    <a class="buttons submit_button" id="send_btn" @click="modal_form">Заказать тариф</a>                    
                </div>
            </div>
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
    name:'tariffs',  
    data(){
        return {
            show: false,
            email: '',
            BOT_TOKEN: '1742544832:AAGLxm_DQYHy1YdzZnxIL6eLK1HGkV_W4e0',
            CHAT_ID: '-1001480500270', 
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
    /* @import url("../../assets/css/remont/tariffs.css");
    @import url("../../assets/css/common/modal.css");*/
</style>