let nameInput = document.querySelector('#name-input');

let emailInput = document.querySelector('#email-input');

let newsRecieve = document.querySelector('#news-recieve');

let alertIzvade = document.querySelector('#alert-izvade');

function myFunction() {
    location.replace("jauna-lapa.html")
  }
/*
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
*/

function checkAll(nameInput, emailInput, newsRecieve) {
    var error = false;

    if(nameInput == '' && emailInput == '') {
        let pazinojums3 = checkAll('Lūdzu, aizpildat abas ikonas!');
        alertIzvade.innerText = pazinojums3
    error = true;
    } else {
        if(nameInput == '') {
            let pazinojums = checkAll('Lūdzu, ierakstat savu vārdu!');
            alertIzvade.innerText = pazinojums
            error = true;
        }
        if(emailInput =='') {
            let pazinojums2 = checkAll('Lūdzu, ierakstat savu e-pastu!');
            alertIzvade.innerText = pazinojums2
            error = true;
        }
    }

    if(newsRecieve == '') {
        let pazinojums4 = checkAll('Lūdzu apstipriniet, ka piekrītat saņemt jaunumus!');
        alertIzvade.innerText = pazinojums4
    error = true
    }

    if(!error) {
        let pazinojums5 = ('Paldies, ka pieteicāties jaunumu saņemšanai!');
        alertIzvade.innerText = pazinojums5
    }
}

function myFunction2() {
    location.replace("mans ceļojums.html")
  }

