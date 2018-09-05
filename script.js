/*
Quotes

1   Drake- "Next time we fuck, I don't wanna fuck, I wanna make         love. Next time we talk, I don't wanna just talk, I wanna           trust. Next time I stand tall I wanna be standing for you"
    (Own It)
    
2    “Breathe in deep, let it out slow. Did you hear it’s all my        fault again? I know why no one else knows why I am all alone        again.”
    (The Early November, Every Night's Another Story)


3   Drake- "Whose bed are you sleeping in? Someone's been hiding       you, where have you been?"
    (Come Thru)

4    "Last night everything was right and the rain was gone. One        summer night’s the only time we’ve known. Shut your eyes and        when you wake i’ll be gone."
    (The Get Up Kids, I'm a loner Dottie, A Rebel)
    
    
5   Drake- "The girl I wanna save is like a danger to my health.       Try being with somebody that wanna be somebody else."
    (The Motion)

6   Drake "So cry if you need to, but I can't stay to watch you /       That's the wrong thing to do."
    (Doing it Wrong)

7   Drake "You love me, and I love you, and your heart hurts, mine     does too"
    (Look What You've done)
    
8   Drake "Where did the other half of my heart go? Why am I in bed     alone?"
    (where were you)

9   Drake "I never had you, although I would be glad to/I'd             probably go and tattoo, your name on my heart.”
    (Houstatlantavegas)

10  Drake "I'm scared that every girl I care for will find a better     man and end up happier in the long run."
    ("Missing You (Remix)" (2009) ft Trey Songz)
    
11  Drake "I need you to rescue me from my destiny/I'm trying to       live right and give you whatever's left of me.”
    ("Unthinkable (Remix)" (2010) ft Alicia Keys)





*/

const myQuestions = [
    {
        question: "Next time we fuck, I don't wanna fuck, I wanna make love. Next time we talk, I don't wanna just talk, I wanna trust. Next time I stand tall I wanna be standing for you",
        answers: {
            a: Drake,
            b: Emo
    },
        correctAnswer: 'a'
    },
    {
        question: "Breathe in deep, let it out slow. Did you hear it’s all my fault again? I know why no one else knows why I am all alone again.",
        answers: {
            a: Drake,
            b: Emo
        },
        correctAnswer: 'b'
    }
]

let quizContainer = document.getElementById('quiz');
let resultsContainer = document.getElementById('results');
let submitButton = document.getElementById('submit');


function buildQuiz (questions, quizContainer, resutlsContainer) {
    
    
    function showQuestions(questions, quizContainer){
        let output = [];
        let answers;
        
        for(let i = 0; i < questions.length; i++){
            answers = [];
            for(letter in questions[i].answers){
                answers.push('<label>'
                            + '<input type="radio" name="question' +i+ '" value="'+letter+'">'
                            + letter + ': '
                            + questions[i].answers[letter]
                            + '</label>');
            }
            
            outpush.push(
            '<div class="question">' + questions[i].question + '</div>' + '<div class="answers>' + answers.join('') + '</div>');
        }
        
        quizContainer.innerHTML = output.join('');
        
    }
    
    function showResults(questions, quizContainer, resutlsContainer) {
        let answerContainers = quizContainer.querySelectorAll('.answers');
        
        let userAnswer = '';
        let numCorrect = 0;
        
        for(let i = 0; i < questions.length; i++){
            
            userAnswer = (answerContainers[i].querySelector('input[name=question' +i+']:checked')|| {}).value;
            
            if(userAnswer === question[i].correctAnswer){
                numCorrect++;
                
                answerContainers[i].style.color = 'lightgreen';
            }
            
            else {
                answerContainers[i].style.color = 'red';
            }
        }
        
        resultsContainer.innerHTML = numCorrect + ' Out of ' + questions.length;
    }
    
    showQuestions(questions, quizContainer);
    
    submitButton.onclick = function (){
        showResults(questions, quizContainer, resutlsContainer);
    }
}

buildQuiz(myQuestions, quizContainer, resultsContainer, submitButton);

