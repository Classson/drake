const quizContainer = document.getElementById('quiz');

const resultsContainer = document.getElementById('results');

const submitButton = document.getElementById('submit');

function buildQuiz(){
    //array to store the output
    const output = [];
    
    //for each question
    myQuestions.forEach(
        (currentQuestion, questionNumber) => {
            //list of answer choices
            const answers = [];
            
            //each answer
            for(letter in currentQuestion.answers){
                
                //html radio button
                answers.push(
                <label>
                    <input type="radio" 
                    name="question${questionNumber}" value="${letter}">
                    
                    ${letter} :
                    ${currentQuestion.answers[letter]}
                </label>
                
                );
            }
            //add question and answer to output
            output.push(
            <div class="question"> $(currentQuestion.question)</div>
            );
        }
    
    );
    
    //combine output string of html and display
    quizContainer.innerHTML = output.join('');
}

function showResults(){}

//display quiz
buildQuiz();

//show results on submit

submitButton.addEventListener(click, showResults);