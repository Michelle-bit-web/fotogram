let arrImg = [
  "img/bike1.jpeg",
  "img/bike2.jpeg",
  "img/bike3.jpeg",
  "img/bike4.jpeg",
  "img/bike5.jpeg",
  "img/bike6jpeg",
  "img/bike7jpeg",
  "img/bike8jpeg",
];


let imgTitle = [
  "Street Spirit",
  "Geschwindigkeit im Lichtmeer",
  "Eins mit deiner Maschine",
  "Kraft & Eleganz im Rampenlicht",
  "Sonne-Freiheit-Natur",
  "Freiheit im Abendlicht",
  "Der Urban Warrior",
  "Adrenalin in der Luft",
];


function renderImages() {
  for (let i = 1; i <= arrImg.length; i++) {
    document.getElementById("content").innerHTML += /*html*/ `
           <div id="divImg${i}" class="divImg" onclick="openOverlay(${i})"></div>`;
           
    getImg(i);
  }
}


function getImg(index) {
  document.getElementById(`divImg${index}`).style.backgroundImage += `url(./img/bike${index}.jpg)`;
}


function openOverlay(i) {
  let overlay = document.getElementById("overlay");
  overlay.innerHTML = `
            <div id="div_close_overlay" class="div_close_overlay">

                <div class="div_close_btn">
                   <h2 id="overlay_title" class="h2_overlay">${imgTitle[i - 1]}</h2>
                   <button onclick="closeButton()" class="close_btn"> X </button>
                </div> 

                <div id="render_overlay" class=render_overlay></div>

                <div id="btn_div" class="btn_div">
                   <button "id="btn_left" class="btn" onclick="switchImg(-1, event)"> << </button>
                   <button "id="btn_right" class="btn" onclick="switchImg(+1, event)" id="btn_right" class="btn"> >> </button>
                </div>
             </div>`;

  getOverlayImg(i);
  currentImage = i;

  overlay.classList.toggle("d_none");
}


function getOverlayImg(index) {
  document.getElementById(`render_overlay`).style.backgroundImage = `url(./img/bike${index}.jpg)`;
}


function closeButton() {
  document.getElementById("overlay").classList.toggle("d_none");
}

let currentImage;


function switchImg(a, event) {
  if (a < 0 && currentImage == 1) {
      currentImage = currentImage + (arrImg.length - 1);
    }

  else if ( a < 0 && currentImage > 1 ){
    currentImage = currentImage - 1;
  }
  
  else if (a > 0 && currentImage < arrImg.length) {
    currentImage = currentImage + 1;
  }

  else if (a > 0 && currentImage == arrImg.length) {
    currentImage = currentImage - + (arrImg.length - 1);
  }
  document.getElementById(`render_overlay`).style.backgroundImage = `url(./img/bike${currentImage}.jpg)`;
  document.getElementById(`overlay_title`).innerHTML = `${imgTitle[currentImage-1]}`;

  event.stopPropagation();
}

