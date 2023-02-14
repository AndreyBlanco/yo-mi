// Global variables
var clues = [];
var elementList = {};

//FUNCTIONS:

function restart() {
    //Restart the clues array
    clues = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22];
    
    //Clear DOM record of images found.
    document.getElementById("count").innerHTML = "";

    //Call changeImage function to start
    changeImage();
};

async function changeImage() {

    //Declare variables
    const random = Math.floor(Math.random() * clues.length);
    var selector = 0;
    const url = 'https://raw.githubusercontent.com/AndreyBlanco/yo-mi/main/images.json';
    const response = await fetch(url);

    //Clear elementList
    elementList = {};

    //Copy the json file
    if (response.ok) {
        images = await response.json();
    };
    
    //Select randomly one object form json file and put into elementList
    images.forEach(element => {
        if (selector == clues[random]) {            
            console.log(element);
            elementList = element;
        }
        selector ++;
    });
    
    // If there is no more images to find, aks for restart
    if (clues == "") {
        document.getElementById("info").textContent = "You found all!. Restart";
        document.getElementById("imagen").src = "images/imagen.png";
    } else {
        // Display de info in the DOMs, if there is a problem it calls changeImage function 
        document.getElementById("info").textContent = elementList.info;
        if (document.getElementById("info").textContent == "") {
            document.getElementById("imagen").src = "images/imagen.png";
            changeImage();
        } else {
            document.getElementById("imagen").src = elementList.dir;
        }
    }
};

function countImg() {
    // This function creates an image DOM to display the image found and filter it from te clues array
    var img = document.createElement("img");
    img.src = elementList.dir;
    img.alt = elementList.index;
    document.getElementById("count").append(img);

    var borrar = elementList.index - 1;
    var nClues = clues.filter( clue => clue != borrar);
    clues = nClues;
    console.log(clues, borrar, nClues);
    changeImage();
}

//Event Listeners
document.getElementById("restart").addEventListener('click', restart); //Button to restart all, calls the restart function.
document.getElementById("change").addEventListener('click', changeImage); //Button to change image, calls the changeImage function.

//Evaluete if the image was clicked on the board.
document.getElementById("i01").addEventListener('click', function() {if (elementList.index == 1) {countImg()}})
document.getElementById("i02").addEventListener('click', function() {if (elementList.index == 2) {countImg()}})
document.getElementById("i03").addEventListener('click', function() {if (elementList.index == 3) {countImg()}})
document.getElementById("i04").addEventListener('click', function() {if (elementList.index == 4) {countImg()}})
document.getElementById("i05").addEventListener('click', function() {if (elementList.index == 5) {countImg()}})
document.getElementById("i06").addEventListener('click', function() {if (elementList.index == 6) {countImg()}})
document.getElementById("i07").addEventListener('click', function() {if (elementList.index == 7) {countImg()}})
document.getElementById("i08").addEventListener('click', function() {if (elementList.index == 8) {countImg()}})
document.getElementById("i09").addEventListener('click', function() {if (elementList.index == 9) {countImg()}})
document.getElementById("i10").addEventListener('click', function() {if (elementList.index == 10) {countImg()}})
document.getElementById("i11").addEventListener('click', function() {if (elementList.index == 11) {countImg()}})
document.getElementById("i12").addEventListener('click', function() {if (elementList.index == 12) {countImg()}})
document.getElementById("i13").addEventListener('click', function() {if (elementList.index == 13) {countImg()}})
document.getElementById("i14").addEventListener('click', function() {if (elementList.index == 14) {countImg()}})
document.getElementById("i15").addEventListener('click', function() {if (elementList.index == 15) {countImg()}})
document.getElementById("i16").addEventListener('click', function() {if (elementList.index == 16) {countImg()}})
document.getElementById("i17").addEventListener('click', function() {if (elementList.index == 17) {countImg()}})
document.getElementById("i18").addEventListener('click', function() {if (elementList.index == 18) {countImg()}})
document.getElementById("i19").addEventListener('click', function() {if (elementList.index == 19) {countImg()}})
document.getElementById("i20").addEventListener('click', function() {if (elementList.index == 20) {countImg()}})
document.getElementById("i21").addEventListener('click', function() {if (elementList.index == 21) {countImg()}})
document.getElementById("i22").addEventListener('click', function() {if (elementList.index == 22) {countImg()}})
document.getElementById("i23").addEventListener('click', function() {if (elementList.index == 23) {countImg()}})

//First call to start the program.
restart();

