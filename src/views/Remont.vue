<template>
  <div class="remont">
    <main>                 
        <firstScreen/>            
        <examp/>                                                                                                      
        <pay/>                                                                                                      
        <deadlines/>                                                                                                      
        <tariffs/>                                                                                                      
        <howWeWork/>        
        <notes/>
    </main> 
  </div>
</template>

<script>
// @ is an alias to /src
import firstScreen from '@/components/common_components/first_screen.vue';
import examp from '@/components/common_components/examp.vue';
import pay from '@/components/remont/pay.vue';
import deadlines from '@/components/remont/deadlines.vue';
import tariffs from '@/components/remont/tariffs.vue';
import howWeWork from '@/components/remont/how_we_work.vue';
import notes from '@/components/remont/notes.vue';
export default {  
    components: {
        firstScreen,
        examp,
        pay,          
        deadlines,          
        tariffs,          
        howWeWork,                        
        notes,          
    }
}
</script>
