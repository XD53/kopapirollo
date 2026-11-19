const ujJatekGomb=document.getElementById("ujjatek");
const jatekTer=document.getElementsByClassName("jatekter");

console.log(jatekTer)
ujJatekGomb.addEventListener("click", megjelenit);

function megjelenit(){
    const htmlKod=`
    <div id="gep">
        <h2>A gép tippje</h2>
        <div class="kep">
          <img src="kepek/placeholder.jpg" alt="kopapriollo" />
        </div>
      </div>
      <div id="jatekos">
        <h2>A Játékos tippje</h2>
        <div class="gombok">
          <button id="ko">K</button>
          <button id="papir">P</button>
          <button id="ollo">O</button>
        </div>
        <div class="kep">
          <img src="kepek/placeholder.jpg" alt="kopapriollo" />
        </div>
      </div>
      `
    jatekTer[0].innerHTML=""
    jatekTer[0].insertAdjacentHTML("beforeend", htmlKod)
    const gombElemek=document.querySelectorAll(".gombok button")
    gombElemek[0].addEventListener("click", kivalaszt)
    gombElemek[1].addEventListener("click", kivalaszt)
    gombElemek[2].addEventListener("click", kivalaszt)
    
}

function kivalaszt(event){
  const kep=document.querySelector("#jatekos img")
  console.log(event.target)
  console.log(event.target.id)
  kep.src=`kepek/${event.target.id}.PNG`
  gepValasztasa(event.target.id)
}

function gepValasztasa(jTipp){

  const kep = document.querySelector("#gep img")
  console.log(kep)
  let veletlen = Math.floor(Math.random()*3)
  console.log("gép tippje",veletlen)
  if (veletlen === 0){
    kep.src = "kepek/ko.PNG"
  }else if(veletlen === 1){
    kep.src = "kepek/papir.PNG"
  }else{
    kep.src = "kepek/ollo.PNG"
  }
  ellenorzes(veletlen, jTipp)
}

function ellenorzes(veletlen, jTipp){
  let eredmeny=""
  let f1 =(veletlen == 2 && jValasztasa == "ko")
  let f2 =(veletlen == 0 && jValasztasa == "papir")
  let f3 =(veletlen == 1 && jValasztasa == "ollo")
  let f4 =(veletlen == 1 && jValasztasa == "ko")
  let f5 =(veletlen == 2 && jValasztasa == "papir")
  let f6 =(veletlen == 0 && jValasztasa == "ollo")


  if(f1 || f2 || f3){
    eredmeny = "Játékos nyert"
  }else if(f4 || f5 || f6 ){
    eredmeny = "döntetlen"
  }else{
    eredmeny = "Gép nyert"
  }

  const KiirElem=document.getElementById("Gyoztes")
  KiirElem.innerHTML=`<p>${eredmeny}</p>`
}



