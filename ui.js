// ui.js

// Function to update the question in the HTML
function updateQuestionInUI(question) {
  const questionText = document.getElementById("question-text");
  const choicesList = document.getElementById("choices");

  questionText.textContent = question.question;

  // Clear previous choices
  choicesList.innerHTML = "";
  question.choices.forEach((choice, index) => {
    const choiceItem = document.createElement("li");
    choiceItem.textContent = choice;
    choiceItem.addEventListener("click", () => handleChoiceClick(index)); // Handle answer click
    choicesList.appendChild(choiceItem);
  });
}

// Function to update the progress
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

// Function to show the final score
function showFinalScore(score, totalQuestions) {
  alert(`Quiz Over! Your final score is: ${score} / ${totalQuestions}`);
}

// Export UI functions for use in the main.js
export { updateQuestionInUI, updateProgress, showFinalScore };
