let questions = [
    {
        "question": "Who, in 1903, was the first woman to win a Nobel Prize?",
        "options": ["Marie Curie", "Pierre Curie", "Röntgen", "Plank"],
        "answer": "Marie Curie"
    },
    {
        "question": "Question 2?",
        "options": ["Option 1", "Option 2", "Option 3", "Option 4"],
        "answer": "Option 1"
    },
    {
        "question": "Question 3?",
        "options": ["Option 1", "Option 2", "Option 3", "Option 4"],
        "answer": "Option 1"
    },
    {
        "question": "Question 4?",
        "options": ["Option 1", "Option 2", "Option 3", "Option 4"],
        "answer": "Option 1"
    },
    {
        "question": "Question 5?",
        "options": ["Option 1", "Option 2", "Option 3", "Option 4"],
        "answer": "Option 1"
    }
];

questions.sort(() => Math.random() - 0.5);
let currentQuestionIndex = 0;
let selectedQuestion;

let userScore = 0;

loadQuestionInPage();

function loadQuestionInPage(){
    // selectedQuestion = questions[0];
    selectedQuestion = questions[currentQuestionIndex];
    document.getElementById("q").innerHTML = selectedQuestion['question'];
    selectedQuestion.options.sort(() => Math.random() - 0.5);
    console.log(selectedQuestion.options);

    let labels = document.getElementsByTagName("label");

    for(let i = 0; i < selectedQuestion.options.length; i++) {
        labels[i].innerHTML = selectedQuestion.options[i];
    }

    currentQuestionIndex++;
}

function checkAnswer() {
    let checkedIndex;
    let radios = document.getElementsByTagName("input");

    for(let i = 0; i < radios.length; i++) {
        if(radios[i].checked)
            checkedIndex = i;
    }

    if(checkedIndex == undefined)
    {
        alert("Please select an option");
        return;
    }

    if(selectedQuestion.options[checkedIndex] === selectedQuestion.answer)
        userScore++;
    else
        console.log("Incorrect!");

    
    resetOptions();
    if(currentQuestionIndex < questions.length)
        loadQuestionInPage();
    else
        displayScore();



}

function resetOptions(){
    let inputs = document.getElementsByTagName("input");
    for(input of inputs)
        input.checked = false;
}

function reload() {
    window.location.reload();
}
// let reload = () => 2;

function displayScore(){
    document.getElementById("score").innerHTML = `Your score is ${userScore}/${questions.length}`;
    document.getElementById("questionSection").style.display = "none";

    let newNode = document.createElement("button");
    newNode.innerHTML = "RESET";
    newNode.onclick = reload; // right
    // newNode.onclick = reload(); // wrong
    // newNode.setAttribute("onclick", "reload()");
    document.body.append(newNode);
}

// // This is possible
// let newVar = reload;
// newVar(); // Same as calling reload();


