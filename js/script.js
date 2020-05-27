/******************************************
Treehouse Techdegree:
FSJS project 3 - Interactive Form
Adrian Collier
******************************************/

//Focus on first text field on load
document.getElementById('name').focus();

/****************
Job Role Section
*****************/
document.getElementById('other-title').style.display='none';


/*************
T-Shirt Section
***************/
const designSelect = document.querySelector('#design');
const colorSelect = document.querySelector('#color');
const defaultColor = document.createElement('option');

//Update the “Color” field to read “Please select a T-shirt theme”
defaultColor.text = 'Please select a T-shirt theme';
colorSelect.appendChild(defaultColor);
defaultColor.selected = true;

//Hide all options in colorSelect menu
for (let i=0; i<colorSelect.length; i+=1){
    colorSelect.options[i].hidden = 'true'; 
}

// Design Menu
designSelect.options[0].selected = true; 

const jsPun = designSelect.options[1];
const loveJs = designSelect.options[2];

// Design Menu Event Listener
designSelect.addEventListener('change', (e) => {
    designSelect.options[0].hidden = 'true'; // Hides 'Select a theme'
    colorSelect.options[0].hidden = 'true';
    
    // jsPun selection
    if (jsPun.selected == true){
        defaultColor.selected = false;
        colorSelect.options[0].selected = true;

        //Unhide 'jsPun' options & hide 'loveJs' options
        for (let i=0; i<colorSelect.length; i+=1){
            if (i<3){
                colorSelect.options[i].hidden = '';
            };
            
            if (i>3){
                colorSelect.options[i].hidden = 'true';
            };
        };
    };
    
    // loveJs selection
    if (loveJs.selected == true){
        colorSelect.options[3].selected = true;

        //Unhide 'loveJs' options Hide 'jsPun' options
        for (let i=0; i<colorSelect.length; i+=1){
            if (i<3){
                colorSelect.options[i].hidden = 'true';
            };
            if (i>3 && i<5){
                colorSelect.options[i].hidden ='';
            };
        };
    }; 
});

/******************
 Activities Section
*******************/ 
const checkboxes = document.querySelectorAll('.activities input');

//Add Total input field
let runningTotal = document.createElement('INPUT');
runningTotal.setAttribute('type', 'text');
document.querySelector('.activities').appendChild(runningTotal);
let totalCost = 0;
runningTotal.setAttribute('value', `Total: $ ${totalCost}`);


// Checkbox Event Listener
document.querySelector('.activities').addEventListener('change', (e) => {
    const clicked = e.target;
    const clickedDate = clicked.getAttribute('data-day-and-time');//stores the date of the current item clicked 
    const clickedCost = clicked.getAttribute('data-cost');//stores the cost of the current item clicked
    

     if (clicked.checked){
        totalCost += +clickedCost;
        runningTotal.setAttribute('value', `Total: $ ${totalCost}`);
        console.log(`Total Cost: ${totalCost}`)
    } else {
        totalCost -= +clickedCost;
        runningTotal.setAttribute('value', `Total: $ ${totalCost}`);
        console.log(`Total Cost: ${totalCost}`)
    } 

    //Checkbox Loop: Checks for activity date conflicts.
    for (let i=0; i<checkboxes.length; i+=1){
        const checkboxDate = checkboxes[i].getAttribute('data-day-and-time');

        if(clickedDate === checkboxDate && clicked != checkboxes[i]){
            if (clicked.checked){ //disables checkboxes with conflicting dates
                checkboxes[i].disabled = true;
            } else {
                checkboxes[i].disabled = false;
            }
        }
    }
});

/******************
Payment Section
*******************/
const paymentSelect = document.getElementById('payment');
const creditCardDiv = document.getElementById('credit-card');
const payPalDiv = document.getElementById('paypal');
const bitcoin = document.getElementById('bitcoin');

paymentSelect.options[1].selected = true;

//Payment Event Listener
paymentSelect.addEventListener('change', (e) =>{
    console.log('Listner Functional')
    if (paymentSelect.options[1].selected == true){
        //console.log('credit card');
        creditCardDiv.style.display = '';
        payPalDiv.style.display = 'none';
        bitcoin.style.display = 'none';
    }
    if (paymentSelect.options[2].selected == true){
        //console.log('Pay Pal');
        creditCardDiv.style.display = 'none';
        payPalDiv.style.display = '';
        bitcoin.style.display = 'none';
    }
    if (paymentSelect.options[3].selected == true){
        //console.log('bitcoin');
        creditCardDiv.style.display = 'none';
        payPalDiv.style.display = 'none';
        bitcoin.style.display = '';
    }
});

/**********************
 Validation Functions
 *********************/

 //---Name Validator ---
const name = document.getElementById('name');
const form = document.querySelector('form');
console.log(form);

const nameValidator = () => {
    const userName = name.value;

    if(userName.length > 0){
        name.style.borderColor = 'white'
        return true;
    } else {
        name.style.borderColor = 'red'
        document.getElementById('name').innerHTML = 'Can not be left blank';
        return false;
        
    }
};

//--- Email Validator ---
const email = document.getElementById('mail');
const regexEmail = /^[^@]+@[^@.]+\.[a-z]+$/i ;

const emailValidator = () => {
    const userEmail = email.value;
    const emailValid = regexEmail.test(userEmail);
    
    if (emailValid) {
        email.style.borderColor = 'white';
    } else {
        email.style.borderColor = 'red';
        
    }

}

//--- Payment Validator ---
const creditCardNum = document.getElementById('cc-num');
const zipCode = document.getElementById('zip');
const cvv = document.getElementById('cvv');
const regexCreditCard = /^[0-9]{13,16}$/;
const regexZip = /^[0-9]{5}$/;
const regexCvv = /^[0-9]{3}$/;

const creditCardValidator = () => {
    const creditCardValid = regexCreditCard.test(creditCardNum.value);
    const zipCodeValid = regexZip.test(zipCode.value);
    const cvvValid = regexCvv.test(cvv.value);
 
        //**Functionality Logs**
        console.log(`Credit Card Number: ${creditCardNum.value}`);
        console.log(`credit Card Valid?: ${creditCardValid}`);
        console.log(`Zip Cod Valid?: ${zipCodeValid}`);
        console.log(`CCV number Valid?: ${cvvValid}`);
    
    
    // Credit Card Number Valid?
    if (creditCardValid) {
        creditCardNum.style.borderColor = 'white';
    } else {
        creditCardNum.style.borderColor = 'red';
    }

     // zipCode Valid?
     if (zipCodeValid) {
        zipCode.style.borderColor = 'white';
    } else {
        zipCode.style.borderColor = 'red';
    }

     // CVV Valid?
     if (cvvValid) {
        cvv.style.borderColor = 'white';
    } else {
        cvv.style.borderColor = 'red';
    }
  
    

    
}

/**********************
 Error Message functions
 *********************/



 

/**********************
 Submit Handler
 *********************/

 form.addEventListener('submit', (e) =>{
    nameValidator();
    emailValidator();
    creditCardValidator();
    console.log('Submit Handler is working');
    e.preventDefault();
 });

