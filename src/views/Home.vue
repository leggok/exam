<template>
  <div class="home">
      <main>                 
          <homePreview/>            
          <ourProjects/>            
          <bestSolutions/>                                       
          <magazine/>                                                   
          <collectionHome/>                                                               
          <useFull/>                                                                          
          <steps/>                                                                                      
          <sponsors/>                                                                                      
    </main> 
  </div>
</template>

<script>
// @ is an alias to /src
import homePreview from '@/components/home/home_preview.vue';
import ourProjects from '@/components/home/OurProjects.vue';
import bestSolutions from '@/components/home/best_solutions.vue';
import magazine from '@/components/home/magazine.vue';
import collectionHome from '@/components/home/collection_home.vue';
import useFull from '@/components/home/use_full.vue';
import steps from '@/components/home/steps.vue';
import sponsors from '@/components/home/sponsors.vue';
export default {  
    components: {
        homePreview,
        ourProjects,
        bestSolutions,
        magazine,
        collectionHome,
        useFull,
        steps,
        sponsors,
    }
}
</script>
