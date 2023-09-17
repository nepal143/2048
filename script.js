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
        // boxes[empty[Math.floor(number)]].style.backgroundColor = "yellow";
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
        UpArrow();
        UpArrow();
        UpArrow();
        UpArrow();
        random_spawn();
        change_color();
    }
    else if (e.keyCode == '40') {
        console.log("down")
        DownArrow();
        DownArrow();
        DownArrow();
        DownArrow();
        random_spawn();
        change_color();
    }
    else if (e.keyCode == '37') {
       console.log("left");
       changenumber("left");
       LeftArrow();
       LeftArrow();
       LeftArrow();
       LeftArrow();
       random_spawn();
       change_color();
    }
    else if (e.keyCode == '39') {
       console.log("right");
       changenumber("right");
       RightArrow();
       RightArrow();
       RightArrow();
       RightArrow();
       random_spawn();
       change_color();
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

                
            }
        }
    }
}

const UpArrow = ()=>{
    for(var i =0 ;  i < 4 ;i++){
        for(var j = 3 ;j>0;j--){
            if(array[j][i] == array[j-1][i] || array[j-1][i].innerHTML === "" ){
                if(array[j][i].innerHTML == array[j-1][i].innerHTML){
                    // array[i][j+1].innerHTML *= 2;
                }
                
                if(array[j-1][i].innerHTML  == "2"){
                    
                    console.log("hello");
                    array[j-1][i].innerHTML *= 2;
                }
                 array[j-1][i].innerHTML =array[j][i].innerHTML
                array[j][i].innerHTML = "" ;

                
            }
        }
    }

}
const DownArrow = ()=>{
    for(var i =0 ;  i < 4 ;i++){
        for(var j = 0 ;j<3;j++){
            if(array[j][i] == array[j+1][i] || array[j+1][i].innerHTML === "" ){
                if(array[j][i].innerHTML == array[j+1][i].innerHTML){
                    // array[i][j+1].innerHTML *= 2;
                }
                
                if(array[j+1][i].innerHTML  == "2"){
                    
                    console.log("hello");
                    array[j+1][i].innerHTML *= 2;
                }
                 array[j+1][i].innerHTML =array[j][i].innerHTML
                array[j][i].innerHTML = "" ;

                
            }
        }
    }
}

const colors = ["#d8d8d8","yellow" , "blue" , "orange" , "red"];

const change_color = ()=>{
    for(var i = 0 ;i < 16 ;i ++){
        if(boxes[i].innerHTML != ""){
            boxes[i].style.backgroundColor = `${colors[Math.log2(boxes[i].innerHTML)]}`
        }
        else{
            boxes[i].style.backgroundColor = `${colors[0]}`
        }
    }
}
change_color();
const changenumber  = (key)=>{
    if(key == "right" || key === "left"){
        for(var i =  0 ;i < 4;i++){
            let list = [] ;
            for(var j = 0 ;j < 4 ;j++){
                if(array[i][j].innerHTML != ""){
                    list.push(array[i][j].innerHTML)
                }
            }
            if(key == "right"){

                for(var j =list.length-1 ;j >0 ;j--){
                    if(list[j] == list[j-1]){
                        list[j]*= 2;
                        list[j-1] = "";
                    }
                }
                for(var j = 0 ; j < list.length ;j++){
                    console.log(list[j]);
                    array[i][3-j].innerHTML = list[j] ;
                }
                for(var j = list.length ; j< 4 ;j++){
                    array[i][3-j].innerHtml = "" ;
                }
            }
            else if(key == "left"){
                for(var j =0 ;j <list.length-1 ;j++){
                    if(list[j] == list[j+1]){
                        list[j]*= 2;
                        list[j+1] = "";
                    }
                }
                for(var j = 0 ; j < list.length ;j++){
                    array[i][j].innerHTML = list[j] ;
                }
                for(var j = list.length ; j< 4 ;j++){
                    array[i][j].innerHtml = "" ;
                }
            }

        }

    }
}