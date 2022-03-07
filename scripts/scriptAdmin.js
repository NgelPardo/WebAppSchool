
document.getElementById("btn_open").addEventListener("click",open_close_menu);
/*document.getElementById("btn_usuarios").addEventListener("click",before_user);
document.getElementById("btn_PIAR").addEventListener("click",before_piar);*/

var side_menu = document.getElementById("menu_side");
var btn_open = document.getElementById("btn_open");
var body = document.getElementById("body");
var us = document.getElementById("btn_usuarios");
var pi = document.getElementById("btn_PIAR");

function open_close_menu(){
    body.classList.toggle("body_move");
    side_menu.classList.toggle("menu_side_move");
}

function before_user(){
    us.classList.toggle("click_option");
    us.classList.toggle("options__menu .option i");
}

function before_piar(){
    pi.classList.toggle("click_option");
}