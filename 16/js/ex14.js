// This one was a bit difficult, I figured out how to remove the button but referenced the interent for the DOMContentLoaded / addEventListener portion. 

document.addEventListener('DOMContentLoaded', function() {
  const questions = [
    {
      statement: "2+2?",
      answer: "2+2 = 4"
    },
    {
      statement: "In which year did Christopher Columbus discover America?",
      answer: "1492"
    },
    {
      statement:
        "What occurs twice in a lifetime, but once in every year, twice in a week but never in a day?",
      answer: "The E letter"
    }
  ];

  const questionsContainer = document.createElement('div'); // Create a container for the questions
  document.body.appendChild(questionsContainer); // Append it to the body (you might want to target a specific div instead)

  questions.forEach((question, index) => {
    const questionDiv = document.createElement('div');
    questionDiv.classList.add('question-item'); // Add a class for potential styling

    const statementElement = document.createElement('p');
    statementElement.textContent = `${index + 1}. ${question.statement}`;

    const answerButton = document.createElement('button');
    answerButton.textContent = 'Show the answer';
    answerButton.addEventListener('click', function() {
      statementElement.textContent = `${index + 1}. ${question.answer}`;
      answerButton.remove(); // Remove the button after showing the answer
    });

    questionDiv.appendChild(statementElement);
    questionDiv.appendChild(answerButton);
    questionsContainer.appendChild(questionDiv);
  });
});