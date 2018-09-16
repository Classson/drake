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
        answer: "Drake"
    },
    {
        question: "Breathe in deep, let it out slow. Did you hear it’s all my fault again? I know why no one else knows why I am all alone again.",
        answers: {
            a: "Drake",
            b: "Emo"
        },
        correctAnswer: 'b'
    },
    {
        question: 'I know you well enough to know you never loved me',
        answers: {
            a: "Drake",
            b: "Emo"
        },
        correctAnswer: 'b'
    },
    {
        question: "Whose bed are you sleeping in? Someone's been hiding you, where have you been?",
        answers: {
            a: "Drake",
            b: "Emo"
        },
        correctAnswer: 'a'
    },
    {
        question: "Last night everything was right and the rain was gone. One summer night’s the only time we’ve known. Shut your eyes and when you wake I’ll be gone.",
        answers: {
            a: "Drake",
            b: "Emo"
        },
        correctAnswer: 'b'
    },
    {
        question: "The girl I wanna save is like a danger to my health. Try being with somebody that wanna be somebody else.",
        answers: {
            a: "Drake",
            b: "Emo"
        },
        correctAnswer: 'a'
    },
    {
        question: "So cry if you need to, but I can't stay to watch you, that's the wrong thing to do.",
        answers: {
            a: "Drake",
            b: "Emo"
        },
        correctAnswer: 'a'
    },
    {
        question: "Is this how it feels/When you don't even fit into your own skin? And it’s getting tighter. Every day I'm getting smaller",
        answers: {
            a: "Drake",
            b: "Emo"
        },
        correctAnswer: 'b'
    },
    {
        question: "I never had you, although I would be glad to. I'd probably go and tattoo, your name on my heart.",
        answers: {
            a: "Drake",
            b: "Emo"
        },
        correctAnswer: 'a'
    },
    {
        question: "I'm scared that every girl I care for will find a better man and end up happier in the long run.",
        answers: {
            a: "Drake",
            b: "Emo"
        },
        correctAnswer: 'a'
    },
    {
        question: "I need you to rescue me from my destiny/I'm trying to live right and give you whatever's left of me.",
        answers: {
            a: "Drake",
            b: "Emo"
        },
        correctAnswer: 'a'
    }
]



//
//let quizContainer = document.getElementById('quiz');
//let resultsContainer = document.getElementById('results');
//let submitButton = document.getElementById('submit');
//
//
//function generateQuiz (questions, quizContainer, resutlsContainer) {
//    
//    
//   function showQuestions(questions, quizContainer){
//	
//	var output = [];
//	var answers;
//
//	
//	for(var i=0; i<questions.length; i++){
//		
//		answers = [];
//
//		
//		for(letter in questions[i].answers){
//
//			
//			answers.push(
//				'<label>'
//					+ '<input type="radio" name="question'+i+'" value="'+letter+'">'
//					+ letter + ': '
//					+ questions[i].answers[letter]
//				+ '</label>'
//			);
//		}
//
//		
//		output.push(
//			'<div class="question">' + questions[i].question + '</div>'
//			+ '<div class="answers">' + answers.join('') + '</div>'
//		);
//	}
//
//	
//	quizContainer.innerHTML = output.join('');
//}
//    
//let correctImg = '<img src="https://i.kym-cdn.com/entries/icons/original/000/020/147/drake.jpg">';
//    
//let incorrectImg = '<img src="https://res-3.cloudinary.com/revolttv/image/upload/w_800/c_crop,f_auto,fl_lossy.force_strip,q_auto:best,h_450,w_800,x_0,y_0/eda26h7gxnsjmxwhhwm5.jpg">';
//
//function showResults(questions, quizContainer, resultsContainer){
//	
//	
//	var answerContainers = quizContainer.querySelectorAll('.answers');
//	
//	
//	var userAnswer = '';
//	var numCorrect = 0;
//	
//	
//	for(var i=0; i<questions.length; i++){
//
//		
//		userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;
//		
//		
//		if(userAnswer===questions[i].correctAnswer){
//			
//			numCorrect++;
//			
//			
//			answerContainers[i].style.color = 'lightgreen';
//		}
//		
//		else{
//			
//			answerContainers[i].style.color = 'red';
//		}
//	}
//
//	
//	resultsContainer.innerHTML = numCorrect + ' out of ' + questions.length;
//}
//    
//    showQuestions(questions, quizContainer);
//    
//    submitButton.onclick = function (){
//        showResults(questions, quizContainer, resutlsContainer);
//    }
//}
//
//generateQuiz(myQuestions, quizContainer, resultsContainer, submitButton);

