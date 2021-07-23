<template>
    <section class="the_end">
        <div class="container">
            <div class="the_end_left">
                <div class="the_end_left_top">Мы в соцсетях</div>
                <ul class="social_links">
                   <li v-for="soc in soc_list" :key="soc.title">
                        <a :href="soc.link" target="_blank" rel="noopener nofollow" :title="soc.title">
                            <i :class="soc.icon"></i>
                        </a>
                    </li>                          
                </ul>      
            </div>
            <div class="the_end_right">
                <div class="the_end_right_top">Позвоните нам и получите ответы на все интересующие Вас вопросы!</div>                
            </div>
        </div>
    </section>
</template>


<script>
export default {
    name:'theEnd',
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
   /* @import url("../../assets/css/contacts/theEnd.css");*/
</style>