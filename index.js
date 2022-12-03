const navtoggle= document.querySelector(".nav-toggle")
const navMenu=document.querySelector(".nav-menu");

navToggle.addEventlistener("click",()=>{
    navMenu.ClassList.toggle("nav-menu_vsible")
});
if (navMenu.classList.contains("nav-menu_visible")){
    navToggle.setAttribute("aria-label","Cerrar menu");
}else{
    navToggle.setAttribute("aria-label","Abrir menu");
}

