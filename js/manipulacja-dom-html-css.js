'use strict';


var mainHeader = document.getElementById('main-header'); // przypisujemy nagłówek strony do zmiennej
                                         
 console.log(mainHeader); 

mainHeader.innerHTML = "treść magłówka";//dodajemy treść do nagłówka

var link = document.getElementsByClassName('link')[0]; // przypisujemy pierwszy link do zmiennej

console.log(link);

link.href = "http://akademia108.pl";//nadajemy atrybut href w linki

link.className = "nowa-klasa";//dodajemy nową klasę

link.text = "ddd";//zmienia text (nazwe linku)

mainHeader.style.color = '#11aa22';//zmieniamy kolor nagłówka



                                         
                                         