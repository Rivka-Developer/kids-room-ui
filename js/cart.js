// יצירת העגלה לקחנו מקוד פן והעברנו ליצירה בזמן ריצה
let cart = JSON.parse(sessionStorage.getItem("uN")).cart;
function createCart() {
  let container = document.getElementsByClassName(
    "col-12 col-sm-12 col-md-12 col-lg-8"
  )[0];

  for (let i = 0; i < cart.length; i++) {
    let hr = document.createElement("hr");
    container.appendChild(hr);
    // <div class="cart-item py-2">in cont
    let d1 = document.createElement("div");
    d1.className = "cart-item py-2";
    container.appendChild(d1);
    // <div class="row">in d1
    let row = document.createElement("div");
    row.className = "row";
    d1.appendChild(row);
    //     <div class="col-12 col-sm-12 col-md-6 col-lg-6"> in row
    let d2 = document.createElement("div");
    d2.className = "col-12 col-sm-12 col-md-6 col-lg-6";
    row.appendChild(d2);
    // <div class="d-flex justify-content-between mb-3"> in d2
    let d3 = document.createElement("div");
    d3.className = "d-flex justify-content-between mb-3";
    d2.appendChild(d3);
    // <img class="cart-image d-block" in d3
    let img = document.createElement("img");
    img.className = "cart-image d-block";
    img.src = `../p/${cart[i].id}.webp`;
    d3.appendChild(img);
    // <div class="mx-3"> in d3
    let mx = document.createElement("div");
    mx.className = "mx-3";
    d3.appendChild(mx);
    //<h5>Basic Tee</h5> in mx
    let name = document.createElement("h5");
    name.innerText = cart[i].name;
    mx.appendChild(name);
    //  <p>Lorem ipsum, dolor sit</p>in mx
    let p = document.createElement("p");
    p.innerText = cart[i].des.substr(0, 25);
    mx.appendChild(p);
    //  <h5>Rs. 800</h5> in mx
    let price = document.createElement("h5");
    price.innerText = `${cart[i].price}$`;
    mx.appendChild(price);
    // <small class="text-white bg-success px-2 py-1 d-inline-block rounded-3 mt-2"  >In Stock</small in mx
    let small = document.createElement("small");
    small.innerText = `In Stock: ${cart[i].amount}`;
    small.className = "btn btn-primary w-100 mt-4";
    small.style.backgroundColor = "#92879b";
    small.style.border = "#92879b";
    small.style.margin = 0;
    mx.appendChild(small);
    //     <div class="col-12 col-sm-12 col-md-6 col-lg-6"> in row
    let d4 = document.createElement("div");
    d4.className = "col-12 col-sm-12 col-md-6 col-lg-6";
    row.appendChild(d4);
    // <div class="d-flex justify-content-between"> in d4
    let d5 = document.createElement("div");
    d5.className = "d-flex justify-content-between";
    d4.appendChild(d5);
    //<div> in d5
    let d = document.createElement("div");
    d5.appendChild(d);
    //  <select class="form-select">in d
    let select = document.createElement("select");
    select.className = "form-select";
    d.appendChild(select);
    //<option selected>1</option>
    let o1 = document.createElement("option");
    o1.selected;
    o1.innerText = "1";
    select.appendChild(o1);
    //<option value="2">2</option>
    let o2 = document.createElement("option");
    o2.selected;
    o2.innerText = "2";
    select.appendChild(o2);
    //<option value="3">3</option>
    let o3 = document.createElement("option");
    o3.selected;
    o3.innerText = "3";
    select.appendChild(o3);
    //<option value="4">4</option>
    let o4 = document.createElement("option");
    o4.selected;
    o4.innerText = "4";
    select.appendChild(o4);
    // dd>in h5
    let dd = document.createElement("div");
    d5.appendChild(dd);
    // <a href="#" class="close"></a> in dd
    let x = document.createElement("a");
    x.href = "#";
    x.className = "close";
    x.setAttribute("data-id", cart[i].id);
    x.addEventListener("click", delate);
    dd.appendChild(x);
  }
}
//  מחיקת פריט בעגלה
function delate() {
  const id = event.currentTarget.getAttribute("data-id");
  let index = -1;
  for (let i = 0; i < cart.length; i++) {
    if (id == cart[i].id) {
      index = i;
      break;
    }
  }
  let uN = JSON.parse(sessionStorage.getItem("uN"));
  let users = JSON.parse(localStorage.getItem("users"));
  if (index !== -1) {
    cart.splice(index, 1);
    uN.cart = cart;
    sessionStorage.setItem("uN", JSON.stringify(uN));
    for (let j = 0; j < users.length; j++) {
      if (users[j].uEmail == uN.uEmail) {
        users[j].cart = uN.cart;
        break;
      }
    }

    localStorage.setItem("users", JSON.stringify(users));
    window.location = "../html/ShoppingCart.html";
  }
}
// בדיקה האם הלקוח עבר דרך הכניסה עשינו כאשר הוא מוסיף מוצר לסל ולא פה
// מעבר לתשלום
function creditCard() {
  window.location = "../html/card.html";
}
// מחשבת מחיר סופי של הסל
function calcPrice() {
  let d = document.querySelector("div strong");
  let sum = 0;
  for (let i = 0; i < cart.length; i++) {
    sum += cart[i].price;
  }
  d.innerText = `$${sum}`;
}
