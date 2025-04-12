// Define your questions and options here
const questions = [
    {
        question: "Which of the following sentences illustrates the use of an adverb?",
        options: [
            "The cat is furry.",
            "She sang beautifully at the concert.",
            "The book on the table is new.",
            "He is a fast runner."
        ],
        correctAnswer: 1 // Index of the correct answer (0-based index)
    },
    // Add more questions here...
];

let currentQuestion = 0;

// Function to display the current question
function displayQuestion() {
    const questionContainer = document.getElementById("question-container");
    const currentQ = questions[currentQuestion];
    
    questionContainer.innerHTML = `
        <p>${currentQ.question}</p>
        <form id="options-form">
            ${currentQ.options.map((option, index) => {
                return `
                    <div>
                        <input type="radio" name="option" id="option${index}" value="${index}">
                        <label for="option${index}">${option}</label>
                    </div>
                `;
            }).join('')}
        </form>
    `;
}

// Function to go to the next question
function nextQuestion() {
    const form = document.getElementById("options-form");
    const selectedOption = form.querySelector('input[name="option"]:checked');

    if (selectedOption) {
        const answerIndex = parseInt(selectedOption.value);
        if (answerIndex === questions[currentQuestion].correctAnswer) {
            alert("Correct!");
        } else {
            alert("Incorrect. The correct answer is: " + questions[currentQuestion].options[questions[currentQuestion].correctAnswer]);
        }

        // Move to the next question
        currentQuestion++;
        if (currentQuestion < questions.length) {
            displayQuestion();
        } else {
            alert("Test completed!");
            // You can add code here to show results or reset the test.
        }
    } else {
        alert("Please select an answer.");
    }
}

// Initialize the first question
displayQuestion();
