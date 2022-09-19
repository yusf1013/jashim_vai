let x = Number(prompt("Input number"));

for(let i = 1; i <= 10; i++) {
    let newNode = document.createElement("li");
    newNode.innerHTML = `${x} * ${i} = ${x * i}`;

    document.getElementById("ul").appendChild(newNode);
}