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
designSelect.options[0].selected = true; //


const jsPun = designSelect.options[1];
const loveJs = designSelect.options[2];

designSelect.addEventListener('change', (e) => {
    designSelect.options[0].hidden = 'true'; // Hides 'Select a theme'
    
    const jsPunColors = colorSelect.options.slice(0, 2);
    console.log(jsPunColors); 

    if (jsPun.selected == true){
        //alert('jsPun');
        defaultColor.selected = false;
        colorSelect.options[0].selected = true;
        colorSelect.options[1].hidden ='';
        colorSelect.options[2].hidden ='';

    }

    if (loveJs.selected == true){
        defaultColor.selected = false;
        colorSelect.options[3].selected = true;

    }

})

 


