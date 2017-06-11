'use strict';


//dodawan ie, najpeirw tworzymy obiekt elemntu html  , za pomocą node szukamy gdzie go chcemy umieścicć (jest on w amiecie al nie ma go nanstronie) i wrzucamy na strone. 


var istniejacyWezel= document.getElementById('parFirst').children[3];//przypisz do zmiennej istenijacy wezel

console.log(document.getElementById('parFirst').children);

console.log(istniejacyWezel);


var newElement=document.createElement('p');

//twotzmy nowy elemnt

var newElementContent = document.createTextNode('to jest nowy paragraf');
//tekst w paragrafie tez jest obiektem js, wiec bedzie go dodoac jako dziecko paragrafu.
//stworzylismy nowy obiekt ale jest tylko w pamieci nie ma go na stronie

newElement.appendChild(newElementContent);//dodalismy dziecko do paragrafu 

istniejacyWezel.appendChild(newElement);//wrzucamy elemnt do diva na strone

console.log(newElement);

istniejacyWezel.removeChild(newElement);
//usuneliśmy element newElemnt

















