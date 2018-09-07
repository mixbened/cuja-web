// FORM PROTOCOLL 
var formStage = 0;
var form = document.querySelector('form');
var mailHTML = "<input class='form-input' name='absender' type='text' placeholder='your contact'>";
var nameHTML = "<input class='form-input' type='text' placeholder='what is your name?' name='name'>";
var subjectHTML = "<input class='form-input' type='text' placeholder='what is your Message about?' name='subject'>";
var textHTML = "<textarea class='form-input' type='text' placeholder='what is on your mind?' name='message'></textarea> <button class='button'>Submit</button>";
var inputs = [mailHTML, nameHTML, subjectHTML, textHTML]

const nextButton = document.getElementById('next');

function showElement(){
    if(formStage === 3) {
        nextButton.remove()
    }
    document.querySelector('form').innerHTML = inputs[formStage]
}

nextButton.addEventListener('click', () => {
    // there is no 5th Possibility
    if(formStage < 5){
        // increase for showing next stage
        formStage++;
    }
    // triggering HTML Switch
    showElement();
});

// intitial input Field 
showElement(); 

// ANIMATIONS 
const grids = $('.gridSystem > div')

grids.mouseover(function(){
    console.log('Mouse over Element')
})