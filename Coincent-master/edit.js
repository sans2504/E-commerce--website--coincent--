const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');

if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    })
}

if (close) {
    close.addEventListener('click', () => {
        nav.classList.remove('active');
    })
}

$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:4
        }
    }
})

function validation(){
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var number = document.getElementById('number').value;

    var namecheck = /^[A-Za-z ]{2,}$/;
    var emailcheck = /^[A-Za-z0-9._]{3,}@[A-Za-z0-9]{3,}[.]{1}[A-Za-z]{2,6}$/;
    var numbercheck = /^[6789][0-9]{9}$/;

    if(namecheck.test(name)){
        document.getElementById('error-name').innerHTML = ' ';
    }
    else{
        document.getElementById('error-name').innerHTML = 'Use only Alphabets';
        return false;
    }

    if(emailcheck.test(email)){
        document.getElementById('error-email').innerHTML = ' ';
    }
    else{
        document.getElementById('error-email').innerHTML = 'Invalid email syntax. Ex: abc@xyz.com';
        return false;
    }

    if(numbercheck.test(number)){
        document.getElementById('error-number').innerHTML = ' ';
    }
    else{
        document.getElementById('error-number').innerHTML = 'Use 10 digit valid mobile number';
        return false;
    }
}

const scriptURL =
       'https://script.google.com/macros/s/AKfycbzJauJ3_cpBCt19Z_AhVQn0Fm2iWGbgKVsViguQkUwa-LioMxkxoarypH1g-k8QXFcT/exec'
   const form = document.forms['form-google-sheet']

   form.addEventListener('submit', e => {
       e.preventDefault()
       fetch(scriptURL, {
               method: 'POST',
               body: new FormData(form)
           })
           .then(response => alert(
               "Thanks for your valuable feedback!!!"))
           .catch(error => console.error('Error!', error.message))
   })

