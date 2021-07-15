<template>
    <ul class="list_of_projects">
        <li v-for="item in list_item" :key="item.id">                                        
            <router-link to="/single">
                <img v-bind:src="item.img" alt="room">
            </router-link>  
            <router-link class="single_link" to="/single">
                <div class="description">
                    <div class="name_of_room">{{ item.m_name }}</div>
                    <div class="descr">{{ item.decr }}</div>
                </div>     
            </router-link>                      
        </li>                             
    </ul>            
</template>

<script>
import axios from 'axios';


export default {
    name:"lOP",    
    data(){
        return {
            list_item:[],           
        }
    },
    mounted(){
        axios
            .get('./examples.json')
            .then((resp)=>{
                this.list_item = resp.data;                                                      
            })
    }    
}
</script>                                            

<style>
   /* @import url("../../assets/css/common/examp.css");*/
    .single_link{
        color: #fff;
    }
    .single_link:hover{
        text-decoration: underline;
    }
</style>