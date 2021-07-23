<template>
  <div class="portfolio">
    <main>                 
        <fps/>                 
        <exPort/>                 
        <portForm/>                 
    </main> 
  </div>
</template>

<script>
// @ is an alias to /src
import fps from '@/components/common_components/first_port_screen.vue';
import exPort from '@/components/common_components/examples_port.vue';
import portForm from '@/components/portfolio/portForm.vue';
export default {  
    components: {
        fps,     
        exPort,  
        portForm,  
    }
}
</script>


