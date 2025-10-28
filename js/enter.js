//בודק האם המשתמש קיים והאם הסיסמא נכונה
function checkenter() {
  event.preventDefault();
  let arrstr = localStorage.getItem("users");
  let arruser = JSON.parse(arrstr);
  let inputs = document.getElementsByTagName("input");
  let i;
  for (i = 0; i < arruser.length; i++) {
    if (inputs[0].value == arruser[i].uEmail) {
      if (inputs[1].value == arruser[i].upass) {
        sessionStorage.setItem("uN", JSON.stringify(arruser[i]));
        window.location = "./index.html";
        break;
      } else {
        alert("wrong password");
        inputs[1].value = "";
        break;
      }
    }
  }
  if (i == arruser.length) {
    alert("user is not exsist");
    window.location = "./login.html";
  }
}
// כפתור חזור אחורה
function back() {
  window.location = "../html/login.html";
}
function toCart() {
  //locaדחיפת המוצר לתוך ה
  let users = JSON.parse(localStorage.getItem("users"));
  let thisU = JSON.parse(sessionStorage.getItem("uN"));
  for (let i = 0; i < users.length; i++) {
    if (users[i].uEmail == thisU.uEmail) {
      users[i].cart.push(product);
      break;
    }
  }
  localStorage.setItem("users", JSON.stringify(users));
  thisU.cart.push(product);
  sessionStorage.setItem("uN", JSON.stringify(thisU));
  add();
}
