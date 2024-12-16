// quiz.js

import questions from "./questions.js";

let currentQuestionIndex = 0;
let score = 0;

// Function to load the current question
function loadQuestion() {
  return questions[currentQuestionIndex];
}

// Function to handle the user's answer
function handleAnswer(selectedIndex) {
  const correctAnswerIndex = questions[currentQuestionIndex].correctAnswerIndex;
  if (selectedIndex === correctAnswerIndex) {
    score++;
  }
}

// Function to get the score so far
function getScore() {
  return score;
}

// Function to check if more questions are left
function hasNextQuestion() {
  return currentQuestionIndex < questions.length - 1;
}

// Function to move to the next question
function nextQuestion() {
  if (hasNextQuestion()) {
    currentQuestionIndex++;
    return loadQuestion();
  } else {
    return null; // No more questions
  }
}

// Make sure to export all functions that will be used in other files
export { loadQuestion, handleAnswer, getScore, nextQuestion };
