const questions = [
  { 
    question: "Which of the following sentences illustrates the use of an adverb?", 
    options: ["The cat is furry.", "She sang beautifully at the concert.", "The book on the table is new.", "He is a fast runner."], 
    answer: 1 // Option B
  },
  { 
    question: "Pick out the sentence with correct use of main and subordinate clause along with appropriate transitional device.", 
    options: ["She went to the store because she needed milk.", "Because she needed milk, she went to the store.", "She went to the store; she needed milk.", "Because she needed milk; she went to the store."], 
    answer: 1 // Option B
  },
  { 
    question: "The red car sped down the highway. The underlined part of the sentence is:", 
    options: ["Descriptive adjective", "Demonstrative adjective", "Possessive adjective", "Interrogative adjective"], 
    answer: 0 // Option A
  },
  // Add other questions as needed...
];

function generateQuiz() {
  const form = document.getElementById("mcq-form");

  if (!form) {
    console.error("Form element not found.");
    return;
  }

  questions.forEach((q, index) => {
    const questionDiv = document.createElement("div");
    questionDiv.innerHTML = `
      <p>${q.question}</p>
      ${q.options.map((option, i) => `
        <label>
          <input type="radio" name="q${index}" value="${i}"> ${option}
        </label>
      `).join('')}
    `;
    form.appendChild(questionDiv);
  });
}

function submitTest() {
  let score = 0;
  
  questions.forEach((q, index) => {
    const selectedAnswer = document.querySelector(`input[name="q${index}"]:checked`);
    if (selectedAnswer && parseInt(selectedAnswer.value) === q.answer) {
      score++;
    }
  });
  
  document.getElementById("result").innerHTML = `You scored ${score} out of ${questions.length}.`;
}

// Run this function to generate the quiz
generateQuiz();
