let kilometri = document.querySelector('#Km');
let eta = document.querySelector('#age');

let minorenne = 18;
let over = 65;

const prezzoPerKm = 0.21;

const prezzoIntero = kilometri * prezzoPerKm;


// buttons
const domButtonConfirm = document.querySelector("#confirm");
const domButtonDelete = document.querySelector('#delete')

domButtonConfirm.addEventListener('click',
    function () {
        const domNome = document.getElementById('name');
        const domNameText = domNome.value;
        alert(domNameText);

        const domDistance = document.getElementById('Km');
        const domDistanceText = domDistance.value;
        alert(domDistanceText);

    }
)

domButtonDelete.addEventListener('click',
    function () {
        const domNome = document.getElementById('name');
        const domNameText = domNome.value.reset();
        

        const domDistance = document.getElementById('Km');
        const domDistanceText = domDistance.value;
      

    }
)



// const scontoMinorenni = (prezzoIntero / 100) * 20;
// const totaleMinorenni = prezzoIntero - scontoMinorenni;

// const scontoOver = (prezzoIntero / 100) * 40;
// const totaleOver = prezzoIntero - scontoOver;

// if (eta < minorenne) {



// } else if (eta > over){



// } else{


// }

console.log(kilometri);
console.log(eta);
console.log(prezzoIntero);
// console.log(totaleMinorenni);
// console.log(totaleOver);




