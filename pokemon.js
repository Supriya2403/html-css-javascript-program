var main=document.getElementById("main");
let arr = [ "https://images.unsplash.com/photo-1605979257913-1704eb7b6246?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

"https://images.unsplash.com/photo-1643725173053-ed68676f1878?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

"https://images.unsplash.com/photo-1698968411588-66f22c988f16?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHBva2Vtb258ZW58MHx8MHx8fDA%3D",

"https://images.unsplash.com/photo-1566577134665-2c674085abf7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

"https://images.unsplash.com/photo-1609845768806-767fcfc317b6?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

"https://images.unsplash.com/photo-1637158881671-f6e4331887e5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

"https://images.unsplash.com/photo-1590955559496-50316bd28ff2?q=80&w=1822&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",]
let s="";


for(let i=1;i<=56;i++){
    let r=Math.floor(Math.random()*arr.length);
    s +=`<div class ="card"><img src=${arr[r]}></div>`; 
}
main.innerHTML=s;
