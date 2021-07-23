<template>
    <section class="examples">
        <div class="container">
            <div class="top_txt">
                <p>Наш богатый опыт ведения контроля за отделочными работами позволил нам наладить менеджмент на высоком уровне профессионализма.</p>
                <p>С нами ремонт и отделка квартир и общественных помещений станут приятным событием. Производить все работы по ремонту и отделке будет большая высоко квалифицированная бригада здешних мастеров со стажем ремонтно-отделочных работ более 10 лет.</p>
            </div>
            <h2 class="title">Более <span>900</span> успешных проектов</h2>
            <div class="box">
                <lOP/>                          
            </div>
            <div class="buttons">
                <router-link class="link_btn" to="/portfolio">Портфолио</router-link>    
            </div>   
        </div>
    </section>
</template>


<script>
import lOP from '@/components/common_components/list_of_projects.vue';

export default {
    name:'examp', 
    components:{
        lOP
    }    
}
</script>                                            

<style>
    /*@import url("../../assets/css/common/examp.css");*/
</style>