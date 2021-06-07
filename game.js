 const questions=[
   {
        "id":1,
        "question":"Which is the smallest planet in the Solar System?",
        "options":["Venus","Pluto","Mercury","Mars"],
        "answer": 2
    },
    {
        "id":2,
        "question":"Which planet is also called as the Red Planet?",
        "options":["Mars", "Venus","Jupiter", "None of the above"],
        "answer": 0
    },
    {
        "id":3,
        "question":"Which planet takes the longest time to go around the Sun?",
        "options":["Saturn", "Jupiter","Uranus", "Neptune"],
        "answer": 3
    },
    {
        "id":4,
        "question":"The second largest palnet in the Solar System is-",
        "options":["Neptune", "Saturn","Jupiter", "Uranus"],
        "answer": 1
    },
    {
        "id":3,
        "question":"Which is the coldest planet in our Solar System?",
        "options":["Jupiter","Pluto","Neptune", "Saturn"],
        "answer": 2
    },
    {
        "id":3,
        "question":"What is the third planet from the Sun?",
        "options":["Mars", "Earth","Jupiter", "Venus"],
        "answer": 1
    }
]

 
 
 let currentQuestion = 0;
let score = 0;
let totalQuestion = questions.length;

const quizContainer = document.querySelector("#quizContainer");
const questionArea = document.querySelector("#questionArea")
const theQuestion = document.querySelector("#question");
const opt1 = document.querySelector("#opt1");
const opt2 = document.querySelector("#opt2");
const opt3 = document.querySelector("#opt3");
const opt4 = document.querySelector("#opt4");
const nextbtn = document.querySelector("#nextbtn");
const finalbtn = document.querySelector("#finalbtn");
const resultContainer = document.querySelector("#result");

function loadQuestion(questionIndex) {
  let q = questions[questionIndex];
  theQuestion.innerHTML = `${questionIndex + 1}. ${q.question}`;
  opt1.innerHTML = q.options[0];
  opt2.innerHTML = q.options[1];
  opt3.innerHTML = q.options[2];
  opt4.innerHTML = q.options[3];
}
loadQuestion(currentQuestion);

function loadNextQuestion() {
  let radios = document.querySelectorAll("input[name='option']");
  let correctAnswer = questions[currentQuestion].answer;

  for (let i = 0, radioLength = radios.length; i < radioLength; i++) {
    if (radios[i].checked) {
     
      console.log(radios[i].value);
      console.log(correctAnswer);

      if (correctAnswer === i) {
        console.log("correct answer");
        score += 1;
      }
      radios[i].checked = false;
      currentQuestion += 1;
      loadQuestion(currentQuestion);
    }
  }
}

function loadResult() {
  questionArea.style.display = "none";
  resultContainer.style.display = "block";
 
  if (score <= 0.6*totalQuestion){
    resultContainer.innerHTML = `Your score is ${score} / ${totalQuestion} </br>
    <bold>Better luck next time. Refresh to attempt again.</bold>`;
  };
  if (score > 0.6*totalQuestion){
    resultContainer.innerHTML = `Your score is ${score} / ${totalQuestion} </br>
    <bold>You nailed it, Awesome!</bold>`;
  };
  console.log(score);
  
}

nextbtn.onclick = function() {
  if (currentQuestion < totalQuestion - 1) {
    loadNextQuestion();
  }

  if (currentQuestion == totalQuestion - 1) {
    nextbtn.style.display = "none";
    finalbtn.style.display = "";
  }

  
};
finalbtn.onclick = loadResult;

  