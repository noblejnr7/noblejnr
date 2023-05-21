let cards = [];
let heading = [];
let imgdiv = [];
let img = [];

let names = ["", "banana", "mango" ,"pineapple"];
let images = [ "", "img1.jpg", "img2.jpg", "img3.jpg"];


for(let i=1; i<=3; i++) {
    cards[i] =document.createElement('div');
    cards[i].setAttribute( 'class', 'card');
    cards[i].setAttribute('id', 'card-'[i]);

    imgdiv[i] =document.createElement('div');
    imgdiv[i].setAttribute('id', 'img<${i}');

    img[i] = document.createElement('img');
    img[i].src = images[i];

    heading[i]=  document.createElement('h1');
    heading[i].setAttribute('id', 'head-${i}');
    heading[i].innerHTML = names[i];
  

    
    //    adding image to the images div
    imgdiv[i].appendChild(img[i]);
    //    adding images to the cards
    imgdiv[i].appendChild(img[i]);

    //    adding images to the cards
    cards[i].appendChild(heading[i]);
    //    adding cards to the main container
    cardsContainer.appendChild(cards[i]);
        
    };