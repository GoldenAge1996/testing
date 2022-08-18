//For the typewriter effect



const TypeWriter = function (txtElement, words, wait = 2000){
    this.txtElement = txtElement
    this.words = words
    this.txt = ''
    this.wordIndex = 0
    this.wait = parseInt(wait,10)
    this.isDeleting = false
    this.type()
    }
    
    
    TypeWriter.prototype.type = function () {
       const current = this.wordIndex % this.words.length
       const fulltxt = this.words[current]
    
        if(this.isDeleting){
            this.txt = fulltxt.substring(0, this.txt.length -1)
        }else{
            this.txt = fulltxt.substring(0, this.txt.length + 1)
        }

        this.txtElement.innerHTML = `<span class ="txt">${this.txt}</span>`
    
    let typeSpeed = 300
    if(this.isDeleting){
        typeSpeed /=2
    }

    if(!this.isDeleting && this.txt === fulltxt){
        typeSpeed = this.wait
        this.isDeleting = true
    } else if(this.isDeleting && this.txt === ""){
        this.isDeleting = false
        this.wordIndex++
        typeSpeed = 500
    }
    
    
    
       setTimeout(()=> this.type(), typeSpeed)
    }
    
    
    
    document.addEventListener("DOMContentLoaded", init)
    
    function init(){
        const txtElement = document.querySelector(".txt-element")
        const words = JSON.parse(txtElement.getAttribute("data-words")) 
        const wait = txtElement.getAttribute("data-wait")
    
        new TypeWriter(txtElement, words, wait)
    }

















//Button Animation

//const { json } = require("express/lib/response")

/* const btns = document.querySelectorAll(".btn a")

btns.forEach((btn,idx) => {
    btn.addEventListener("click", function (){
        btns.classList.add("active")
     

    })
});

console.log(btns)
 */











$("button.v").on("click", function(){
    $("section").slideUp().slideDown()
    $("button.u a").removeClass("active")
    $("button.w a").removeClass("active")
    $("button.v a").addClass("active")
   setTimeout(run, 400)
})

function run(){
    $("#home").addClass("use")
    $("#asin").addClass("use")
    $("#fam").removeClass("use")
}


$("button.u").on("click", function(){
    $("section").slideUp().slideDown()
    $("button.u a").addClass("active")
    $("button.w a").removeClass("active")
    $("button.v a").removeClass("active")
    setTimeout(doit, 400)
   
})

function doit(){
    $("#asin").addClass("use")
    $("#fam").addClass("use")
    $("#home").removeClass("use")
}

$("button.w").on("click", function(){
    $("section").slideUp().slideDown()
    $("button.u a").removeClass("active")
    $("button.w a").addClass("active")
    $("button.v a").removeClass("active")
    setTimeout(doiit, 400)
 
})

function doiit(){
    $("#home").addClass("use")
    
    $("#fam").addClass("use")
    $("#asin").removeClass("use")
}







//Photograph section

const photos = document.querySelectorAll(".photograph")
const arrowleft = document.getElementById("arrowleft")
const arrowright = document.getElementById("arrowright")


const sec = document.querySelector(".sec")
const openi = document.querySelector(".openi")
const remo = document.getElementById("remo")


let idx = 0;

setInterval(ran, 3000)
arrowright.addEventListener("click", ()=>{
    sec.classList.add("show")
})

arrowleft.addEventListener("click", ()=>{
    sec.classList.add("show")
})

function ran (){
    photos.forEach(photo =>{
       photo.classList.remove("current")
       
    })
    idx++
    changeImage()
    setBgToBody()
}

function changeImage(){
    
if(idx > photos.length -1 ){
    idx = 0
    
}else if(idx <0){
    idx = photos.length -1
}

photos.forEach((photo) =>{
    photo.classList.remove("current")
    photos[idx].classList.add("current")
})
}

function setBgToBody(){
    sec.style.backgroundImage = photos[idx].style.backgroundImage
}








const icon = document.getElementById("share");
const iconic = document.querySelector(".sho")

icon.addEventListener("click", function(){
    iconic.classList.toggle("show")
})
























    


// Overlay Effect

// const rap = document.querySelector(".photographs")
// const sec = document.querySelector(".sec")
// const openi = document.querySelector(".openi")
// const remo = document.getElementById("remo")



remo.addEventListener("click", function(){
    sec.classList.remove("show")
})