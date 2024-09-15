const BOX=document.getElementById('box');
const widthI=document.getElementById('boxWidth');
const hieghtI=document.getElementById('boxHieght');
const colorI=document.getElementById('boxColor');
const raduisI=document.getElementById('boxReduis');

const reset=document.getElementById('reset');
widthI.addEventListener('change',function(){
    BOX.style.width=widthI.value+"vw";
})

hieghtI.addEventListener('change',function(){
    BOX.style.height=hieghtI.value+"vh";
})

raduisI.addEventListener('change',function(){
    BOX.style.borderRadius=raduisI.value+"px";
})
colorI.addEventListener('change',function(){
    BOX.style.backgroundColor=colorI.value;
})

reset.addEventListener('click',function(){
    BOX.style.width="30vw";
    BOX.style.height="40vh";
    BOX.style.backgroundColor="blue";
    BOX.style.borderRadius="0px";


})