const generateTiketDom = document.getElementById('generateTiket');

const ageDom = document.getElementById('age');
const kmDom = document.getElementById('km');
const nameDom = document.getElementById('name');

const ticketNameDom = document.getElementById('ticketName');
const discountDom = document.getElementById('discount');
const wagonDom = document.getElementById('wagon');
const prenotationCodeDom = document.getElementById('prenotationCode');
const ticketPriceDom = document.getElementById('ticketPrice');
const yourTicketDom = document.getElementById('yourTicket');

const priceKm = 0.21;


generateTiketDom.addEventListener('click',

    function () {
        let km = kmDom.value;
        let age = ageDom.value;
        let name = nameDom.value;

        let price = km * priceKm;

        if (age == "minnorenne") {
            price = price - (price / 100 * 20);
            discountDom.innerHTML = "Sconto 20% minorenne";

        } else if (age == "senior") {
            price = price - (price / 100 * 40);
            discountDom.innerHTML = "Sconto 40% senior";

        } else{
            discountDom.innerHTML = " Prezzo pieno";
        }

        yourTicketDom.classList.remove('d-none');

        ticketNameDom.innerHTML = name;
        ticketPriceDom.innerHTML = `${price.toFixed(2)}€`

        const wagon = Math.floor(Math.random()* 20) + 1;
        wagonDom.innerHTML = wagon;

        const cp = Math.floor(Math.random() * (100000 - 90000)) + 90000;

        prenotationCodeDom.innerHTML = cp;


    }
);

const resetFormDom = document.querySelector('#resetForm');

resetFormDom.addEventListener('click',
   function() {
    yourTicketDom.classList.add('d-none');
    nameDom.value = '';
    kmDom.value = '';
   }
)







