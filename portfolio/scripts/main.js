let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/image1') {
      myImage.setAttribute('src','images/successinsteps');
    } else {
      myImage.setAttribute('src','images/image3');
    }
}
