// Array of quiz questions and answers
const questions = [
    {
        question: "What is the largest planet in our solar system?",
        options: ["Earth", "Mars", "Jupiter", "Saturn"],
        answer: "Jupiter"
    },
    {
        question: "Which galaxy is our solar system located in?",
        options: ["Andromeda", "Milky Way", "Triangulum", "Centaurus A"],
        answer: "Milky Way"
    },
    {
        question: "What is the name of the first person to walk on the Moon?",
        options: ["Buzz Aldrin", "Yuri Gagarin", "Neil Armstrong", "Michael Collins"],
        answer: "Neil Armstrong"
    },
    {
        question: "What phenomenon is created by charged particles from the sun interacting with Earth's atmosphere?",
        options: ["Solar Flare", "Aurora", "Meteor Shower", "Eclipse"],
        answer: "Aurora"
    },
    {
        question: "What is the smallest planet in our solar system?",
        options: ["Mercury", "Mars", "Pluto", "Venus"],
        answer: "Mercury"
    }
];

const quizDiv = document.getElementById('quiz');
const scoreDiv = document.getElementById('score');

// Function to load questions
function loadQuestions() {
    questions.forEach((q, index) => {
        const questionElement = document.createElement('div');
        questionElement.classList.add('question');
        questionElement.textContent = `${index + 1}. ${q.question}`;

        const optionsElement = document.createElement('div');
        optionsElement.classList.add('options');

        q.options.forEach(option => {
            const label = document.createElement('label');
            label.innerHTML = `
                <input type="radio" name="question${index}" value="${option}">
                ${option}
            `;
            optionsElement.appendChild(label);
        });

        quizDiv.appendChild(questionElement);
        quizDiv.appendChild(optionsElement);
    });
}

// Function to submit the quiz and calculate score
function submitQuiz() {
    let score = 0;
    questions.forEach((q, index) => {
        const selectedOption = document.querySelector(`input[name="question${index}"]:checked`);
        if (selectedOption && selectedOption.value === q.answer) {
            score++;
        }
    });

    // Display the score
    scoreDiv.textContent = `You scored ${score} out of ${questions.length}!`;
    scoreDiv.classList.remove('hidden');
    document.querySelector('.submit-btn').style.display = 'none'; // Hide submit button
}

// Load questions when the page loads
window.onload = loadQuestions;

