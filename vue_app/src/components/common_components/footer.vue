<template>
    <footer>
        <div class="container">
            <div class="footer_top">
                <div class="first_col">
                    <div class="phone">
                        <div class="phone_title">Наш телефон</div>
                        <ul class="phone_list">
                            <li><a href="tel:87003000340">8 (700) 300-03-40</a></li>
                            <li><a href="tel:87788000340">8 (778) 800-03-40</a></li>
                        </ul>
                    </div>
                    <div class="socials">
                        <div class="socials_title">Присоединяйтесь</div>
                        <ul class="social_links">
                            <li v-for="soc in soc_list" :key="soc.title">
                                <a :href="soc.link" target="_blank" rel="noopener nofollow" :title="soc.title">
                                    <i :class="soc.icon"></i>
                                </a>
                            </li>                                               
                        </ul>      
                    </div>
                </div>
                <div class="second_col">
                    <div class="address">
                        <div class="address_title" itemprop="address" itemscope itemtype="https://schema.org/PostalAddress">Наш адрес</div>
                        <div class="address_txt" itemprop="streetAddress">Республика Казахстан,010000, г. Нур-Султан, ул. Достык 13</div>                        
                    </div>
                    <div class="email">
                        <div class="email_title">Написать на почту</div>
                        <a href="mailto: dh.studio.kz@gmail.com" itemprop="email">dh.studio.kz@gmail.com</a>
                    </div>
                </div>
                <div class="third_col">                    
                    <div class="the_end_right_bottom">С глубоким уважением, Ваша студия интерьерного дизайна DELUXE HOUSE</div>
                </div>
            </div>
        </div>                        
        <div class="footer_bottom">
            <div class="footer_left">Все права защищены.<br>© 2021 <a href="#">Политика конфидициальности</a></div>
            <div class="footer_right">Сайт разработан специально<br>от <a href="#">mywebstudio.kz</a></div>
        </div>
    </footer>
</template>

<script>
export default {
    name:'siteFooter',
    data(){
        return {
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
    }
}
</script>                                            

<style>
    /*@import url("../../assets/css/common/footer.css");    */
    .third_col{
        padding-top: 50px;
    }
</style>