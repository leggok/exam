$(function(){
    $("#phone, #user_phone, #phone_portfolio").mask('+7 (099) 999 99 99?9');             
});
$(function(){
    $(".tabs_list a").on("click",function(e){
    e.preventDefault();
    if($(this).hasClass("active")===false){
        $(".tabs_list a.active").removeClass("active");
        $(this).addClass("active");
        $(".tab").removeClass("active");
        $($(this).attr("href")+"_tab").addClass("active");
    }
    }); 
});
let map;
function initMap(){
    map = L.map('map').setView([51.12704419667193, 71.43465965249665], 14);
    L.tileLayer('https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    L.marker([51.12704419667193, 71.43465965249665]).addTo(map);
}

map_link.addEventListener('click', function(){
    let link = document.createElement("link");
    link.setAttribute("rel", "stylesheet");
    link.setAttribute("href", "assets/plugins/leaflet/leaflet.css");
    document.head.append(link);
    let script = document.createElement("script");
    script.setAttribute("src", "assets/plugins/leaflet/leaflet.js");
    document.body.append(script);
    script.onload = initMap;
    
    map_link.remove();
    map_pic.remove();
});
$(".submit_button").click(function(e){
    e.preventDefault();    
    $('#my_modal').addClass("open");
    $('#modal_form').addClass("open");
    let current = $(window).scrollTop();
    $(window).scroll(function() {
        $(window).scrollTop(current);
    });        
});
$("#btnSubmit").click(function(e){
    e.preventDefault();  
    check(phone.value);
});       
$(".submit_buttonn").click(function(e){
    e.preventDefault();
    check(phone_portfolio.value);
    $('#my_modal').addClass("open");
    $('#modal_success').addClass("open");
    let current = $(window).scrollTop();
    $(window).scroll(function() {
        $(window).scrollTop(current);
    });        
});

$(".close").click(function(){
    $(window).off('scroll');
    $("#my_modal").removeClass("open");
    $('#modal_success').removeClass("open_scs");
    $('body').removeClass("modal-open");
});

function check(val){    
    if(this.val !== ''){   
        sendsMessage(val);        
        $('#my_modal').addClass("open");
        $('#modal_success').addClass("open");                             
    }else{            
        $("#phone, #phone_portfolio").addClass("err");                      
    }        
    

    $("input, textarea").on('focus', function(){
        if($("#phone, #phone_portfolio").hasClass("err")){
            $("#phone, #phone_portfolio").removeClass("err")            
        }
    });
};

$(function(){
    $('#form_contact').on('submit', function(e){
        e.preventDefault();
        sendMessage($(this));
    });
    $("input, textarea").on('focus', function(){
        if($("input").hasClass("err_form")){
            $("input").removeClass("err_form")            
        }
    });
    $("input[name='email']").on("keyup", function(){
        if(!isValidEmail($(this).val())){
            $("input").addClass("err_form");              
        }else{
            if(!isValidEmail($(this).val())){
                $("input").addClass("err_form");                  
            }else{
                $("input").removeClass("err_form")               
            }
        }
    })
});
function isValidEmail(email){
    const regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(email);
}
function sendMessage($form){
    let valid = true;
    $form.find('*[data-required]').each(function(){
        if($(this).val()===""){
            valid = false;
            $("input").addClass("err_form");              
        }else{
            if($(this).attr('name')==='email'){
                if(!isValidEmail($(this).val())){
                    valid = false;
                    $("input").addClass("err_form");                     
                }
            }
        }
    });
    if(valid){
        const BOT_TOKEN = '1742544832:AAGLxm_DQYHy1YdzZnxIL6eLK1HGkV_W4e0';
        const CHAT_ID = '-1001480500270';
        const text = 'Name: '+user_name.value + '\r' + ' Email: '+user_email.value + '\r' + ' Phone: ' + user_phone.value + '\r' + ' Message: '+ msg.value;
        axios
            .get('https://api.telegram.org/bot'+BOT_TOKEN+'/sendMessage?chat_id='+CHAT_ID+'&text='+text)
            .then((resp)=>{                                  
                $('#form_contact').trigger("reset");               
                $('#my_modal').addClass("open");
                $('#modal_success').addClass("open");                                     
            })  
    }   
    let current = $(window).scrollTop();
    $(window).scroll(function() {
        $(window).scrollTop(current);
    });        
}

/*Send*/
function sendsMessage(phone){
    let valid = true;    
    if(valid){        
        const BOT_TOKEN = '1742544832:AAGLxm_DQYHy1YdzZnxIL6eLK1HGkV_W4e0';
        const CHAT_ID = '-1001480500270';
        const text = 'Phone: '+ phone;
        axios
            .get('https://api.telegram.org/bot'+BOT_TOKEN+'/sendMessage?chat_id='+CHAT_ID+'&text='+text)
            .then((resp)=>{                                                  
                $("#modal_form").removeClass("open");
                $('#modal_success').addClass("open_scs");
                $('form').trigger("reset"); 
            })  
    }
}