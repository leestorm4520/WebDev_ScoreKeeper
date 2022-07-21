const p1=document.getElementById("p1");
const p2=document.getElementById("p2");
const o=document.getElementById("total");
const point=o.options[o.selectedIndex].value;
const reset=document.getElementById("reset");
const s1=document.getElementById("s1");
const s2=document.getElementById("s2");


p1.addEventListener('click', function(){
    s1.textContent=`${parseInt(s1.textContent)+1}`;

})
p2.addEventListener('click', function(){
    s2.textContent=`${parseInt(s2.textContent)+1}`;
})

document.addEventListener('click', function(){
    console.log(parseInt(s1.textContent)+parseInt(s2.textContent))
    if(parseInt(s1.textContent)+parseInt(s2.textContent)>point){
        p1.disabled=true;
        p2.disabled=true;
    }
    else{
        p1.disabled=false;
        p2.disabled=false;
    }
})

reset.addEventListener('click',function(){
    s1.textContent=0;
    s2.textContent=0;
})

