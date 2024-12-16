// quiz.js

import questions from "./questions.js";

let currentQuestionIndex = 0;
let score = 0;

// Function to load the current question
function loadQuestion() {
  const question = questions[currentQuestionIndex];
  return question;
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

export { loadQuestion, handleAnswer, getScore, nextQuestion };
