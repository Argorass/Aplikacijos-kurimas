// main.js

import { loadQuestion, handleAnswer, getScore, nextQuestion } from "./quiz.js";
import { updateQuestionInUI, updateProgress, showFinalScore } from "./ui.js";

let currentQuestion;

// Function to start the quiz
function startQuiz() {
  // Load the first question
  currentQuestion = loadQuestion();
  updateQuestionInUI(currentQuestion);
  updateProgress(0, 3); // Assuming there are 3 questions
}

// Function to handle the choice click
function handleChoiceClick(selectedIndex) {
  // Handle the answer
  handleAnswer(selectedIndex);

  // Move to the next question or show the final score
  const next = nextQuestion();
  if (next) {
    currentQuestion = next;
    updateQuestionInUI(currentQuestion);
  } else {
    const score = getScore();
    showFinalScore(score, 3); // Show the final score when all questions are answered
  }
}

// Initialize the quiz on page load
document.addEventListener("DOMContentLoaded", () => {
  startQuiz();

  const nextButton = document.getElementById("next-button");
  nextButton.addEventListener("click", () => {
    handleChoiceClick(currentQuestion);
  });
});
