
// quiz-logic.js

const htmlEl = document.documentElement;
const toggleBtn = document.getElementById('toggle-dark');
const storedTheme = localStorage.getItem('theme');
if (storedTheme === 'dark') htmlEl.classList.add('dark');
toggleBtn.addEventListener('click', () => {
  htmlEl.classList.toggle('dark');
  localStorage.setItem('theme', htmlEl.classList.contains('dark') ? 'dark' : 'light');
});

let allQuestions = baseQuestions.map(q => ({ ...q, categories: [q.category, "all"] }));
let questions = [], currentQuestion = 0, askedQuestions = [], score = 0, highScore = 0, lives = 3;

function startTimer(duration) {
  const quizContainer = document.getElementById("quiz-container");
  const wrapper = document.createElement("div");
  wrapper.className = "w-full bg-gray-300 dark:bg-gray-700 h-4 rounded overflow-hidden mb-2";
  wrapper.id = "timer-bar-wrapper";

  const bar = document.createElement("div");
  bar.id = "timer-bar";
  bar.className = "h-full bg-red-500 transition-all duration-1000 ease-linear";
  wrapper.appendChild(bar);

  const label = document.createElement("div");
  label.id = "timer-label";
  label.className = "text-center text-sm text-red-500 font-semibold mb-1";

  quizContainer.prepend(label);
  quizContainer.prepend(wrapper);

  let time = duration;
  const total = duration;

  const interval = setInterval(() => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    label.textContent = `Time Left: ${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
    const percent = ((total - time) / total) * 100;
    bar.style.width = `${100 - percent}%`;
    if (--time < 0) {
      clearInterval(interval);
      endGame();
    }
  }, 1000);
}

function startGame() {
  const existingTimerBar = document.getElementById("timer-bar-wrapper");
  const existingTimerLabel = document.getElementById("timer-label");
  if (existingTimerBar) existingTimerBar.remove();
  if (existingTimerLabel) existingTimerLabel.remove();
  const countValue = document.getElementById("question-count").value;
  let count = 0;
  if (countValue === "all") {
    count = allQuestions.length;
  } else if (countValue === "exam") {
    count = 40;
    startTimer(45 * 60); // 45 minutes
  } else {
    count = parseInt(countValue);
  }
  questions = shuffle(allQuestions).slice(0, count);
  score = 0; lives = 3; askedQuestions = []; currentQuestion = 0;
  highScore = parseInt(localStorage.getItem("itil_high_score")) || 0;
  document.getElementById("high-score-display").textContent = `High Score: ${highScore}`;
  document.getElementById("start-container").classList.add("hidden");
  document.getElementById("quiz-container").classList.remove("hidden");
  document.getElementById("game-over").classList.add("hidden");
  document.getElementById("review-container").classList.add("hidden");
  updateScore();
  showQuestion();
}

function showQuestion() {
  if (!questions[currentQuestion]) return endGame();
  const q = questions[currentQuestion];
  document.getElementById("question-container").textContent = q.question;
  document.getElementById("status").textContent = `Question ${askedQuestions.length + 1} of ${questions.length}`;
  document.getElementById("explanation").textContent = "";
  document.getElementById("next-btn").classList.add("hidden");
  const container = document.getElementById("choices");
  container.innerHTML = "";
  q.choices.forEach((choice, i) => {
    const btn = document.createElement("button");
    btn.textContent = choice;
    btn.className = "w-full text-left border p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700 choice-button";
    btn.onclick = () => selectAnswer(i);
    container.appendChild(btn);
  });
}

function selectAnswer(index) {
  const q = questions[currentQuestion];
  q.userAnswer = index;
  const buttons = document.querySelectorAll("#choices button");
  buttons.forEach((btn, i) => {
    btn.disabled = true;
    if (i === q.answer) btn.classList.add("correct");
    if (i === index && i !== q.answer) btn.classList.add("incorrect");
  });
  document.getElementById("explanation").textContent = q.explanation;
  document.getElementById("next-btn").classList.remove("hidden");
  if (index === q.answer) score += 5; else lives--;
  updateScore();
  if (lives <= 0) endGame();
}

function updateScore() {
  document.getElementById("score").textContent = `Score: ${score}`;
  highScore = Math.max(score, highScore);
  document.getElementById("high-score").textContent = `High Score: ${highScore}`;
  document.getElementById("lives").textContent = `Misses left: ${lives}`;
  localStorage.setItem("itil_high_score", highScore);
  localStorage.setItem("itil_last_score", score);
  localStorage.setItem("itil_attempts", (parseInt(localStorage.getItem("itil_attempts") || "0") + 1));
  document.getElementById("attempts").textContent = `Attempts: ${localStorage.getItem("itil_attempts")}`;
}

function nextQuestion() {
  askedQuestions.push(questions[currentQuestion]);
  currentQuestion++;
  if (currentQuestion >= questions.length) return endGame();
  showQuestion();
}

function endGame() {
  document.getElementById("quiz-container").classList.add("hidden");
  document.getElementById("game-over").classList.remove("hidden");
  document.getElementById("review-container").classList.remove("hidden");
  document.getElementById("final-score").textContent = `Final Score: ${score} out of ${questions.length * 5}`;
  const message = lives > 0 ? "Well done! You finished the quiz." : "Better luck next time. You ran out of lives.";
  document.getElementById("end-message").textContent = message;
  renderReview();
}

function renderReview() {
  const review = document.getElementById("review-list");
  review.innerHTML = "";
  questions.forEach((q, idx) => {
    const div = document.createElement("div");
    const userAnswer = q.userAnswer;
    const correctAnswer = q.answer;
    div.className = "border rounded p-4" + (userAnswer === correctAnswer ? " bg-green-50 dark:bg-green-900" : " bg-red-50 dark:bg-red-900");
    div.innerHTML = `
      <p class="font-semibold review-answer">${idx + 1}. ${q.question}</p>
      <p class="review-answer"><strong>Your answer:</strong> ${q.choices[userAnswer] || "None selected"}</p>
      <p class="review-answer"><strong>Correct answer:</strong> ${q.choices[correctAnswer]}</p>
      <p class="text-sm mt-2 text-gray-700 dark:text-gray-300 review-answer">${q.explanation}</p>
    `;
    review.appendChild(div);
  });
}

function shuffle(arr) {
  return [...arr].sort(() => Math.random() - 0.5);
}

document.getElementById("start-btn").onclick = startGame;
document.getElementById("next-btn").onclick = nextQuestion;
document.getElementById("try-again-btn").onclick = function () {
  document.getElementById("game-over").classList.add("hidden");
  document.getElementById("review-container").classList.add("hidden");
  document.getElementById("start-container").classList.remove("hidden");
};
