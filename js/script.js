/******************************************
Treehouse Techdegree:
FSJS project 3 - Interactive Form
Adrian Collier
******************************************/

//Focus on first text field on load
document.getElementById('name').focus();

/***
Job Role Section
***/
document.getElementById('other-title').style.display='none';


/*** 
T-Shirt Section
***/

const designSelect = document.querySelector('#design');
const colorSelect = document.querySelector('#color');
const defaultColor = document.createElement('option');

//Update the “Color” field to read “Please select a T-shirt theme”
defaultColor.text = 'Please select a T-shirt theme';
colorSelect.appendChild(defaultColor);
defaultColor.selected = true;

for (let i=0; i<colorSelect.length; i+=1){
    colorSelect.options[i].hidden = 'true'; 
}

// Design Menu
designSelect.options[1].selected = true; //
designSelect.options[0].hidden = 'true'; // Hides 'Select a theme'

const jsPun = designSelect.options[1];
const loveJs = designSelect.options[2];

designSelect.addEventListener

if (jsPun.selected == true){
    alert('jsPun');
} elseif (loveJs.selected == true){
    (loveJs.selected == true)
}
    








