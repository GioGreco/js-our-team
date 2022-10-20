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
let nameArray = [];
let roleArray = [];

for(let value of ourTeam){
    imgArray.push(value.img);
    nameArray.push(value.name);
    roleArray.push(value.role);
}

console.log(imgArray);
console.log(nameArray);
console.log(roleArray);

let totMembers = ourTeam.length;

let picsHTML = document.querySelectorAll('.member-frontface');
let backfacePicHTML = document.querySelectorAll('.member-pic');
let namesHTML = document.querySelectorAll('.member-name');
let roleHTML = document.querySelectorAll('.member-role');

for(let i = 0; i < totMembers; i++){
    picsHTML[i].style.backgroundImage = `url(../img/${imgArray[i]})`;
    backfacePicHTML[i].style.backgroundImage = `url(../img/${imgArray[i]})`;
    namesHTML[i].innerHTML = `${nameArray[i]}`;
    roleHTML[i].innerHTML = `${roleArray[i]}`;
}

