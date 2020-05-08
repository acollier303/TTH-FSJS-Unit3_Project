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
    colorSelect.options[0].hidden = 'ture';
    
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
******************/ 
const checkboxes = document.querySelectorAll('.activities input');

//Add Total input field
const runningTotal = document.createElement('INPUT');
runningTotal.setAttribute('type', 'text');
document.querySelector('.activities').appendChild(runningTotal);
let totalCost = 0;
runningTotal.setAttribute('value', 'Total: $');

// Checkbox Event Listener
document.querySelector('.activities').addEventListener('change', (e) => {

    const clicked = e.target;
    const clickedDate = clicked.getAttribute('data-day-and-time'); 
    const clickedCost = clicked.getAttribute('data-cost');
    
    for (let i=0; i<checkboxes.length; i+=1){
        const  checkboxDate = checkboxes[i].getAttribute('data-day-and-time');
        if (clickedDate === checkboxDate && checkboxDate !== checkboxes[i]){
            if (clicked.checked){
                checkboxes[i].disabled = 'true';
            } else {
                checkboxes[i].disabled = 'false';
            }
        }
    }
});



