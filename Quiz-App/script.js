const questions = [
  {
    question: "What is the capital of France?",
    options: ["Berlin", "Madrid", "Paris", "Rome"],
    answer: "Paris"
  },
  {
    question: "Which language runs in a web browser?",
    options: ["Python", "C", "Java", "JavaScript"],
    answer: "JavaScript"
  },
  {
    question: "What does CSS stand for?",
    options: [
      "Central Style Sheets",
      "Cascading Style Sheets",
      "Cascading Simple Sheets",
      "Cars SUVs Sailboats"
    ],
    answer: "Cascading Style Sheets"
  }
];

let currentIndex = 0;
let score = 0;

function loadQuestion() {
    debugger
  const current = questions[currentIndex];
  document.getElementById("question").textContent = current.question;

  const optionsList = document.getElementById("options");
  optionsList.innerHTML = "";

  current.options.forEach(option => {
    const li = document.createElement("li");
    const input = document.createElement("input");
    input.type = "radio";
    input.name = "option";
    input.value = option;

    li.appendChild(input);
    li.appendChild(document.createTextNode(option));
    optionsList.appendChild(li);
  });
}

function nextQuestion() {
    debugger
  const selected = document.querySelector('input[name="option"]:checked');
  if (!selected) {
    alert("Please select an option!");
    return;
  }

  const answer = selected.value;
  if (answer === questions[currentIndex].answer) {
    score++;
  }

  currentIndex++;

  if (currentIndex < questions.length) {
    loadQuestion();
  } else {
    document.querySelector(".quiz-container").innerHTML = `
      <h2>Quiz Completed!</h2>
      <p>You scored ${score} out of ${questions.length}</p>
    `;
  }
}

document.addEventListener("DOMContentLoaded", loadQuestion);
