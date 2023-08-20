const navBtn = document.querySelector(".nav__btn")
const navMenu = document.querySelector(".nav-menu")
let navOpen = false;
navBtn.addEventListener("click",function(){
    if(navOpen){
        navBtn.classList.remove("nav__btn--open")
        navMenu.classList.remove("nav-menu--open")
        navOpen = false
    }
    else{
        navBtn.classList.add("nav__btn--open")
        navMenu.classList.add("nav-menu--open")
        navOpen = true
    }
})
const http = require('http') ;
const port = 5000 ;
const server = http.createServer (function(req , res) {
    server.listen (port, function (error) {
        console.log (error);
        if (error) {
            throw new Error (error.message) ;
        }
        else {
            console.log (' listening on port ' + port);
        }
    })
} ) ;