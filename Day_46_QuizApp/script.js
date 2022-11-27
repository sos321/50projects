const quizData = [
  {
    question: "Which language runs in a web browser?",
    a: "Java",
    b: "C",
    c: "Python",
    d: "JavaScript",
    correct: "d",
  },
  {
    question: "What does CSS stand for?",
    a: "Central Style Sheets",
    b: "Cascading Style Sheets",
    c: "Cascading Simple Sheets",
    d: "Cars SUVs Sailboats",
    correct: "b",
  },
  {
    question: "What does HTML stand for?",
    a: "Hypertext Markup Language",
    b: "Hypertext Markdown Language",
    c: "Hyperloop Machine Language",
    d: "Helicopters Terminals Motorboats Lamborginis",
    correct: "a",
  },
  {
    question: "What year was JavaScript launched?",
    a: "1996",
    b: "1995",
    c: "1994",
    d: "none of the above",
    correct: "b",
  },
];

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
  deselectAnswers();
  const currentQuizData = quizData[currentQuiz];

  questionEl.innerText = currentQuizData.question;
  answerEls.forEach((el, i) => {
    el.nextElementSibling.innerText =
      currentQuizData[String.fromCharCode(i + 97)];
  });
}

function deselectAnswers() {
  answerEls.forEach((el) => (el.checked = false));
}

function getSelected() {
  let answer = null;

  answerEls.forEach((el) => {
    if (el.checked) answer = el.id;
  });

  return answer;
}

submitBtn.addEventListener("click", () => {
  const answer = getSelected();
  console.log(answer);

  if (!answer) return;

  if (answer === quizData[currentQuiz].correct) {
    score++;
  }

  currentQuiz++;

  if (currentQuiz < quizData.length) {
    loadQuiz();
  } else {
    quiz.innerHTML = `
    <h2>You answered correctly at ${score}/${quizData.length} questions</h2>
    <button onclick="location.reload()">Reload</button>
    `;
  }
});
