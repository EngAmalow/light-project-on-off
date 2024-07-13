

let light = document.querySelector("#light")
let OnButton  = document.querySelector("#ON")
let OffButton = document.querySelector("#OFF")


OnButton.addEventListener("click", function(){
light.style.backgroundColor = "yellow"
OnButton.style.backgroundColor = "red"
OffButton.style.backgroundColor = ""
})

OffButton.addEventListener("click", function(){
light.style.backgroundColor = "white"
OffButton.style.backgroundColor = "red"
OnButton.style.backgroundColor = ""
})

 
 