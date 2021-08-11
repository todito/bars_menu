const barre_contenitore = document.querySelector('.barre_contenitore');
const barre = document.querySelector('.barra')
barre_contenitore.addEventListener('click', function(){
   barre.classList.toggle('aperto');
})    

   /* if (menu_aperto === false){
        barre.classList.add('aperto');
        console.log('ciao');
        menu_aperto = true;
    }else{
        barre.classList.remove('aperto');
        menu_aperto = false;let menu_aperto = false;
    }*/
