// image changes upon click
let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/progressneverlinear.png') {
      myImage.setAttribute('src','images/successinsteps.png');
    } else {
      myImage.setAttribute('src','images/progressneverlinear.png');
    }
}

// creates a welcome message
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

//gets a user name, stores it, and updates heading
function setUserName() {
  let myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'Mozilla is cool, ' + myName;
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.textContent = 'Mozilla is cool, ' + storedName;
}
//allows the user to enter a new username
myButton.onclick = function() {
  setUserName();
}