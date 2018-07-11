(function() {
function buildQuiz(){
    //array to store the output
    const output = [];
    
    //for each question
    myQuestions.forEach(
        (currentQuestion, questionNumber) => {
            //list of answer choices
            const answers = [];
            
            //for each question
            myQuestions.forEach((currentQuestion, questionNumber) => {
                
            //store list of answer choices
            const answers = [];
                
            //for each answer
            for(letter in currentQuestion.answers){
                
                //html radio button
                answers.push(
                `<label>
                    <input type="radio" 
                    name="question${questionNumber}" value="${letter}">
                    
                    ${letter} :
                    ${currentQuestion.answers[letter]}
                </label>`
                
                );
            }
            //add question and answer to output
            output.push(
            `<div class="question"> ${currentQuestion.question}</div>
            <div class="answers">
            $`{answers.join("")}</div>`
            );
        });
    
    //combine output string of html and display
    quizContainer.innerHTML = output.join("");
}

function showResults(){

//gather answer containers
const answerContainers = quizContainer.querySelectorAll(".answers");

//keep track of user's anaswers
    let numCorrect = 0;

//for each questions
    myQuestions.forEach((currentQuestion, questionNumber) => {
        //find selected answer
        const answerContainer = answerContainers[questionNumber];
        const selector = `input[name=question${questionNumber}]:checked`;
        const userAnswer = (answerContainer.querySelector(selector) || {}).value;
        
        //if answer is correct
        if(userAnswer === currentQuestion.correctAnswer) {
            //add to the number of correct answers
            numCorrect++;
            
            //color the answer green
            
            answerContainers[questionNumber].style.color = "lightgreen";
        } else {
            //if answer wrong or blank color red
            
            answerContainers[questionNumber].style.color = "red";
        }
    });
    
//show number of correct results out of total
resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
}

const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');
const myQuestions = [
    question: "What's your cat's name?",
    answers: {
        a: "Coach",
        b: "James"
      },
      correctAnswer: "a"
    },
    {
    question: "What color is he?",
    answers: {
        a: "black",
        b: "orange"
      },
      correctAnswer: "b"
    },
    {
    question: "Is he a good cat?",
    answers: {
        a: "yes",
        b: "no"
      },
      correctAnswer: "a"
    }
];

//display quiz
buildQuiz();

//show results on submit

submitButton.addEventListener(click, showResults);
})();