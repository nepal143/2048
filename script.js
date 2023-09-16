let boxes = document.getElementsByClassName("inner-box");
let array = [[boxes[0] ,boxes[1] ,boxes[2],boxes[3]],
[boxes[4] ,boxes[5] ,boxes[6],boxes[7]],
[boxes[8] ,boxes[9] ,boxes[10],boxes[11]],
[boxes[12] ,boxes[13] ,boxes[14],boxes[15]]];

const upKey =()=>{

}
const clear = ()=>{

    for(let i = 0 ;i < 16 ;i++){
        boxes[i].innerHTML = "" ;
    }
}
const random_spawn = ()=>{
    let empty =[]; 
    for(let i = 0 ; i< 16 ;i++){
        if(boxes[i].innerHTML ==="" ){
            empty.push(i);
        }
    }
    let number = Math.random()*(empty.length)
    console.log(number) ;   
}
window.addEventListener("scroll" ,()=>{
    random_spawn()
}) ;