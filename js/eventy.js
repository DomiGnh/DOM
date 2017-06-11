'use strict';

//eventy to wszytsko to co robi użytkownik czyli klnięcie, scrollowanie, hover itp.

//preventDefault zablokowanie domyślnego działania

//addEventListner- funkcja nasłuchaująca czy dane zdarzenie sie wykonało

var secondLink = document.getElementsByTagName('a')[1]; //tworzymy zmienną z drugim linkiem

console.log(secondLink);

function alarm(e){
   e.preventDefault();//blokujemy domyślną funkcje 
    console.log('kliknięto kolejno link');
    
    console.log(e.type);
}

secondLink.onclick = alarm; //wywołujemy funkcje alarm() na drugim linku po kliknięciu

var thirdLink = document.getElementsByTagName('a')[2]; // tworzymy zmienna z 3 linkiem 

thirdLink.addEventListener('click', alarm);//wywolujemy funkcje alarm() na trzecim linku po kliknieciu za pomoca event Listenera

thirdLink.removeEventListener('click', alarm);//usuwamy Listenera, mozna go usunąc bo jest nazwa funkcji, fuknkcji anonimowych nie da sie usunac. 




















