// Global Variables
var firstName = document.querySelector('.firstName');
var headerName = document.querySelector('header');
var mountainButton = document.querySelector("#mountains");
var beachButton = document.querySelector("#beach");
var displayBeach = document.getElementById("beachlocations");
var displayMountains = document.getElementById("mountainlocations");


console.log(headerName);
// Takes the name entered by the user and appends it to the end of the header. The modal also closes when the user clicks 'submit'.
document.querySelector('.button').addEventListener('click', function(event) {
    event.preventDefault();
    headerName.textContent = "Plan Your Next Vacation, " + firstName.value + "!";
    console.log(firstName.value);
    console.log(headerName.textContent);
    document.querySelector('.bg-modal').style.display = 'none';
    localStorage.setItem("firstName", firstName.value);
});

// Allows modal to be closed when the user clicks the 'x' in the top right corner of the modal.
document.querySelector('.close').addEventListener('click', function () {
    document.querySelector('.bg-modal').style.display = 'none';
});

// Storing the first name to local storage.
localStorage.getItem('firstName');

// The JS below is the logic we'll use for the second modal.
// document.getElementById('button').addEventListener('click', function() {
//     document.querySelector('.bg-modal').style.display = 'flex';
// });

function beachTheme() {

    if (displayBeach.style.display === "none") {
        displayBeach.style.display = "block";
    } else {
        displayBeach.style.display = "none";
    }

}

function mountainTheme() {

     if (displayMountains.style.display === "none") {
        displayMountains.style.display = "block";
     } else {
         displayMountains.style.display = "none";
     }

}

// mountainButton.addEventListener("click", mountainTheme);


mountainTheme(); beachTheme();
// beachButton.addEventListener("click", beachTheme);