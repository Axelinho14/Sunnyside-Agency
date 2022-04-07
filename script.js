var menuBouton = document.getElementById('menu-mobile');

menuBouton.addEventListener("click", function(){
    var menuAppear = document.getElementById('menu-boutons-mobile');
    var triangle = document.getElementById('triangle');
    var title = document.getElementById('title');
    var arrow = document.getElementById('arrow')

    if(getComputedStyle(menuAppear).display != "flex"){
        menuAppear.style.display = 'flex';
        triangle.style.display = 'flex';
        title.style.display = 'none'
        arrow.style.display = "none"
    }
    else{
        menuAppear.style.display = 'none';
        triangle.style.display = 'none';
        title.style.display = 'flex'
        arrow.style.display = "flex"
    }
})