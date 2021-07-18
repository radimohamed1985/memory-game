document.querySelector('.start span').onclick = function () {

    let name = prompt('what is your name ? ')

    if(name =="" || name == null)

    {document.querySelector('.info span').innerHTML = 'unknown';}

    else{document.querySelector('.info span').innerHTML =name;}

document.querySelector('.start').remove();


var blockimg = Array.from(document.querySelectorAll('.memorygame .block'));

blockimg.forEach ((block) =>{

    block.classList.add('fliped');
setTimeout(() => {block.classList.remove('fliped');
    
}, 3000); });

console.log (blockimg.length)

}


var blockimg = Array.from(document.querySelectorAll('.memorygame .block'));

// console.log(blockimg)

let ordring = Array.from(Array(blockimg.length).keys());

shuffle(ordring);

blockimg.forEach ((block,index) =>{

    block.style.order = ordring[index];
    block.addEventListener('click',function()
    {flip(block);});
})

function shuffle(Array) { 
    let current = Array.length;

    while(current>0){
    let random = Math.floor (Math.random()*current);
    current--;
    temp = Array[current];
    Array[current]=Array[random];
    Array[random]=temp ; };
    return Array

}

function flip(flipedblock){
    flipedblock.classList.add('fliped');
// var allflip = blockimg; console.log(allflip.length)
    var allflip = blockimg.filter(x => x.classList.contains('fliped'));
    if (allflip.length === 2){ 
        noclicking();
        thecheck(allflip[0],allflip[1])
    };
   
}
var container = document.querySelector('.memorygame');
 function noclicking() { 
    container.classList.add('noclicking');

    setTimeout(()=>{container.classList.remove('noclicking')},1000);


 }
function thecheck(firstblock,secandblock)  { 
    if (firstblock.dataset.group === secandblock.dataset.group){ 
        
        firstblock.classList.remove('fliped');
        secandblock.classList.remove('fliped'); 

        firstblock.classList.add('has-match');
        secandblock.classList.add('has-match');
        hasmatch();
    }
    else {
      setTimeout(()=>{
        firstblock.classList.remove('fliped');
        secandblock.classList.remove('fliped');
    },1000);
    }
}

hasmatch();
function hasmatch(){
 
    var allmatch = blockimg.filter(x => x.classList.contains('has-match'));
    if (allmatch.length === 16){ 
       alert ('good play agian ?' );
       window.reload();
    };
   
}