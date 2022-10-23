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
const containerImage = document.querySelector(".box-items");
//Thumbs contenitore
const containerThumbs = document.querySelector(".thumbs");
console.log(containerThumbs);

images.forEach((courrentItems) => {
    const imageRound = courrentItems.image;
    const titleRound = courrentItems.title;
    const textRound = courrentItems.text;
    
    containerImage.innerHTML += `
        <div class="item">
                <img src="${imageRound}" alt="">
                <div class="box-title">
                    <h3>${titleRound}</h3>
                    <p>${textRound}</p>
                </div>
        </div>
    `;

    containerThumbs.innerHTML += `
        <div class="thumb">
            <img src="${imageRound}" alt="">
        </div> 
    `;

  
});





//Preparo lo Slider nella posizione iniziale
const sliderItems = document.getElementsByClassName("item");
const sliderThumb = document.getElementsByClassName("thumb");

const buttonNext = document.querySelector(".next");
const buttonPrev = document.querySelector(".prev");

let activeItem = 0;
sliderItems[activeItem].classList.add("active");
sliderThumb[activeItem].classList.add("active-thumb");
/* ____________________________________ */

//Event next
buttonNext.addEventListener("click", nextSlider);
buttonPrev.addEventListener("click", prevSlider);

//Slider setInterval

/**
 * Description Eseguire lo slider con una condizione if-else
 * @returns {/}
 */
function nextSlider(){
    sliderItems[activeItem].classList.remove("active");
    sliderThumb[activeItem].classList.remove("active-thumb");

    if(activeItem < sliderItems.length - 1){
        activeItem++;
    }else{
        activeItem = 0;
    };
//Aggiungo active item
    sliderItems[activeItem].classList.add("active");
    sliderThumb[activeItem].classList.add("active-thumb");
}

function prevSlider(){
    sliderItems[activeItem].classList.remove("active");
    sliderThumb[activeItem].classList.remove("active-thumb");

    if(activeItem > 0){
        activeItem--;
    } else{
        activeItem = sliderItems.length - 1;
    }

    sliderItems[activeItem].classList.add("active");
    sliderThumb[activeItem].classList.add("active-thumb");
}

//Aggiungere slider al check su thumb
for (let i = 0; i < sliderThumb.length; i++) {
    const thisThumb = sliderThumb[i];
    thisThumb.addEventListener("click", function() {
        // Cancellare active da slider item e dal thumb
        sliderItems[activeItem].classList.remove("active");
        sliderThumb[activeItem].classList.remove("active-thumb");

        // Aggiornare la posizione attuale
        activeItem = i;

        // Aggiungere active alla nuova posizione dell'immagine e del thumb
        sliderItems[activeItem].classList.add("active");
        sliderThumb[activeItem].classList.add("active-thumb");
    });
}

//Set inerval

setInterval(intervalSlider, 4000);

function intervalSlider(){
    sliderItems[activeItem].classList.remove("active");
    sliderThumb[activeItem].classList.remove("active-thumb");

    if(activeItem < sliderItems.length - 1){
        activeItem++;
    }else{
        activeItem = 0;
    };
//Aggiungo active item
    sliderItems[activeItem].classList.add("active");
    sliderThumb[activeItem].classList.add("active-thumb"); 
}


