/******************************************
Treehouse Techdegree:
FSJS project 3 - Interactive Form
Adrian Collier
******************************************/

//Focus on first text field on load
document.getElementById('name').focus();

//Job role other
document.getElementById('other-title').style.display='none';

//*** T-Shirt ***

//Hide 'Select Theme' option from 'design' selection
const designSelect = document.querySelector('#design');
console.log(designSelect.options[0]);

designSelect.options[0].hidden = 'true';

//Update the “Color” field to read “Please select a T-shirt theme”
const colorSelect = document.querySelector('#color');

colorSelect.options.add('Please select a T-shirt theme', 0);



