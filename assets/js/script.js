let quizQuestions = [
    {
        question: 'When was the first modern Olympic Games held?',
        answers: [
            {
                text: '1689',
                correct: false
            },
            {
                text: '1896',
                correct: true
            },
            {
                text: '1980',
                correct: false
            }
        ]
    },
    {
        question: 'In which city did the Olympic Games originate?',
        answers: [
            {
                text: 'Paris',
                correct: false
            },
            {
                text: 'Beijing',
                correct: true
            },
            {
                text: 'Athens',
                correct: true
            }
        ]
    },
    {
        question: 'Which Olympic medal is awarded to competitiors who finish in 2nd place?',
        answers: [
            {
                text: 'Gold',
                correct: false
            },
            {
                text: 'Silver',
                correct: true
            },
            {
                text: 'Bronze',
                correct: false
            }
        ]
    }
];

let questionElement = document.getElementById('questions');
let answerButton = document.getElementById('answer-buttons');
let nextButton = document.getElementById('next-button');

let currentQuestionNumber = 0;
let score = 0;

function startQuiz() {
    currentQuestionNumber = 0;
    score = 0;
    nextButton.innerHTML = 'Next Question';
    displayQuestion();
}

function displayQuestion() {
    let currentQuestion = quizQuestions[currentQuestionNumber];
    let questionNumber = currentQuestionNumber + 1;
    questionElement.innerHTML = questionNumber + '. ' + currentQuestion.question;
}


