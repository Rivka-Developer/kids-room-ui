// בודק האם המשתמש קיים
function checklogin() {
    let mail= document.getElementsByTagName('input')[1]

    let arrstr = localStorage.getItem('users')
    let arruser = JSON.parse(arrstr)
    let i
    if (arruser == null)
        save()
    else {
        for (i = 0; i < arruser.length; i++) {
            if (mail.value == arruser[i].uEmail) {
                alert('המשתמש קיים')
                window.location = './enter.html'
                break
            }
            else {
                save()
                break
            }
        }
    }
}
//בודק האם כל השדות מלאים
function isFull(){

    event.preventDefault()
    let inputs= document.getElementsByTagName('input')
    let f=1;
    for (let index = 0; index < inputs.length; index++) {
        if(inputs[index].value==''){
            alert("fill all the fields")
        f=0}  
    }
    if (f==1)
    checklogin()

}
// שומר משתמש בזיכרון המקומי
function save() {
    let inputs = document.getElementsByTagName('input')
    let user = {
        uName: inputs[0].value,
        uEmail: inputs[1].value,
        upass: inputs[2].value,
        cart:new Array()
    }
    let userStr = JSON.stringify(user)
    let arrstr = localStorage.getItem('users')
    if (arrstr == null)
        arruser = []
    else
        arruser = JSON.parse(arrstr)
    arruser.push(user)
    arrstr = JSON.stringify(arruser)
    localStorage.setItem('users', arrstr)
    window.location = './enter.html'
}

//בודק תקינות
let f = 0
    //רק באנגלית
function checkName() {
    let sp = document.getElementsByTagName("span")[0]
    if (event.key < 'A' && event.key != ' ' || event.key > 'Z' && event.key < 'a' || event.key > 'z') {
        event.preventDefault()
        sp.hidden = false
        f = 1
    }
    else {
        f = 0
        sp.hidden = true
    }

}
 //רק ספרות
function checkPassword(){
     let sp = document.getElementsByTagName("span")[1] 
     if (event.key < 'A' && event.key != ' ' || event.key > 'Z' && event.key < 'a' || event.key > 'z'&& event.key < 'א' || event.key > 'ת') {
        f = 0
        sp.hidden = true
    }
    else {
        event.preventDefault()
        sp.hidden = false
        f = 1
    }

}
 //החזרת הפוקוס
function focuss() {
    if (!event.currentTarget.validity.valid || f == 1) {
        event.currentTarget.focus()
    }
}




