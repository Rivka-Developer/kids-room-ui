// הוספת שם המשתמש בכל עמוד
function hello() {
  let h3 = document.getElementsByTagName("p")[0];
  if (sessionStorage.getItem("uN") == null) {
    h3.innerText += " guest";
  } else {
    let namestr = sessionStorage.getItem("uN");
    namestr = JSON.parse(namestr);
    h3.innerText += " " + namestr.uName;
  }
}
// עיצוב אישי לכל עמוד
function design() {
  let color = sessionStorage.getItem("color");
  if (color != null) document.body.style.backgroundColor = color;
  let fcolor = sessionStorage.getItem("fontColor");
  if (fcolor != null) document.body.style.color = fcolor;
  let f = sessionStorage.getItem("font");
  if (f != null) document.body.style.fontStyle = f;
}
