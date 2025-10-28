// הפעלת כרטיס אשראי
const inputs = document.querySelectorAll(".number-field input");

inputs.forEach((input, index) => {
  input.addEventListener("input", () => {
    input.value = input.value.replace(/[^0-9]/g, "");
    if (input.value && index < inputs.length - 1) {
      inputs[index + 1].focus();
    }
  });

  input.addEventListener("keydown", (e) => {
    if (e.key === "Backspace" && input.value === "" && index > 0) {
      inputs[index - 1].focus();
    }
  });
});
//  מחיקת העגלה בתשלום
function delateCart() {
  let uN = JSON.parse(sessionStorage.getItem("uN"));
  uN.cart = null;
  sessionStorage.setItem("uN", JSON.stringify(uN));
  let users = JSON.parse(localStorage.getItem("users"));
  for (let j = 0; j < users.length; j++) {
    if (users[j].uEmail == uN.uEmail) {
      users[j].cart = null;
      break;
    }
  }
}

// מעבר להודעה
function finish() {
  window.location = "../html/finish.html";
}
