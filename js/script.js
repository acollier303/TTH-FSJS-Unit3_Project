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

//Update the “Color” field to read “Please select a T-shirt theme”
const colorSelect = document.querySelector('#color');
for (let i=0; i<colorSelect.length; i+=1){
    colorSelect.options[i].hidden = 'true'; 
}

//console.log(colorSelect.length);
const defaultColor = document.createElement('option');
defaultColor.text = 'Please select a T-shirt theme';
console.log(defaultColor);



