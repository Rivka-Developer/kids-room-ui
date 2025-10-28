// יצירת פרטי מוצר
let product = JSON.parse(sessionStorage.getItem("product"));
function createDetails() {
  let container = document.getElementsByClassName("container")[0];

  // <!-- Left Column / Headphones Image
  //left-column in container
  let left = document.createElement("div");
  left.className = "left-column";
  container.appendChild(left);
  //img in left
  let img = document.createElement("img");
  img.src = `../p/${product.id}.webp`;
  img.className = "active";
  left.appendChild(img);
  // Right Column
  //right in container
  let right = document.createElement("div");
  right.className = "right-column";
  container.appendChild(right);
  //alert in right
  let alert = document.createElement("h4");
  alert.innerText = "✓ the product added succesfully";
  alert.hidden = true;
  alert.style.margin = "10px";
  right.appendChild(alert);
  //   Product Description
  //product-description in right
  let description = document.createElement("div");
  description.className = "product-description";
  right.appendChild(description);
  //h1 in des
  let h1 = document.createElement("h1");
  h1.innerText = product.name;
  description.appendChild(h1);
  //h4
  let h4 = document.createElement("p");
  h4.innerText = `product id: ${product.id}`;
  description.appendChild(h4);
  //p in des
  let p = document.createElement("p");
  p.innerText = product.des;
  description.appendChild(p);
  //   Product Configuration
  //   <div class="product-configuration">in right
  let configuration = document.createElement("div");
  configuration.className = "product-configuration";
  right.appendChild(configuration);
  //product-color in configuration
  let color = document.createElement("div");
  color.className = "product-color";
  configuration.appendChild(color);
  //<div class="cable-config">in product-configuration
  let config = document.createElement("div");
  config.className = "cable-config";
  configuration.appendChild(config);
  // /span in config
  let span = document.createElement("span");
  span.innerText = "Size";
  config.appendChild(span);
  //cable-choose in config
  let choose = document.createElement("div");
  choose.className = "cable-choose";
  config.appendChild(choose);
  //bs in choose
  let bs = document.createElement("button");
  bs.innerText = "S";
  choose.appendChild(bs);
  //bs in choose
  let bm = document.createElement("button");
  bm.innerText = "M";
  choose.appendChild(bm);
  //bs in choose
  let bl = document.createElement("button");
  bl.innerText = "L";
  choose.appendChild(bl);
  //amount
  let amount = document.createElement("span");
  amount.innerText = `amount: ${product.amount}`;
  config.appendChild(amount);
  //br
  let br = document.createElement("br");
  config.appendChild(br);
  //a in config
  let a = document.createElement("a");
  a.href = "#";
  a.innerText = "자신에게 맞는 사이즈 찾아보기";
  config.appendChild(a);
  //   Product Pricing
  //   <div class="product-price"> in right
  let price = document.createElement("div");
  price.className = "product-price";
  right.appendChild(price);
  ///span> in price
  let span1 = document.createElement("span");
  span1.innerText = `${product.price} $`;
  price.appendChild(span1);
  //     <a href="#" class="cart-btn">Add to cart</a> in price
  let cart = document.createElement("a");
  cart.href = "#";
  cart.className = "cart-btn";
  cart.innerText = "Add to cart";
  cart.addEventListener("click", toCart);
  price.appendChild(cart);
}
// כפתור חזור אחורה
function back() {
  window.history.back();
}
// הוסף לסל
function toCart() {
  //  בדיקה האם המשתמש עבר בכניסה או נכנס כאורח
  let thisU = JSON.parse(sessionStorage.getItem("uN"));
  if (thisU == undefined) window.location = "../html/enter.html";
  else {
    //locaדחיפת המוצר לתוך ה
    let users = JSON.parse(localStorage.getItem("users"));
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
}
//  מוצר נוסף בהצלחה
function add() {
  let h4 = document.getElementsByTagName("h4")[0];
  h4.hidden = false;
  setTimeout(() => {
    h4.hidden = true;
  }, 1500);
}
