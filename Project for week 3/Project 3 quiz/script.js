// dictionary DEMO

// let dict = {
//     "name": "George",
//     "age": 21,
//     "height": "5ft 5"
// };

// console.log(dict.age);
// console.log( dict['age'] );

// let arr = [0, 1, 2];
// console.log(arr[1]);

// let arrQA = [
//     {
//         "Q": "Who was the first president of USA?",
//         "A": "George Washington"
//     },
//     {
//         "Q": "This is another question",
//         "A": "This is another answer"
//     }
// ]

// console.log(arrQA[0].Q)
// console.log(arrQA[1].Q)


// console.log(arrQA[0].A)
// console.log(arrQA[1].A)

// function checkItem(item){
//     // console.log("Hello", item.srcElement);
//     let li = item.srcElement;
//     li.style.textDecoration = "line-through";
// }

function checkItem(item){
    if(item.style.textDecoration === "line-through")
        item.style.textDecoration = "";
    else
        item.style.textDecoration = "line-through";
}

function submit(){
    let item = document.getElementById("item").value;
    console.log(item, "Added");

    if(item){ // if(item.length > 0) // if item is not empty, null, or undefined
        let ul = document.getElementById("list");
        let newNode = document.createElement("li");
        
        // newNode.onclick = checkItem; //DON'T use this - newNode.onclick = checkItem();
        // newNode.onclick = 'checkItem(this)';
        newNode.setAttribute('onclick', 'checkItem(this)');
        // newNode.style.color = ""
        newNode.innerHTML = item;

        ul.appendChild(newNode);

        document.getElementById("item").value = "";
    }
}

function changeView(value){
    console.log(typeof value);
    let li = document.getElementsByTagName("li");

    if(value === "1") {
        for(let i = 0; i < li.length; i++) {
            if(li[i].style.textDecoration !== "line-through")
                li[i].style.display = "none";
            else
                li[i].style.display ="";
        }
    }
    else if (value === "2") {
        for(let i = 0; i < li.length; i++) {
            if(li[i].style.textDecoration === "line-through")
                li[i].style.display = "none";
            else
                li[i].style.display ="";
        }
    }
    else {
        for(let i = 0; i < li.length; i++) {
            li[i].style.display = "";
        }
    }
}




