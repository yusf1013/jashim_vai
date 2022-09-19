let colors = ["red", "green", "blue"];
let initialColors = [];

function setRandomColor(){
    let buttons = document.getElementsByTagName("button");
    let randomColors = [];

    for(let i = 0; i< buttons.length; i++) {
        let randomColor = colors[ Math.floor(Math.random() * 3) ];
        buttons[i].style.color = randomColor;
        randomColors.push(randomColor);
    }
    return randomColors;
}

initialColors = setRandomColor();

function buttonPress(item) {
    if(item.value === "random") {
        setRandomColor();
    } 
    else if(item.value === "reset") {
        let buttons = document.getElementsByTagName("button");
        for(let i = 0; i< buttons.length; i++) {
            buttons[i].style.color = initialColors[i];
        }
    }
    else {
        let buttons = document.getElementsByTagName("button");
        for(let i = 0; i< buttons.length; i++) {
            buttons[i].style.color = item.value;
        }
    }
}