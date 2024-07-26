/**
 * Create an array of questions to be used
 * for the quiz game
 */
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
                correct: false
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
    },
    {
        question: 'Which Olympian has the most Olympic Gold medals with 23?',
        answers: [
            {
                text: 'Michael Phelps',
                correct: true
            },
            {
                text: 'Steve Redgrave',
                correct: false
            },
            {
                text: 'Usain Bolt',
                correct: false
            }
        ]
    },
    {
        question: 'In which Olympic Games did Usain Bolt win his first Gold medals?',
        answers: [
            {
                text: 'London 2012',
                correct: false
            },
            {
                text: 'Rio 2016',
                correct: false
            },
            {
                text: 'Beijing 2008',
                correct: true
            }
        ]
    },
    {
        question: 'Which famous Olympic Gold medallist lit the Olympic torch in Atlanta 1996?',
        answers: [
            {
                text: 'Muhammad Ali',
                correct: true
            },
            {
                text: 'Carl Lewis',
                correct: false
            },
            {
                text: 'Ian Thorpe',
                correct: false
            }
        ]
    },
    {
        question: 'Which city hosted the Olympic games of 2000?',
        answers: [
            {
                text: 'New York',
                correct: false
            },
            {
                text: 'Moscow',
                correct: false
            },
            {
                text: 'Sydney',
                correct: true
            }
        ]
    },
    {
        question: 'Which country has won the most Olympic medals in history?',
        answers: [
            {
                text: 'Russia',
                correct: false
            },
            {
                text: 'USA',
                correct: true
            },
            {
                text: 'China',
                correct: false
            }
        ]
    },
    {
        question: 'Which famous sprinter won 4 Gold medals at the 1936 Olympic Games in Berlin?',
        answers: [
            {
                text: 'Michael Johnson',
                correct: false
            },
            {
                text: 'Maurice Greene',
                correct: false
            },
            {
                text: 'Jesse Owens',
                correct: true
            }
        ]
    },
    {
        question: 'Before 2012, when was the last time London hosted the Olympic Games?',
        answers: [
            {
                text: '1948',
                correct: true
            },
            {
                text: '1908',
                correct: false
            },
            {
                text: '1988',
                correct: false
            }
        ]
    }
];

/**
 * Declare constants for DOM elements
 */
const questionElement = document.getElementById('questions');
const answerButtons = document.getElementById('answer-buttons');
const nextButton = document.getElementById('next-button');

let currentQuestionNumber = 0;
let score = 0;

/**
 * Sets the starting question number and score to 0, sets the
 * inner HTML of the next button and calls the displayQuestion
 * function
 */
function startQuiz() {
    currentQuestionNumber = 0;
    score = 0;
    nextButton.innerHTML = 'Next Question!';
    displayQuestion();
}

/**
 * Gets questions from the quizQuestions array to be shown in 
 * the question area, also creates button for each of the answer
 * choices and adds the click event listener to each answer
 * button
 */
function displayQuestion() {
    resetQuestions();
    let currentQuestion = quizQuestions[currentQuestionNumber];
    let questionNumber = currentQuestionNumber + 1;
    questionElement.innerHTML = questionNumber + '. ' + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        let button = document.createElement('button');
        button.innerHTML = answer.text;
        button.classList.add('button');
        answerButtons.appendChild(button);
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener('click', selectAnswer);
    });
}

/**
 * Removes default answer buttons from question pages
 */
function resetQuestions() {
    nextButton.style.display = 'none';
    while(answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

/**
 * Processes answer selected by the user
 * @param {object} event Event that triggers this event handler
 */
function selectAnswer(event) {
    let selectedButton = event.target;
    let isCorrect = selectedButton.dataset.correct === 'true';
    if (isCorrect) {
        selectedButton.classList.add('correct');
        score++;
    } else {
        selectedButton.classList.add('incorrect');
    }
    Array.from(answerButtons.children).forEach(button => {
        if (button.dataset.correct === 'true') {
            button.classList.add('correct');
        }
        button.disabled = true;
    });
    nextButton.style.display = 'block';
}

/**
 * Displays user score after completing questions and changes in HTML
 * of the next button to 'play again'
 */
function displayScore() {
    resetQuestions();
    questionElement.innerHTML = `You scored ${score} out of ${quizQuestions.length}!`;
    nextButton.innerHTML = 'Play Again!';
    nextButton.style.display = 'block';
}

/**
 * Controls functionality of next button as to whether
 * to display another question or the score page
 */
function handleNextButton() {
    currentQuestionNumber++;
    if (currentQuestionNumber < quizQuestions.length) {
        displayQuestion();
    } else {
        displayScore();
    }
}

/**
 * Adds click event listener to next button
 */
nextButton.addEventListener('click', function() {
    if (currentQuestionNumber < quizQuestions.length) {
        handleNextButton();
    } else {
        startQuiz();
    }
});

startQuiz();