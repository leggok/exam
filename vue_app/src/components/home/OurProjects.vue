<template>
    <section class="our_projects">
        <div class="container">
            <h2 class="title">Наши проекты</h2>
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
    name:"ourProjects",  
    components:{
        lOP
    }  
}
</script>

<style>
    /*@import url("../../assets/css/home/ourProjects.css");*/
</style>