// questions.js

const questions = [
  {
    question: "What does HTML stand for?",
    choices: [
      "Hyper Text Markup Language",
      "Home Tool Markup Language",
      "Hyperlinks and Text Markup Language",
      "None of the Above",
    ],
    correctAnswerIndex: 0,
  },
  {
    question: "Which language is used to style web pages?",
    choices: ["HTML", "CSS", "JavaScript", "Python"],
    correctAnswerIndex: 1,
  },
  {
    question:
      "What is the correct syntax for referring to an external script called 'script.js'?",
    choices: [
      "<script src='script.js'>",
      "<script href='script.js'>",
      "<script name='script.js'>",
      "<script file='script.js'>",
    ],
    correctAnswerIndex: 0,
  },
  // Additional questions can be added here
];

// Export the questions data
export default questions;
