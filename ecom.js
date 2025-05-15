//search
var search=document.querySelector(".typing")
var box=document.querySelectorAll(".col-6")
var l=document.getElementsByTagName("h2")
search.addEventListener('keyup',(item)=>{
const typed=search.value.toUpperCase()
for(i=0;i<=l.length;i++)
    {
const nam=box[i].getElementsByTagName("h2")[0]
const val= nam.innerHTML || nam.textContent
if(val.toUpperCase().indexOf(typed) > -1){
    box[i].style.display=""
}
else{
    box[i].style.display="none"
}
}
})

//filters

var all=document.getElementById("all")
var tools=document.getElementById("tools")
var fab=document.getElementById("fabric")
var kits=document.getElementById("kits")
var box=document.querySelectorAll(".col-6")
function tls(){
    
all.style.backgroundColor="white"
all.style.color="black"
fab.style.color="black"
kits.style.color="black"
fab.style.backgroundColor="white"
kits.style.backgroundColor="white"
tools.style.backgroundColor="maroon"
tools.style.color="white"
box.forEach((e)=>{
    var data=e.dataset.item
    if(data=="tools"){
        e.style.display=""
    }
    else{
         e.style.display="none"
    }
})
}
function al(){
    
tools.style.backgroundColor="white"
tools.style.color="black"
fab.style.color="black"
kits.style.color="black"
fab.style.backgroundColor="white"
kits.style.backgroundColor="white"
all.style.backgroundColor="maroon"
all.style.color="white"
box.forEach((e)=>{
    
        e.style.display=""
    
})
}

function fbs(){
all.style.backgroundColor="white"
all.style.color="black"
tools.style.color="black"
kits.style.color="black"
tools.style.backgroundColor="white"
kits.style.backgroundColor="white"
fab.style.backgroundColor="maroon"
fab.style.color="white"
box.forEach((e)=>{
    var data=e.dataset.item
    if(data=="fab"){
        e.style.display=""
    }
    else{
         e.style.display="none"
    }
})
  
}
function kts(){
all.style.backgroundColor="white"
all.style.color="black"
tools.style.color="black"
fab.style.color="black"
tools.style.backgroundColor="white"
fab.style.backgroundColor="white"
kits.style.backgroundColor="maroon"
kits.style.color="white"
box.forEach((e)=>{
    var data=e.dataset.item
    if(data=="kit"){
        e.style.display=""
    }
    else{
         e.style.display="none"
    }
})
}
