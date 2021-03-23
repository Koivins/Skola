let nameInput = document.querySelector('#name-input');

let emailInput = document.querySelector('#email-input');

let newsRecieve = document.querySelector('#news-recieve');

let submitButton = document.querySelector('#submit-button');

let alertIzvade = document.querySelector('#alert-izvade');


function checkAll(nameInput, emailInput, newsRecieve) {
    if(nameInput == '') {
        let pazinojums = checkAll('Lūdzu, aizpildiet lauku vārds!');
        alertIzvade.innerText = pazinojums
    }
    if(emailInput == '') {
        let pazinojums2 = checkAll('Lūdzu, aizpildiet lauku E-pasts!');
        alertIzvade.innerText = pazinojums2
    }
    if(nameInput, emailInput == '') {
        let pazinojums3 = checkAll('Lūdzu, aizpildat abas ikonas!');
        alertIzvade.innerText = pazinojums3
    }
    if(newsRecieve == '') {
        let pazinojums4 = checkAll('Lūdzu apstipriniet, ka piekrītat saņemt jaunumus!');
        alertIzvade.innerText = pazinojums4
    } else {
        let pazinojums5 = ('Paldies, ka pieteicāties jaunumu saņemšanai' + (nameInput) + ('!'));
        alertIzvade.innerText = pazinojums5
    }
}

submitButton.addEventListener('click', function() {
    checkAll(nameInput.pazinojums)
    checkAll(emailInput.pazinojums2)
    checkAll(nameInput, emailInput.pazinojums3 )
    checkAll(newsRecieve.pazinojums4)
});
