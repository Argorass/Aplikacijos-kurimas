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

    // Use a callback function for handling choice click
    choiceItem.addEventListener("click", () => {
      // Now calling the function from main.js (which is imported and should be used correctly)
      if (typeof handleChoiceClick === "function") {
        handleChoiceClick(index); // This should be passed to main.js
      }
    });

    choicesList.appendChild(choiceItem);
  });
}

// ui.js

function updateProgress(currentIndex, totalQuestions) {
  const progressText = document.getElementById("progress-text");
  const progressBarFilled = document.getElementById("progress-bar-filled");

  progressText.textContent = `Question ${
    currentIndex + 1
  } of ${totalQuestions}`;
  progressBarFilled.style.width = `${
    ((currentIndex + 1) / totalQuestions) * 100
  }%`; // Update progress bar width
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
      choice.style.backgroundColor = isCorrect ? "blue" : "red"; // Highlight blue for correct answers
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
