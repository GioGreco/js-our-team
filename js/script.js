"use strict";

// MILESTONE 0:
// Creare l’array di oggetti con le informazioni fornite.

let ourTeam = [
    {
        name: 'Wayne Barnett',
        role: 'Founder & CEO',
        img: 'wayne-barnett-founder-ceo.jpg'
    },
    {
        name: 'Angela Caroll',
        role: 'Chief Editor',
        img: 'angela-caroll-chief-editor.jpg'
    },
    {
        name: 'Walter Gordon',
        role: 'Office Manager',
        img: 'walter-gordon-office-manager.jpg'
    },
    {
        name: 'Angela Lopez',
        role: 'Social Media Manager',
        img: 'angela-lopez-social-media-manager.jpg'
    },
    {
        name: 'Scott Estrada',
        role: 'Developer',
        img: 'scott-estrada-developer.jpg'
    },
    {
        name: 'Barbara Ramos',
        role: 'Graphic Designer',
        img: 'barbara-ramos-graphic-designer.jpg'
    }
];

// MILESTONE 1:
// Stampare su console le informazioni di nome, ruolo e la stringa della foto
console.log(ourTeam);

// MILESTONE 2:
// Stampare le stesse informazioni su DOM sottoforma di stringhe

let imgArray = [];

for(let value of ourTeam){
    imgArray.push(value.img);
}

let picsHTML = document.querySelectorAll('.member-frontface');

for(let i = 0; i < picsHTML.length; i++){
    picsHTML[i].style.backgroundImage = `url(../img/${imgArray[i]})`;
}

let backfacePicHTML = document.querySelectorAll('.member-pic');

for(let i = 0; i < backfacePicHTML.length; i++){
    backfacePicHTML[i].style.backgroundImage = `url(../img/${imgArray[i]})`;
}

console.log(imgArray);