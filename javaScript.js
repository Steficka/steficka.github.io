//countdown
function newStuff(){
    blinkOrNo = 0;
    document.getElementById("chapter2").style.visibility="visible";
    var countDown = 5;
    document.getElementById("chapter2").innerHTML = countDown;
    setTimeout(() => {
        var countDown = 4;
        document.getElementById("chapter2").innerHTML = countDown;
    }, 1000)
    setTimeout(() => {
        var countDown = 3;
        document.getElementById("chapter2").innerHTML = countDown;
    }, 2000)
    setTimeout(() => {
        var countDown = 2;
        document.getElementById("chapter2").innerHTML = countDown;
    }, 3000)
    setTimeout(() => {
        var countDown = 1;
        document.getElementById("chapter2").innerHTML = countDown;
    }, 4000)
    setTimeout(() => {
        var countDown = 0;
        document.getElementById("chapter2").innerHTML = countDown;
    }, 5000)
    setTimeout(() => {
        var countDown = 0;
        document.location = "index2.html";
    }, 6000)
}

//back to old
function GoToOld(){
    document.location="index.html";
}

//gallery script
function showImg(x) {
    var image = document.getElementsByClassName('display-img');
    for(var i=0; i<image.length; i++) {
        if(x==i) {
            image[i].style.display = "block";
            document.location.href = "#gallery";
        }

        else {
            image[i].style.display = "none";
        }
    }
}