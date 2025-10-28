// פונקציה היוצרת את כרטיסי המוצרים
function createShop() {
  let arr = JSON.parse(localStorage.getItem("products"));
  let art = document.getElementsByTagName("article")[0];
  for (let i = 0; i < arr.length; i++) {
    //הדיב העוטף
    let wrapper = document.createElement("div");
    wrapper.className = "wrapper";
    art.appendChild(wrapper);
    //alert in warper
    let alert = document.createElement("h4");
    alert.innerText = "  ✓the product added succesfully";
    alert.hidden = true;
    wrapper.appendChild(alert);
    //הדיב העוטף
    let container = document.createElement("div");
    container.className = "container";
    wrapper.appendChild(container);
    //////
    let top = document.createElement("div");
    top.className = "top";
    //
    top.style.backgroundImage = `url(../p/${arr[i].id}.webp)`;
    container.appendChild(top);
    //
    let bottom = document.createElement("div");
    bottom.className = "bottom";
    container.appendChild(bottom);
    //
    let left = document.createElement("div");
    left.className = "left";
    bottom.appendChild(left);
    //details
    let details = document.createElement("div");
    details.className = "details";
    left.appendChild(details);
    //h1
    let h1 = document.createElement("h1");
    h1.innerText = arr[i].name;
    details.appendChild(h1);
    //p
    let p = document.createElement("p");
    p.innerText = `${arr[i].price}$`;
    details.appendChild(p);
    //buy
    let buy = document.createElement("buy");
    buy.className = "buy";
    left.appendChild(buy);
    //ing in material-icons
    let img1 = document.createElement("img");
    img1.setAttribute("data-id", arr[i].id);
    img1.addEventListener("click", toCart);
    img1.src = "../p/cart.png";
    // img1.style.width = 20;
    buy.appendChild(img1);
    //inside in warper
    let inside = document.createElement("div");
    inside.className = "inside";
    wrapper.appendChild(inside);
    //icon in inside
    let icon = document.createElement("div");
    icon.className = "icon";
    inside.appendChild(icon);
    //material-icons in icon
    let material1 = document.createElement("i");
    material1.className = "material-icons";
    material1.innerText = "<";
    icon.appendChild(material1);
    //contents in inside
    let contents = document.createElement("div");
    contents.className = "contents";
    inside.appendChild(contents);
    //p1 in contents
    let p1 = document.createElement("p");
    p1.innerText = arr[i].des;
    contents.appendChild(p1);
    //br
    let br = document.createElement("br");
    contents.appendChild(br);
    //button in contents
    let button = document.createElement("button");
    button.innerText = "More details";
    button.setAttribute("data-id", arr[i].id);
    button.addEventListener("click", toDetails);
    contents.appendChild(button);
  }
}
// מעביר לדף המוצר הנוכחי
function toDetails() {
  let p = JSON.parse(localStorage.getItem("products"));
  let id = event.currentTarget.getAttribute("data-id");
  sessionStorage.setItem("product", JSON.stringify(p[id - 1]));
  window.location = "../html/details.html";
}
// הוספה לסל
function toCart() {
  //  בדיקה האם המשתמש עבר בכניסה או נכנס כאורח
  let thisU = JSON.parse(sessionStorage.getItem("uN"));
  if (thisU == undefined) window.location = "../html/enter.html";
  else {
    //המוצר הנוכחי
    let products = JSON.parse(localStorage.getItem("products"));
    let id = event.currentTarget.getAttribute("data-id");
    let p = products[id - 1];
    //localדחיפת המוצר לתוך ה
    let users = JSON.parse(localStorage.getItem("users"));
    for (let i = 0; i < users.length; i++) {
      if (users[i].uEmail == thisU.uEmail) {
        users[i].cart.push(p);
        break;
      }
    }
    localStorage.setItem("users", JSON.stringify(users));
    thisU.cart.push(p);
    sessionStorage.setItem("uN", JSON.stringify(thisU));

    add(id);
  }
}
//  מוצר נוסף בהצלחה
function add(id) {
  let h4 = document.getElementsByTagName("h4")[id - 1];
  h4.hidden = false;
  setTimeout(() => {
    h4.hidden = true;
  }, 1500);
}
