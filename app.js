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
    {
        question: "Choose the option illustrating the use of the Present Participle.",
        options: ["He loves to read short stories.", "The children are laughing uproariously.", "Swimming is a healthy activity.", "Laughing is a tonic for broken hearts."],
        answer: 1 // Option B
    },
    {
        question: "Which one of the following options contains a clause?",
        options: ["He was running down the street.", "He has been studying for hours.", "Why they left early is known to us?", "He greeted me with a smile."],
        answer: 2 // Option C
    },
    {
        question: "Choose the option illustrating the correct connotative meaning of the word luxury.",
        options: ["Home", "Palace", "Hut", "Cottage"],
        answer: 1 // Option B
    },
    {
        question: "Pick out the option which demonstrates the use of metaphor.",
        options: ["Time is money.", "The wind whispered through the trees.", "Her smile was as bright as the sun.", "The leaves rustled in the autumn breeze."],
        answer: 0 // Option A
    },
    {
        question: "Which of the following sentences is imperative?",
        options: ["After finishing your homework, will you go out and play?", "Running through the meadow, the dog chased butterflies.", "The old book with the worn-out cover had beautiful pictures.", "Go straight and turn left."],
        answer: 3 // Option D
    },
    {
        question: "Choose the option which illustrates the use of an abstract noun.",
        options: ["The cat chased the mouse across the yard.", "The children built a sandcastle on the beach.", "She felt a surge of happiness when she heard the news.", "Plants are the prime source of Oxygen."],
        answer: 2 // Option C
    },
    {
        question: "The correct synonym of the word ‘elated’ is:",
        options: ["Delighted", "Confused", "Depressed", "Dejected"],
        answer: 0 // Option A
    },
    {
        question: "Either stay here or go out. This sentence illustrates the use of:",
        options: ["Subordinating conjunction", "Coordinating conjunction", "Correlative conjunction", "Adversative conjunction"],
        answer: 2 // Option C
    }
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
