<template>
  <div class="about">
    <main>                 
        <firstScreen/>            
        <tenYears/>            
        <accordeon/>            
        <whatWeDo/>            
    </main> 
  </div>
</template>

<script>
// @ is an alias to /src
import firstScreen from '@/components/common_components/first_screen.vue';
import tenYears from '@/components/about/ten_years.vue';
import accordeon from '@/components/about/accordeon.vue';
import whatWeDo from '@/components/about/what_we_do.vue';
export default {  
    components: {
        firstScreen,           
        tenYears,           
        accordeon,           
        whatWeDo,           
    }
}
</script>
