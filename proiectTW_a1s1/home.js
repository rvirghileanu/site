
const TitluPrezentare = document.querySelector('.prezentare h2'); //manipulare DOM

//modificare stil elemente
TitluPrezentare.style.color = '#301934';
TitluPrezentare.style.border = '2px solid #5a0017';
TitluPrezentare.style.textTransform = 'uppercase';
TitluPrezentare.style.padding = '10px';
TitluPrezentare.style.paddingBottom = '5 px';

//creare de element - voi adauga un mesaj personalizat la inceputul paginii

const welcomeDiv = document.createElement('div');
welcomeDiv.textContent = 'Bine ai venit la Casuta Animalelor!';
welcomeDiv.style.backgroundColor = '#d291bc';
welcomeDiv.style.color = '#301934';
welcomeDiv.style.padding = '15px';
welcomeDiv.style.textAlign = 'center';
welcomeDiv.style.borderRadius = '10px';
welcomeDiv.style.margin = '20px auto';
welcomeDiv.style.width = '80%';

const header = document.querySelector('header');
header.insertAdjacentElement('afterend', welcomeDiv);

//adaug un timeout pentru ca mesajul sa apara doar in primele 10 secunde 

setTimeout(() => {
    welcomeDiv.remove(); 
}, 10000); 

