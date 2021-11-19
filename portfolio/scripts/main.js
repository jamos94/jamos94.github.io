let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/progressneverlinear.png') {
      myImage.setAttribute('src','images/successinsteps.png');
    } else {
      myImage.setAttribute('src','images/progressneverlinear.png');
    }
}

// to do:
    // image won't load in above function
    //first image shows but second disapears on click instead of changing to the next image