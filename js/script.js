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
// BONUS 1:
// Trasformare la stringa foto in una immagine effettiva
// BONUS 2:
// Organizzare i singoli membri in card/schede e stilarli a vostro gusto
// BONUS 3:
// Aggiungere attraverso un form un membro al team

let imgArray = [];
let nameArray = [];
let roleArray = [];

function reset(){
    let imgArray = [];
    let nameArray = [];
    let roleArray = [];

    for(let value of ourTeam){
        imgArray.push(value.img);
        nameArray.push(value.name);
        roleArray.push(value.role);
    };

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
}

reset();

const joinBtn = document.getElementById('joinBtn');

const newMember = function (){
    const newMemberNameHTML = document.getElementById('newMemberName').value;
    const newMemberRoleHTML = document.getElementById('newMemberRole').value;
    const newMemberPicHTML = document.getElementById('picSelector').value;

    let newMember = {};
    newMember.name = newMemberNameHTML;
    newMember.role = newMemberRoleHTML;
    newMember.img = newMemberPicHTML;

    if(newMemberNameHTML != '' && newMemberRoleHTML != ''){
        ourTeam.push(newMember);
        imgArray.push(newMemberPicHTML);
        nameArray.push(newMemberNameHTML);
        roleArray.push(newMemberRoleHTML);
    }
    console.log(newMemberNameHTML, newMemberRoleHTML, newMemberPicHTML);
    console.log(newMember);
    console.log(ourTeam);
    console.log(imgArray, nameArray, roleArray)

    const teamMembers = document.getElementById('teamMembers');

    teamMembers.innerHTML += `
    <div class="member-wrapper col-6">
        <div class="member-frontface h-100"></div>
        <div class="member-backface d-flex flex-column justify-content-around align-content-center">
            <div class="member-pic"></div>
            <h2 class="member-name"></h2>
            <div class="member-role text-uppercase fs-2"></div>
            <div class="contacts d-flex justify-content-center align-items-center">
                <i class="fa-solid fa-phone"></i>
                <i class="fa-solid fa-envelope"></i>
            </div>
        </div>
    </div>`;

    reset();

}

joinBtn.addEventListener('click', newMember);