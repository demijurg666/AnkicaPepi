function playVid() {
  var audio = new Audio("music/pepi.mp3");
  let mojvid = new Audio("music/mojvid.mp4");
  audio.play();
  mojvid.play();
  audio.volume = 1.0;
  mojvid.volume = 0.05;
}

//slike

let i = 0;
let images = [];
let time = 12000;

images[0] = "images/slika1.jpeg";
images[1] = "images/slika2.jpeg";
images[2] = "images/slika3.jpeg";
images[3] = "images/slika4.jpeg";
images[4] = "images/slika5.jpeg";
images[5] = "images/slika6.jpeg";
images[6] = "images/slika7.jpeg";
images[7] = "images/slika8.jpeg";
images[8] = "images/slika9.jpeg";

function changeImg() {
  document.slide.src = images[i];

  if (i < images.length - 1) {
    i++;
  } else {
    i = 0;
  }
  setTimeout("changeImg()", time);
}

window.onload = changeImg;
