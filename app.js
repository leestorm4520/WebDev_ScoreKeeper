function score(id){
    const p=document.getElementById('id');
    static s1;
    static s2;
    if(p==='p1') s1++;
    if(p==='p2') s2++;
    const o=document.getElementById("total");
    const total= parseInt(o.options[o.selectedIndex].text);
    const p1=document.getElementById("p1");
    const p2=document.getElementById("p2");
    if(s1+s2>total){
        p1.disabled=true;
        p2.disabled=true;
    }
    else{
        p1.disabled=false;
        p2.disabled=false;
    }
    const point=document.getElementsByTagName('h1')[0];
    point.innerText=s1+' to '+s2;
}



