let x=document.getElementById("ele1");
let y=document.getElementById("ele2");
let z=document.getElementById("ele3");
x.addEventListener("click",function(){
    x.style.color="red";
    x.style.backgroundColor="yellow";
})    
x.addEventListener("mouseleave",function(){
    x.style.color="black";
    x.style.backgroundColor="white";
})       




y.addEventListener("mouseenter",function(){
    y.style.color="white";
    y.style.backgroundColor="orange";
}) 

y.addEventListener("mouseleave",function(){
    y.style.color="black";
    y.style.backgroundColor="white";
}) 

      
    

z.addEventListener("click",function(){
    z.style.color="white";
    z.style.backgroundColor="purple";
})    



z.addEventListener("click",function(){
    x.style.color="white";
    x.style.backgroundColor="green";
    x.innerHTML="bulbar";
})    



m=document.getElementById("ele4");
m.addEventListener("mousemove",function(){
    m.style.color="white";
    m.style.backgroundColor="brown";
})    
