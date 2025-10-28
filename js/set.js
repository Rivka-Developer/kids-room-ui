//פונקציה היוצרת כרטיסי צבעים
//js ל htmlוהעברנו מ codePenלקחנו מ
function createSet() {
  let mains = document.getElementsByClassName("main");
  let arr = [
    "#ffffff",
    "#fda1b6",
    "#f39c12",
    "#64bb5d",
    "#16a085",
    "#0e83cd",
    "#702fa8",
    "Pick a color!",
  ];
  for (let i = 0; i < arr.length; i++) {
    //////////////////////משנה רקע/////////////////////////////
    let d1 = document.createElement("div");
    d1.className = "sup";
    mains[0].appendChild(d1);
    let d2 = document.createElement("div");
    d2.className = "sub";
    d1.appendChild(d2);
    let d3 = document.createElement("div");
    d3.className = "point";
    d2.appendChild(d3);
    let a = document.createElement("a");
    a.href = "#";
    a.innerText = arr[i];
    a.addEventListener("click", changeColor);
    d2.appendChild(a);
    ///////////////////////משנה כיתוב/////////////////////////
    let d4 = document.createElement("div");
    d4.className = "sup";
    mains[1].appendChild(d4);
    let d5 = document.createElement("div");
    d5.className = "sub";
    d4.appendChild(d5);
    let d6 = document.createElement("div");
    d6.className = "point";
    d5.appendChild(d6);
    let a1 = document.createElement("a");
    a1.href = "#";
    a1.innerText = arr[i];
    a1.addEventListener("click", changeFontColor);
    d5.appendChild(a1);
  }
  let arr1 = [
    "italic",
    "normal",
    "oblique",
    "inherit",
    "initial",
    "unset",
    "span",
    "Pick a font!",
  ];
  for (let j = 0; j < arr1.length; j++) {
    let d7 = document.createElement("div");
    d7.className = "sup";
    mains[2].appendChild(d7);
    let d8 = document.createElement("div");
    d8.className = "sub";
    d7.appendChild(d8);
    let d9 = document.createElement("div");
    d9.className = "point";
    d8.appendChild(d9);
    let a2 = document.createElement("a");
    a2.href = "#";
    a2.innerText = arr1[j];
    a2.addEventListener("click", changeFont);
    d8.appendChild(a2);
  }
}
//משנה רקע בעמוד הנוכחי
function changeColor() {
  document.body.style.backgroundColor = event.currentTarget.innerText;
  sessionStorage.setItem("color", event.currentTarget.innerText);
}
//משנה צבע גופן בעמוד הנוכחי
function changeFontColor() {
  document.body.style.color = event.currentTarget.innerText;
  sessionStorage.setItem("fontColor", event.currentTarget.innerText);
}
//משנה גופן בעמוד הנוכחי
function changeFont() {
  document.body.style.fontStyle = event.currentTarget.innerText;
  sessionStorage.setItem("font", event.currentTarget.innerText);
}
