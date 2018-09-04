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

function buildQuiz (questions, quizContainer, resutlsContainer) {
    
    
    function showQuestions(questions, quizContainer){
        
    }
    
    function showResults(questions, quizContainer, resutlsContainer) {
        
    }
    
    showQuestions(questions, quizContainer);
    
    submitButton.onclick = function (){
        showResults(questions, quizContainer, resutlsContainer);
    }
}