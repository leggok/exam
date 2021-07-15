<template>
    <section class="best_solution">
        <div class="container">
            <div class="title">
                Лучшие решения, актуальный дизайн, непревзойденное качество — все это о нашей студии
            </div>
            <div class="box">
                <div class="left">
                    <img src="../../assets/img/best_sol_img.jpg" alt="best_solution">                    
                </div>
                <div class="right">
                    <div class="text">
                        <p>С 2011 года было нами было разработано уже множество успешных проектов. Мы проектируем подробные проекты дизайна интерьеров помещений любой сложности и не боимся сложных задач. Дизайн-проект может включать в себя перепланировку, рабочие чертежи, 3D-визуализацию, а также дополнителнительные услуги: авторский надзор, подбор материалов, смету и другое на Ваше личное усмотрение. </p>
                        <p>Мы работаем с помещениями любого типа и назначения: квартиры, коттедж, загородный дом, кафе или ресторан, офис, гостиница или бизнес-центр, бутик и многое другое.</p>
                        <p>Мы не упустим ни один квадратный сантиметр, учтем все Ваши пожелания, добавим свои свежие идеи, познакомим с секретами интерьерных решений, скоординируем в ремонте и поможем создать в Вашем помещении утонченную роскошь!</p>
                    </div>
                    <div class="reasons">
                        <div class="years">
                            <div class="rotate">Более</div>
                            <div class="num">10</div>
                            <div class="txt">лет на рынке</div>
                        </div>
                        <div class="proj">
                            <div class="rotate">Более</div>
                            <div class="num">200</div>
                            <div class="txt">успешных проектов</div>
                        </div>
                        <div class="comm">
                            <div class="rotate">Более</div>
                            <div class="num">300</div>
                            <div class="txt">положительных отзывов</div>
                        </div>
                    </div>
                    <div class="podp">
                        <div class="we_create">Мы создаем прекрасное!</div>                        
                        <img src="../../assets/img/podpis.png" alt="asd">                        
                    </div>
                </div>
            </div>
            <div class="buttons">
                <router-link class="link_btn short" to="/about">О нас</router-link>    
                <router-link class="link_btn long" to="/contacts">Контакты</router-link>                 
            </div>    
        </div>
    </section>
</template>

<script>
/*import VueLazyload from 'vue-lazyload'
Vue.use(VueLazyload)*/

export default {
    name:"bestSolutions",    
}
</script>

<style>
    /*@import url("../../assets/css/home/best_solutions.css");*/
</style>