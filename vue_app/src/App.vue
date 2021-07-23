<template>
    <div id="app">
        <siteHeader/>
        <router-view/>        
        <siteFooter/>
    </div>
</template>

<style>
    @import url('assets/css/font.min.css');
    @import url('assets/css/fontello-embedded.css');
    @import url('assets/css/hamburger.min.css');
    @import url('assets/css/style.css');    
</style>

<script>

import siteHeader from '@/components/common_components/header.vue';
import siteFooter from '@/components/common_components/footer.vue';
export default {
    components:{
        siteHeader,
        siteFooter,
    }
}
</script>