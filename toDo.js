let a=document.getElementById("add");
a.addEventListener("click",function(){
    let ul1=document.getElementById("Eat");
    let inp=document.getElementById("inp");
    let li=document.createElement("li");
    li.innerHTML=inp.value;
    ul1.append(li);

})