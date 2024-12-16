// ui.js

function updateQuestionInUI(question) {
  const questionText = document.getElementById("question-text");
  const choicesList = document.getElementById("choices");

  questionText.textContent = question.question;
  choicesList.innerHTML = "";

  question.choices.forEach((choice, index) => {
    const choiceItem = document.createElement("li");
    choiceItem.textContent = choice;
    choiceItem.classList.add("choice-item");
    choiceItem.addEventListener("click", () => {
      // Handle the answer selection here
      handleChoiceClick(index); // Call this function from main.js
    });
    choicesList.appendChild(choiceItem);
  });
}

function updateProgress(currentIndex, totalQuestions) {
  const progressText = document.getElementById("progress-text");
  const progressBar = document.getElementById("progress-bar");

  progressText.textContent = `Question ${
    currentIndex + 1
  } of ${totalQuestions}`;
  progressBar.innerHTML = `<span style="width: ${
    ((currentIndex + 1) / totalQuestions) * 100
  }%"></span>`;
}

function showFinalScore(score, totalQuestions) {
  const resultsContainer = document.getElementById("results-container");
  const finalScore = document.getElementById("final-score");

  resultsContainer.classList.remove("hidden");
  finalScore.textContent = `You got ${score} out of ${totalQuestions} correct!`;
}

function highlightAnswer(selectedIndex, isCorrect) {
  const choices = document.querySelectorAll(".choice-item");
  choices.forEach((choice, index) => {
    if (index === selectedIndex) {
      choice.style.backgroundColor = isCorrect ? "green" : "red";
    }
  });
}

function updateNextButton(isLastQuestion) {
  const nextButton = document.getElementById("next-button");
  nextButton.textContent = isLastQuestion ? "Finish" : "Next";
}

function restartQuiz() {
  const resultsContainer = document.getElementById("results-container");
  resultsContainer.classList.add("hidden");
}

export {
  updateQuestionInUI,
  updateProgress,
  showFinalScore,
  highlightAnswer,
  updateNextButton,
  restartQuiz,
};
