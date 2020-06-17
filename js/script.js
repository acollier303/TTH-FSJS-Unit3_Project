/******************************************
Treehouse Techdegree:
FSJS project 3 - Interactive Form
Adrian Collier
******************************************/

//Focus on first text field on load
document.getElementById('name').focus();

/********************************************
Job Role Section
*********************************************/

const jobRole = document.getElementById('title');
const other = document.getElementById('other-title');
other.style.display='none';

//Other job role event listner
jobRole.addEventListener('change', (e) => {
    if (jobRole.options[5].selected){
        other.style.display = '';
    }else{
        other.style.display ='none'
    }
});


/********************************************
Error Div
*********************************************/
const name = document.getElementById('name');
const form = document.querySelector('form');
// Creating DOM error elements
const errorDiv = document.createElement('div');
const errorList = document.createElement('ul');
const nameError = document.createElement('li');
const emailError = document.createElement('li');
const activityError = document.createElement('li');
const creditCardError = document.createElement('li');
const cvvError = document.createElement('li');
const zipError = document.createElement('li');
// Append Error Elements to DOM
form.prepend(errorDiv);
errorDiv.appendChild(errorList);
//Name Error
errorList.appendChild(nameError);
nameError.textContent = 'Name can not be blank.';
nameError.style.display = 'none';

//Email Error
errorList.appendChild(emailError);
emailError.textContent  = 'Please enter a valid email address.';
emailError.style.display = 'none';

//Activity Error
errorList.appendChild(activityError);
activityError.textContent = 'Please choose at least ONE activity.';
activityError.style.display = 'none';

//Credit Card Number Error
errorList.appendChild(creditCardError);
creditCardError.textContent = 'Please enter a valid Credit Card Number.';
creditCardError.style.display = 'none';

//CVV Error
errorList.appendChild(cvvError);
cvvError.textContent = 'Please enter a valid CVV number.';
cvvError.style.display = 'none';

//Zip Code Error
errorList.appendChild(zipError);
zipError.textContent = 'Please enter a valid zip code.';
zipError.style.display = 'none';

/*********************************************
T-Shirt Section
*********************************************/
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
    designSelect.options[0].hidden = true; // Hides 'Select a theme'
    colorSelect.options[0].hidden = true;
    
    
    // jsPun selection
    if (jsPun.selected == true){
        defaultColor.selected = false;
        colorSelect.options[0].selected = true;

        //Unhide 'jsPun' options & hide 'loveJs' options
        for (let i=0; i<colorSelect.length; i+=1){
            if (i<3){
                colorSelect.options[i].hidden = '';
            };
            
            if (i>3 && i<6){
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
            if (i>3 && i<6){
                colorSelect.options[i].hidden ='';
            };
        };
    }; 
});

/**********************************************
 Activities Section
**********************************************/ 
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
    } else {
        totalCost -= +clickedCost;
        runningTotal.setAttribute('value', `Total: $ ${totalCost}`);
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

/**************************************************
Payment Section
*************************************************/
const paymentSelect = document.getElementById('payment');
const creditCardDiv = document.getElementById('credit-card');
const payPalDiv = document.getElementById('paypal');
const bitcoin = document.getElementById('bitcoin');

paymentSelect.options[1].selected = true;
payPalDiv.style.display = 'none';
bitcoin.style.display = 'none';

//Payment Event Listener
paymentSelect.addEventListener('change', (e) =>{
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

/***********************************************
 Validation Functions
 **********************************************/

 //---Name Validator ---

const nameValidator = () => {
    const userName = name.value;
    nameError.classList.add('textError');

    if(userName.length > 0){
        name.style.borderColor = 'white';
        nameError.style.display = 'none';
        return true;
    } else {
        name.style.borderColor = 'red'
        nameError.style.display = '';
        return false; 
    }
}

//--- Email Validator ---
const email = document.getElementById('mail');
const regexEmail = /^[^@]+@[^@.]+\.[a-z]+$/i ;
emailError.classList.add('textError');

const emailValidator = () => {
    const userEmail = email.value;
    const emailValid = regexEmail.test(userEmail);
    
    if (emailValid) {
        email.style.borderColor = 'white';
        emailError.style.display= 'none';
        return true;
    } else {
        email.style.borderColor = 'red';
        emailError.style.display = '';
        return false;
    }

}

//--- Activities Validator ---
const activityValidator = () => {
    activityError.style.display = 'none';
    activityError.classList.add('textError');
    let checkedCount = 0;
    for (let i=0; i<checkboxes.length; i+=1){
        if (checkboxes[i].checked) {
            checkedCount += 1;
         }
    }
    if (checkedCount === 0){
        activityError.style.display = '';
        return false;
    }
    if (checkedCount > 0){
        return true;
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
    if (paymentSelect.options[1].selected == true){
        const creditCardValid = regexCreditCard.test(creditCardNum.value);
        const zipCodeValid = regexZip.test(zipCode.value);
        const cvvValid = regexCvv.test(cvv.value);
        let pass = 0;    
        creditCardError.classList.add('textError');
        zipError.classList.add('textError');
        cvvError.classList.add('textError');
    
    // Credit Card Number Valid?
        if (creditCardValid) {
            creditCardNum.style.borderColor = 'white';
            creditCardError.style.display = 'none';
            pass += 1;

        } else {
            creditCardNum.style.borderColor = 'red';
            creditCardError.style.display = '';
        }

        // zipCode Valid?
        if (zipCodeValid) {
            zipCode.style.borderColor = 'white';
            zipError.style.display = 'none';
            pass += 1;

        } else {
            zipCode.style.borderColor = 'red';
            zipError.style.display = '';
        }

        // CVV Valid?
        if (cvvValid) {
            cvv.style.borderColor = 'white';
            cvvError.style.display = 'none'
            pass += 1;

        } else {
            cvv.style.borderColor = 'red';
            cvvError.style.display = '';
        }

        if (pass === 0){
            return false;
        } else {
            creditCardError.style.display = 'none';
            zipError.style.display = 'none';
            cvvError.style.display = 'none';
            return true;
        }
    } else {
        return true;
    }

}
    
/****************************************
 Submit Handler
 ***************************************/

 form.addEventListener('submit', (e) =>{
    nameValidator();
    if (!nameValidator()){
        e.preventDefault();
        window.scrollTo(0,0);
    }

    emailValidator();
    if (!emailValidator()){
        e.preventDefault();
        window.scrollTo(0,0);
    };

    activityValidator();
    if (!activityValidator()){
        e.preventDefault()
        window.scrollTo(0,0);
    };

    if (paymentSelect.options[1].selected){
        creditCardValidator();
        if(!creditCardValidator()){
            e.preventDefault()
            window.scrollTo(0,0);
        }
    } else {
        creditCardError.style.display = 'none';
        zipError.style.display = 'none';
        cvvError.style.display = 'none';
    }
 });
