//schimb proprietatea de culoare a butonului Submit la click
const submitBtn = document.getElementById('submitBtn');

// adaug un eveniment la click
submitBtn.addEventListener('click', (event) => {
    event.preventDefault();

    submitBtn.style.backgroundColor = '#5A0017';
    submitBtn.style.color = '#ede8d0';
});

// asigur revenirea la proprietatile originale

submitBtn.addEventListener('click', (event) => {
    event.preventDefault();
    submitBtn.style.backgroundColor = '#5A0017';
    submitBtn.style.color = '#ede8d0';

    // Revine la culoarea originală după 3 secunde
    setTimeout(() => {
        submitBtn.style.backgroundColor = '#d291bc';
        submitBtn.style.color = '#301934';
    }, 3000);
});

//input functional - select
const animalSelect = document.getElementById('animalSelect');
const animalOutput = document.getElementById('animalOutput');

animalSelect.addEventListener('change', () => {
    animalOutput.textContent = `Ați ales tipul de animal: ${animalSelect.value}`;
});

//salvez raspunsurile primite la formular in local storage
window.onload = function() {
    localStorage.clear();

    const animalOutput = document.getElementById("animalOutput");
    animalOutput.textContent = "";

    var buton = document.getElementById("submitBtn");
    var formular = document.getElementById("FormularAdoptie");

    buton.onclick = function(event) {
        event.preventDefault();
    
        var nume = document.getElementById("nume").value.trim();
        var prenume = document.getElementById("prenume").value.trim();
        var telefon = document.getElementById("telefon").value.trim();
        var animal = document.getElementById("animalSelect").value;
        var numeAnimal = document.getElementById("numeanimal").value.trim();

        //generez un id unic pentru fiecare raspuns
        var idUnic = Math.floor(Math.random() * 1000000);

        // obtin data curenta
        var dataActuala = new Date().toLocaleString();
    
        // expresii regulate pentru validare
        var regexNume = /^[A-Za-zăîâșțĂÎÂȘȚ\-]+$/;
        var regexTelefon = /^(\+40|0)[7-9][0-9]{8}$/;
        var regexNumeAnimal = /^.+$/;
    
        if (!regexNume.test(nume)) {
            alert("Numele trebuie să conțină doar litere și cratime.");
            return;
        }
    
        if (!regexNume.test(prenume)) {
            alert("Prenumele trebuie să conțină doar litere și cratime.");
            return;
        }
    
        if (!regexTelefon.test(telefon)) {
            alert("Numărul de telefon nu este valid. Folosiți formatul 07XXXXXXXX sau +40XXXXXXXXX.");
            return;
        }
    
        if (!regexNumeAnimal.test(numeAnimal)) {
            alert("Numele animalului nu poate fi gol.");
            return;
        }
    
        // salvez datele dacă toate câmpurile sunt valide
        var animal = document.getElementById("animalSelect").value;
        var idUnic = Math.floor(Math.random() * 1000000);
        var dataActuala = new Date().toLocaleString();
    
        var raspuns = {
            id: idUnic,
            nume: nume,
            prenume: prenume,
            telefon: telefon,
            animal: animal,
            numeAnimal: numeAnimal,
            timestamp: dataActuala
        };
    
        var raspunsuri = JSON.parse(localStorage.getItem("raspunsuri")) || [];
        raspunsuri.push(raspuns);
        localStorage.setItem("raspunsuri", JSON.stringify(raspunsuri));
    
        alert("Datele au fost salvate cu succes!");
        formular.reset();
        animalOutput.textContent = "";
    };
    
};
