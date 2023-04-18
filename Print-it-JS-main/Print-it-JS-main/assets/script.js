const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

let slidesIndex = 0                                             
const assetsSrc = "./assets/images/slideshow/"                  
const bannerImg = document.querySelector(".banner-img")        
const tagLineElement = document.querySelector(".tagline")


// Ajout des bullet point 
const dots = document.querySelector(".dots"); 
const slidesNumber = slides.length;
for (let i=0; i<slidesNumber; i++)
 {
	if (i==0){
		dots.innerHTML += `<div id= ${i} class="dot dot_selected"></div>`;
	}
	else {
	dots.innerHTML += `<div id= ${i} class="dot"></div>`;
	}
 }


//slides vers la droite 
const arrow_right = document.querySelector(".arrow_right");    // On récupère l'élément sur lequel on veut détecter le clic
arrow_right.addEventListener('click', function() {          // On écoute l'événement click
    slidesIndex += 1;
	if (slidesIndex > slides.length - 1) {                 
		slidesIndex = 0 
	}
	updateSlide();                                           // appel de ma fonction 
});


// slides vers la gauche
const arrow_left = document.querySelector(".arrow_left");    // On récupère l'élément sur lequel on veut détecter le clic
arrow_left.addEventListener('click', function() {
		slidesIndex -= 1;
		if (slidesIndex < 0) {
			slidesIndex = slides.length - 1;
		}
		updateSlide();
});

// Update des Bullet points au changement de slide 
function updateSlide() {
	bannerImg.src = assetsSrc + slides[slidesIndex].image;    // en fonction de l'index où l'on se trouve, la constante va récupérer la bonne image 

	const tagLine = slides[slidesIndex].tagLine;             // Pour afficher la tagline associée à l'image
	tagLineElement.innerHTML = tagLine;

	const dotSelected = document.querySelector(".dot_selected");   
	if (dotSelected) {
		dotSelected.classList.remove("dot_selected");           
	}
	const dot = document.getElementById(`${slidesIndex}`);    
	dot.classList.add("dot_selected");

}

