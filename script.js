let boxes = document.getElementsByClassName("inner-box");
let array = [[boxes[0] ,boxes[1] ,boxes[2],boxes[3]],
[boxes[4] ,boxes[5] ,boxes[6],boxes[7]],
[boxes[8] ,boxes[9] ,boxes[10],boxes[11]],
[boxes[12] ,boxes[13] ,boxes[14],boxes[15]]];

const random_spawn = ()=>{
    let empty =[]; 
    for(let i = 0 ; i< 16 ;i++){
        if(boxes[i].innerHTML ==="" ){
            empty.push(i);
        }
    }
    if(empty.length == 0){
        GameOver();
    }
    else{

        let number = Math.random()*(empty.length)
        console.log(number) ;   
        boxes[empty[Math.floor(number)]].innerHTML = "2" ;
        boxes[empty[Math.floor(number)]].style.backgroundColor = "yellow";
    }
}
const start = ()=>{
    random_spawn();
    random_spawn();
}
start();
const clear = ()=>{

    for(let i = 0 ;i < 16 ;i++){
        boxes[i].innerHTML = "" ;
    }
}


const GameOver = ()=>{
    console.log("GameOver");
}

document.onkeydown = checkKey;

function checkKey(e) {

    e = e || window.event;

    if (e.keyCode == '38') {
        console.log("up")
    }
    else if (e.keyCode == '40') {
        console.log("down")
    }
    else if (e.keyCode == '37') {
       console.log("left");
       
       LeftArrow();
       LeftArrow();
       LeftArrow();
       LeftArrow();
    }
    else if (e.keyCode == '39') {
       console.log("right");
       RightArrow();
       RightArrow();
       RightArrow();
       RightArrow();
    }

}
const RightArrow = () =>{
    for(var i =0 ;  i < 4 ;i++){
        for(var j = 0 ;j<3;j++){
            if(array[i][j] == array[i][j+1] || array[i][j+1].innerHTML === "" ){
                if(array[i][j].innerHTML == array[i][j+1].innerHTML){
                    // array[i][j+1].innerHTML *= 2;
                }
                
                if(array[i][j+1].innerHTML  == "2"){
                    
                    console.log("hello");
                    array[i][j+1].innerHTML *= 2;
                }
                 array[i][j+1].innerHTML =array[i][j].innerHTML
                array[i][j].innerHTML = "" ;
                let current_color = array[i][j].style.backgroundColor;
                array[i][j].style.backgroundColor = "#DBDBDB"; 
                array[i][j+1].style.backgroundColor = current_color; 
                
            }
        }
    }
}
const LeftArrow = () =>{
    for(var i =0 ;  i < 4 ;i++){
        for(var j = 3 ;j>0;j--){
            if(array[i][j] == array[i][j-1] || array[i][j-1].innerHTML === "" ){
                if(array[i][j].innerHTML == array[i][j-1].innerHTML){
                    // array[i][j+1].innerHTML *= 2;
                }
                
                if(array[i][j-1].innerHTML  == "2"){
                    
                    console.log("hello");
                    array[i][j-1].innerHTML *= 2;
                }
                 array[i][j-1].innerHTML =array[i][j].innerHTML
                array[i][j].innerHTML = "" ;
                let current_color = array[i][j].style.backgroundColor;
                array[i][j].style.backgroundColor = "#DBDBDB"; 
                array[i][j-1].style.backgroundColor = current_color; 
                
            }
        }
    }
}

const UpArrow = ()=>{

}
const DownArrow = ()=>{

}
