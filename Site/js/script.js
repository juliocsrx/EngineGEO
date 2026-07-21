/* =====================================================
   ENGINEGEO
   SCRIPT.JS
   ===================================================== */



// ===============================
// NAVBAR SCROLL EFFECT
// ===============================


const header = document.querySelector(".header");


window.addEventListener("scroll", () => {


    if (window.scrollY > 50) {

        header.classList.add("scrolled");

    } else {

        header.classList.remove("scrolled");

    }


});







// ===============================
// MENU MOBILE
// ===============================


const menuButton = document.querySelector(".menu-mobile");

const navLinks = document.querySelector(".nav-links");



if(menuButton){


menuButton.addEventListener("click", () => {


    navLinks.classList.toggle("active");

    menuButton.classList.toggle("open");


});


}








// ===============================
// FECHAR MENU AO CLICAR EM LINK
// ===============================


const links = document.querySelectorAll(".nav-links a");


links.forEach(link => {


    link.addEventListener("click", () => {


        navLinks.classList.remove("active");

        menuButton.classList.remove("open");


    });


});








// ===============================
// ANIMAÇÃO AO APARECER NA TELA
// ===============================


const observer = new IntersectionObserver((entries)=>{


    entries.forEach(entry=>{


        if(entry.isIntersecting){


            entry.target.classList.add("show");


        }


    });



},
{

threshold:0.15

});




const elements = document.querySelectorAll(
".card, .about-content, .section-title"
);



elements.forEach(element=>{


    element.classList.add("hidden");

    observer.observe(element);


});








// ===============================
// ANO AUTOMÁTICO NO FOOTER
// ===============================


const year = document.querySelector(".copyright p");


if(year){


    const currentYear = new Date().getFullYear();


    year.innerHTML = 
    `© ${currentYear} EngineGEO. Todos os direitos reservados.`;



}
