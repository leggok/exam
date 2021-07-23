<template>
  <div class="portfolio">
    <main>                 
        <fss/>                                        
        <singleEx/>                                        
    </main> 
  </div>
</template>

<script>
// @ is an alias to /src
import fss from '@/components/single/fss.vue';
import singleEx from '@/components/single/single_ex.vue';

export default {  
    components: {
        fss,             
        singleEx,             
    }
}
</script>


