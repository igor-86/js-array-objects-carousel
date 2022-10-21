//Array con oggetti
const images = [
    {
        image: 'img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, {
        image: 'img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];
//Catturo il container dove inserire gli oggetti nel array
const containerImage = document.querySelector(".container");
console.log(containerImage);

images.forEach((courrentItems) => {
    const imageRound = courrentItems.image;
    const titleRound = courrentItems.title;
    const textRound = courrentItems.text;

    containerImage.innerHTML += `
        <div class="box-items">
                <img src="${imageRound}" alt="">
                <div class="box-title">
                    <h3>${titleRound}</h3>
                    <p>${textRound}</p>
                </div>
        </div>
    `;
});

//Preparo lo Slider nella posizione iniziale
const sliderItems = document.getElementsByClassName("box-items");

let activeItem = 0;
sliderItems[activeItem].classList.add("active");
/* ____________________________________ */

