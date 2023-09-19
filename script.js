let boxes = document.getElementsByClassName("inner-box");
const win = document.getElementById("win");
const lose = document.getElementById("lose");
let array = [
    [boxes[0], boxes[1], boxes[2], boxes[3]],
    [boxes[4], boxes[5], boxes[6], boxes[7]],
    [boxes[8], boxes[9], boxes[10], boxes[11]],
    [boxes[12], boxes[13], boxes[14], boxes[15]],
];
let score = document.getElementsByClassName("score-box")[0];
const random_spawn = () => {
    let empty = [];
    for (let i = 0; i < 16; i++) {
        if (boxes[i].innerHTML === "") {
            empty.push(i);
        }
        if(boxes[i].innerHTML == "2048"){
            win();
        }
    }
    if (empty.length == 0) {
        GameOver();
    } else {
        let number = Math.random() * empty.length;
        // console.log(number) ;
        boxes[empty[Math.floor(number)]].innerHTML = "2";
        // boxes[empty[Math.floor(number)]].style.backgroundColor = "yellow";
    }
};
const start = () => {
    random_spawn();
    random_spawn();
};
start();
const clear = () => {
    for (let i = 0; i < 16; i++) {
        boxes[i].innerHTML = "";
    }
};
let changed = false;

const GameOver = () => {
    lose.style.display = "flex";
};

const Win = () =>{
    win.style.display = "flex";
}

document.onkeydown = checkKey;

function checkKey(e) {
    e = e || window.event;

    if (e.keyCode == "38") {
        // console.log("up")
        changenumber("up");
        UpArrow();
        UpArrow();
        UpArrow();
        UpArrow();
        random_spawn();
        change_color();
    } else if (e.keyCode == "40") {
        // console.log("down")
        changenumber("down");
        DownArrow();
        DownArrow();
        DownArrow();
        DownArrow();
        random_spawn();
        change_color();
    } else if (e.keyCode == "37") {
        //    console.log("left");
        changenumber("left");
        LeftArrow();
        LeftArrow();
        LeftArrow();
        LeftArrow();
        random_spawn();
        change_color();
    } else if (e.keyCode == "39") {
        //    console.log("right");
        changenumber("right");
        RightArrow();
        RightArrow();
        RightArrow();
        RightArrow();
        random_spawn();
        change_color();
    }
}
const RightArrow = () => {
    for (var i = 0; i < 4; i++) {
        for (var j = 0; j < 3; j++) {
            if (array[i][j] == array[i][j + 1] || array[i][j + 1].innerHTML === "") {
                changed = true;

                array[i][j + 1].innerHTML = array[i][j].innerHTML;
                array[i][j].innerHTML = "";
            }
        }
    }
};
const LeftArrow = () => {
    for (var i = 0; i < 4; i++) {
        for (var j = 3; j > 0; j--) {
            if (array[i][j] == array[i][j - 1] || array[i][j - 1].innerHTML === "") {
                array[i][j - 1].innerHTML = array[i][j].innerHTML;
                array[i][j].innerHTML = "";
            }
        }
    }
};

const UpArrow = () => {
    for (var i = 0; i < 4; i++) {
        for (var j = 3; j > 0; j--) {
            if (array[j][i] == array[j - 1][i] || array[j - 1][i].innerHTML === "") {
                array[j - 1][i].innerHTML = array[j][i].innerHTML;
                array[j][i].innerHTML = "";
            }
        }
    }
};
const DownArrow = () => {
    for (var i = 0; i < 4; i++) {
        for (var j = 0; j < 3; j++) {
            if (array[j][i] == array[j + 1][i] || array[j + 1][i].innerHTML === "") {
                array[j + 1][i].innerHTML = array[j][i].innerHTML;
                array[j][i].innerHTML = "";
            }
        }
    }
};

const colors = [
    "#d8d8d8",
    "green",
    "orange",
    "red",
    "blue",
    "brown",
    "yellow",
    "pink",
    "cyan",
    "coral",
    "darkcyan",
    "hotpink",
    "purple",
    "neon",
];

const change_color = () => {
    for (var i = 0; i < 16; i++) {
        if (boxes[i].innerHTML != "") {
            boxes[i].style.backgroundColor = `${colors[Math.log2(boxes[i].innerHTML)]
                }`;
        } else {
            boxes[i].style.backgroundColor = `${colors[0]}`;
        }
    }
};
change_color();
const changenumber = (key) => {
    if (key == "right") {
        for (var i = 0; i < 4; i++) {
            var numbers = [];
            // getting all number in a row
            for (var j = 0; j < 4; j++) {
                if (array[i][j].innerHTML != "") {
                    numbers.push(array[i][j].innerHTML);
                }
            }

            // summing all number if they are equal

            for (var j = 0; j < numbers.length; j++) {
                if (numbers[j] === numbers[j + 1]) {
                    numbers[j + 1] *= 2;
                    score.innerHTML = parseInt(score.innerHTML) + numbers[j + 1];
                    numbers[j] = "";
                }
                console.log(numbers[j]);
            }

            // rewritting the numbers
            var p = 3;
            for (var j = 0; j < 4; j++) {
                array[i][j].innerHTML = "";
            }
            for (var j = numbers.length - 1; j >= 0; j--) {
                array[i][p].innerHTML = numbers[j];
                p--;
            }
        }
    }

    if (key == "left") {
        for (var i = 0; i < 4; i++) {
            var numbers = [];
            // getting all number in a row
            for (var j = 0; j < 4; j++) {
                if (array[i][j].innerHTML != "") {
                    numbers.push(array[i][j].innerHTML);
                }
            }

            // summing all number if they are equal

            for (var j = numbers.length - 1; j > 0; j--) {
                if (numbers[j] === numbers[j - 1]) {
                    numbers[j - 1] *= 2;
                    score.innerHTML = parseInt(score.innerHTML) + numbers[j - 1];
                    numbers[j] = "";
                }
                console.log(numbers[j]);
            }

            // rewritting the numbers
            for (var j = 0; j < 4; j++) {
                array[i][j].innerHTML = "";
            }
            for (var j = 0; j < numbers.length; j++) {
                array[i][j].innerHTML = numbers[j];
            }
        }
    }

    if (key == "up") {
        for (var i = 0; i < 4; i++) {
            var numbers = [];
            // getting all number in a row
            for (var j = 0; j < 4; j++) {
                if (array[j][i].innerHTML != "") {
                    numbers.push(array[j][i].innerHTML);
                }
            }

            // summing all number if they are equal

            for (var j = numbers.length - 1; j > 0; j--) {
                if (numbers[j] === numbers[j - 1]) {
                    numbers[j - 1] *= 2;
                    score.innerHTML = parseInt(score.innerHTML) + numbers[j - 1];
                    numbers[j] = "";
                }
                console.log(numbers[j]);
            }

            // rewritting the numbers
            for (var j = 0; j < 4; j++) {
                array[j][i].innerHTML = "";
            }
            for (var j = 0; j < numbers.length; j++) {
                array[j][i].innerHTML = numbers[j];
            }
        }
    }

    if (key == "down") {
        for (var i = 0; i < 4; i++) {
            var numbers = [];
            // getting all number in a row
            for (var j = 0; j < 4; j++) {
                if (array[j][i].innerHTML != "") {
                    numbers.push(array[j][i].innerHTML);
                }
            }

            // summing all number if they are equal

            for (var j = 0; j < numbers.length; j++) {
                if (numbers[j] === numbers[j + 1]) {
                    numbers[j + 1] *= 2;
                    score.innerHTML = parseInt(score.innerHTML) + numbers[j + 1];
                    numbers[j] = "";
                }
                console.log(numbers[j]);
            }

            // rewritting the numbers
            var p = 3;
            for (var j = 0; j < 4; j++) {
                array[j][i].innerHTML = "";
            }
            for (var j = numbers.length - 1; j >= 0; j--) {
                array[p][i].innerHTML = numbers[j];
                p--;
            }
        }
    }
};
