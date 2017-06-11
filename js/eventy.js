//'use strict';
//
////eventy to wszytsko to co robi użytkownik czyli klnięcie, scrollowanie, hover itp.
//
////preventDefault zablokowanie domyślnego działania
//
////addEventListner- funkcja nasłuchaująca czy dane zdarzenie sie wykonało
//
//var secondLink = document.getElementsByTagName('a')[1]; //tworzymy zmienną z drugim linkiem
//
//console.log(secondLink);
//
//function alarm(e){
    'use strict';
//   e.preventDefault();//blokujemy domyślną funkcje 
//    console.log('kliknięto kolejno link');
//    
//    console.log(e.type);
//}
//
//secondLink.onclick = alarm; //wywołujemy funkcje alarm() na drugim linku po kliknięciu
//
//var thirdLink = document.getElementsByTagName('a')[2]; // tworzymy zmienna z 3 linkiem 
//
//thirdLink.addEventListener('click', alarm);//wywolujemy funkcje alarm() na trzecim linku po kliknieciu za pomoca event Listenera
//
//thirdLink.removeEventListener('click', alarm);//usuwamy Listenera, mozna go usunąc bo jest nazwa funkcji, fuknkcji anonimowych nie da sie usunac. 

//e-obiekt zdarzenia. 


//efekt powiekszania napisu po najechaniu

var mainHeader = document.getElementById('main-header');//przypisujemy nagłówek strony do zmiennej

function resize(e){ // przekazujemy zdarzenie jako parametr funkcji
    
//    console.log(e.type);
    if(e.type == 'mouseover'){//sprawdzenie typu zdarzenia 
     mainHeader.style.fontSize = "70px"; //zmien wielkosć fonta po najechaniu
    }
    else{
        mainHeader.style.fontSize = "inherit"; //przywróc wartość domyślną po zjechaniu 
    }
}



mainHeader.onmouseover = resize; //wywaolanie funkcji resize po najechaniu myszka

mainHeader.onmouseout = resize; //wywolanie funkcji resize po zjechaniu myszką z nagowka 
















