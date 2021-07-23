<template>
    <div class="container">
        <ul class="list_of_projects">
            <li v-for="item in list_item" :key="item.id">                                        
                <img src="img/best_sol_img.daf3f928.jpg" alt="room">                                 
            </li>                    
        </ul>   
    </div>             
</template>

<script>

export default {
    name:"singleEx",    
    data(){
        return {
            list_item:9,           
        }
    },
}
</script>                                            
