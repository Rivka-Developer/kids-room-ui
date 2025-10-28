// פונקציה המעבירה כל 3 שניות תמונה
let a = setInterval(() => {
    let d=document.getElementById('showcase')
    let r=Math.floor(Math.random()*16+1)
   d.style.backgroundImage=`url(../p/${r}.webp)`
}, 3000)