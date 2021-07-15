<template>
  <div class="contacts">
        <main>                 
            <fsc/>                                                                                                   
            <feedback/>                                                                                                   
            <forSponsors/>                                                                                                   
            <theEnd/>                                                                                                   
    </main> 
  </div>
</template>

<script>
// @ is an alias to /src
import fsc from '@/components/common_components/fs_contacts.vue';
import feedback from '@/components/contacts/feedback.vue';
import forSponsors from '@/components/contacts/for_sponsors.vue';
import theEnd from '@/components/contacts/theEnd.vue';
export default {  
    components: {
        fsc,
        feedback,
        forSponsors,
        theEnd,
    }
}
</script>
