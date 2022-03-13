function navSlide (){
    var navMenu = document.querySelector(".nav-menu");
    
    var toggleButton = document.querySelector(".togglers");
    
    var links = document.querySelectorAll(".nav-menu li");
    
    
    toggleButton.addEventListener("click", function(){
        navMenu.classList.toggle("active");
        links.forEach((link) =>{
            if(link.style.animation){
                link.style.animation = "";
            }else{
                link.style.animation = "open 1s ease forwards 1s"
                
                
                
            }
        } )
        
    });
    
    
    
    
    
}
navSlide();
function drop1(){
    var drop1 = document.querySelector(".dropdown1");
    drop1.classList.toggle("showit");
}
function drop2(){
    var drop2 = document.querySelector(".dropdown2");
    drop2.classList.toggle("showit")
}
function drop3(){
    var drop3 = document.querySelector(".dropdown3");
    drop3.classList.toggle("showit")
}
function animateCards(){
    var reveals = document.querySelectorAll(".bg-dark");
    for (var i = 0; i < reveals.length; i++){
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 150;
        if(elementTop < windowHeight - elementVisible){
            reveals[i].classList.add("reveal");
        }else{
            reveals[i].classList.remove("reveal");
        }
    }
}

window.addEventListener("scroll", animateCards);




        
    
