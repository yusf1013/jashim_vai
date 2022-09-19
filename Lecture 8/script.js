console.log("Hello world!");

// let h1_arr = document.getElementsByTagName("h1");
// h1_arr[0].innerHTML = "This is an HTML page";

// document.getElementsByTagName("h1")[0].innerHTML = "ss";

// document.getElementById("second").innerHTML = "Empty";

// document.getElementsByClassName("para")[0].innerHTML = "ss";

// let x = document.getElementsByTagName("a")[0];
// console.log(x.href);
// x.href = "http://www.facebook.com";

// let image = document.getElementById("gertrude");
// console.log(image.src);
// console.log(image.alt);

// let image = document.getElementsByTagName("img")[0];
// let node = document.createTextNode(image.alt);
// image.parentNode.replaceChild(node, image);

// let str = "";

// // if(str.length != 0)
// //     console.log("Not empty");
// // else 
// //     console.log("empty")

// if(str)
//     console.log("Not empty");
// else 
//     console.log("empty")


// let images = document.getElementsByTagName("img");
// console.log("Starting len:", images.length)
// // for(let i = 0; i < images.length; i++)
// for(let i = images.length - 1; i >= 0; i--)
// {
//     if(images[i].alt)
//     {
//         let node = document.createTextNode(images[i].alt);
//         images[i].parentNode.replaceChild(node, images[i]);
//         console.log(images.length)
//     }
// }


// let newNode = document.createElement("button");
// newNode.innerHTML = "Click me";
// // document.body.appendChild(newNode);

// // document.body.insertBefore(newNode, document.body.children[7])
// let myImage = document.getElementById("gertrude1");
// myImage.parentNode.insertBefore(newNode, myImage);

// document.getElementById("gertrude1").remove();


let paras = document.getElementsByTagName("p");
paras[0].style.color = "black";
paras[0].style.fontSize = "15px";

console.log(document.querySelectorAll("#second"));

let count = 1;
function myFunc() {
    // document.body.appendChild( document.createTextNode("HI") );
    // document.body.append("hi");
    // document.body.append("<h1>hi</h1>");
    
    // let newNode = document.createElement("h1");
    // newNode.innerHTML = `${count}. hi`;
    // document.body.append(newNode);
    // count++;

    let newNode = document.createElement("h1");
    // newNode.innerHTML = `${count++}. hi`;
    newNode.innerHTML = `${++count}. hi`;
    document.body.append(newNode);
}

function changeColor(btn) {
    // document.getElementById("button").style.backgroundColor = "green";
    btn.style.backgroundColor = "green";
    document.body.style.backgroundColor = "blue";
}

function onChange(item){
    console.log(item.value);
}