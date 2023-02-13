const cardContainer = document.querySelector('.container');
const cardNumber = 6;
const randomColors = ['Salmon', 'Crimson', 'Blue', 'Orange', 'Green', 'Purple'];

for(let i = 0; i < cardNumber; i++){
    let newCard = document.createElement('div');
    newCard.setAttribute('class', 'card');
    newCard.setAttribute('data-color', randomColors[i]);
    newCard.style.backgroundColor = randomColors[i];

    cardContainer.appendChild(newCard);
};