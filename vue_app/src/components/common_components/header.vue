<template>
    <header id="header">
        <div class="container">
            <img class="mml" src="../../assets/img/small_logo.png" alt="small logo">
            <div class="desktop_menu">
                <div class="head__logo">
                    <img src="../../assets/img/logo.png" class="hl" alt="logo">
                </div>
                <div class="name_of_logo">
                    <img src="../../assets/img/small_logo.png" alt="small logo">
                </div>
                <nav class="head__main_menu">
                    <ul class="head_main_menu__menu menu">
                        <li class="menu__items">
                            <router-link class="menu__items__ref" to="/">Главная</router-link>                                    
                        </li>
                        <li class="menu__items">
                            <router-link class="menu__items__ref" to="/remont">Ремонт</router-link>                                    
                        </li>
                        <li class="menu__items">
                            <router-link class="menu__items__ref" to="/portfolio">Портфолио</router-link>                                     
                        </li>
                        <li class="menu__items">
                            <router-link class="menu__items__ref" to="/about">О нас</router-link>                              
                        </li>
                        <li class="menu__items">
                            <router-link class="menu__items__ref" to="/contacts">Контакты</router-link> 
                        </li>
                    </ul>
                </nav>
                <div class="phone" itemscope itemtype="https://schema.org/Organization">
                    <svg class="wibro">
                        <use xlink:href="../../assets/img/sprite.svg#phone"></use>
                    </svg>
                    <a href="tel:87003000340" itemprop="telephone">8 (700) 300-03-40</a>
                </div>
            </div>       
            <div id="mobile_menu_block">
                <div class="mmb_top">
                    <div class="mobile_head__logo">
                        <img src="../../assets/img/logo.png" alt="logo">
                    </div>
                    <div class="phone" itemscope itemtype="https://schema.org/Organization">
                        <svg class="wibro">
                            <use xlink:href="../../assets/img/sprite.svg#phone"></use>
                        </svg>
                        <a href="tel:87003000340" itemprop="telephone">8 (700) 300-03-40</a>
                    </div>
                    <button class="hamburger hamburger--elastic" id="ham" type="button" @click='hamb'>
                        <span class="hamburger-box">
                            <span class="hamburger-inner"></span>
                        </span>
                    </button>
                </div>
                <nav class="mobile_menu">
                    <ul class="head_main_menu__menu light">
                        <li class="menu__items">
                            <router-link class="menu__items__ref" to="/">Главная</router-link>                                    
                        </li>
                        <li class="menu__items">
                            <router-link class="menu__items__ref" to="/remont">Ремонт</router-link>                                    
                        </li>
                        <li class="menu__items">
                            <router-link class="menu__items__ref" to="/portfolio" >Портфолио</router-link>                                     
                        </li>
                        <li class="menu__items">
                            <router-link class="menu__items__ref" to="/about" >О нас</router-link>                              
                        </li>
                        <li class="menu__items">
                            <router-link class="menu__items__ref" to="/contacts" >Контакты</router-link> 
                        </li>
                    </ul>
                </nav>                
            </div>            
        </div>
    </header>        
</template>

<script>

export default {
    name:'siteHeader',
    methods:{
        hamb(e){
            e.preventDefault();         
            document.querySelectorAll('.hamburger')
                    .forEach(element => element.classList.toggle('is-active'))
            document.getElementById("header").classList.toggle('open')
            /*document.getElementById('mobile_menu_block').style.left = '0px';   */
            /*document.getElementById('menu_shadow').style.display = 'block';*/       
        }
    },
    mounted(){        
        window.onscroll = function() {myFunction()};
        function myFunction() {
            if(window.pageYOffset >= 400){
                document.getElementById('header').classList.add('fixed')                   
            }else{
                document.getElementById('header').classList.remove('fixed')                   
            }
        }     
    }
}
</script>

<style>
    /*@import url("../../assets/css/hamburger.min.css");*/
    /*@import url("../../assets/css/common/header.css");    */
</style>