// main.js

import { loadQuestion, handleAnswer, getScore, nextQuestion } from "./quiz.js";
import {
  updateQuestionInUI,
  updateProgress,
  showFinalScore,
  highlightAnswer,
  updateNextButton,
  restartQuiz,
} from "./ui.js";

const totalQuestions = 10; // Update this for 10 questions
let currentQuestion;
let selectedAnswer = null; // Local variable to store the selected answer
let currentQuestionIndex = 0;

function startQuiz() {
  console.log("Starting quiz...");
  currentQuestion = loadQuestion(); // Loads the first question
  console.log(currentQuestion); // Log question data
  updateQuestionInUI(currentQuestion);
  updateProgress(currentQuestionIndex, totalQuestions);
  updateNextButton(false); // Disable Next button initially until an answer is selected
}

function handleChoiceClick(selectedIndex) {
  console.log("User selected index: ", selectedIndex);
  selectedAnswer = selectedIndex; // Set the selected answer
  handleAnswer(selectedAnswer);

  const isCorrect = selectedAnswer === currentQuestion.correctAnswerIndex;
  highlightAnswer(selectedAnswer, isCorrect);

  const next = nextQuestion();
  if (next) {
    currentQuestion = next;
    currentQuestionIndex++; // Move to the next question
    updateQuestionInUI(currentQuestion);
    updateProgress(currentQuestionIndex, totalQuestions); // Update progress bar
    updateNextButton(currentQuestionIndex === totalQuestions - 1); // Last question will show Finish button
  } else {
    const score = getScore();
    showFinalScore(score, totalQuestions);
    updateNextButton(true); // Disable further clicking after finishing quiz
  }
}

document.addEventListener("DOMContentLoaded", () => {
  startQuiz();

  const nextButton = document.getElementById("next-button");
  nextButton.addEventListener("click", () => {
    if (currentQuestionIndex === totalQuestions - 1) {
      const score = getScore();
      showFinalScore(score, totalQuestions);
    } else {
      handleChoiceClick(selectedAnswer);
    }
  });

  const restartButton = document.getElementById("restart-button");
  restartButton.addEventListener("click", () => {
    console.log("Restarting quiz...");
    restartQuiz();
    currentQuestionIndex = 0; // Reset question index
    startQuiz();
  });
});
