'use strict';


var pierwszyDiv = document.getElementById('parFirst');
//console.log(pierwszyDiv);
//console.log(pierwszyDiv.parentNode);
//console.log(pierwszyDiv.parentElement);

console.log(pierwszyDiv.firstChild);
console.log(pierwszyDiv.lastChild);

//childNodes używamy jesli chcemy pobtrac wszystkie elemnty na stronie, a children jeli chcemy wszytskie dzieci danego elementu

var pierwszyChild = pierwszyDiv.childNodes[2];
console.log(pierwszyChild);
console.log(pierwszyChild.nextSibling.nodeType);
