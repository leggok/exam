<template>
    <div class="container">
        <ul class="list_of_projects">
            <li v-for="item in list_item" :key="item.id">                                        
                <img src="http://localhost:8080/img/examp_4.6b8ebc52.jpg" alt="room">                                 
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

<style>
   /* @import url("../../assets/css/common/examp.css");*/
</style>