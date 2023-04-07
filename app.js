const quizDB = [
  {
    question: "Question-1: Who invented JavaScript?",
      a: "Douglas Crockford",
      b: "Sheryl Sandberg",
      c: "Brendan Eich",
      d: "ESLint",
    ans: "c"
  },
  {
    question: "Question-2: Which one of these is a JavaScript package manager?",
      a: "Node.js",
      b: "TypeScript",
      c: "npm",
      d: "ESLint",
    ans: "c"
  },
  {
    question: "Question-3: Which tool can you use to ensure code quality?",
      a: "Angular",
      b: "jQuery",
      c: "RequireJS",
      d: "ESLint",
    ans: "d"
  },
    {
      question: "Question-4: What is the capital of France?",
      a: "London",
      b: "Paris",
      c: "Berlin",
      d: "Madrid",
      ans: "b"
    },
    {
      question: "Question-5: What is the smallest country in the world by land area?",
      a: "Monaco",
      b: "San Marino",
      c: "Vatican City",
      d: "Liechtenstein",
      ans: "c"
    },
    {
      question: "Question-6: What is the largest planet in our solar system?",
      a: "Venus",
      b: "Jupiter",
      c: "Saturn",
      d: "Neptune",
      ans: "b"
    },
    {
      question: "Question-7: What is the capital of Australia?",
      a: "Sydney",
      b: "Melbourne",
      c: "Canberra",
      d: "Brisbane",
      ans: "c"
    },
    {
      question: "Question-8: What is the highest mountain in the world?",
      a: "Mount Kilimanjaro",
      b: "Mount Everest",
      c: "Mount Fuji",
      d: "Mount Aconcagua",
      ans: "b"
    },
    {
      question: "Question-9: What is the capital of Japan?",
      a: "Tokyo",
      b: "Osaka",
      c: "Kyoto",
      d: "Nagoya",
      ans: "a"
    },
    {
      question: "Question-10: What is the largest continent?",
      a: "Africa",
      b: "Asia",
      c: "North America",
      d: "Europe",
      ans: "b"
    },
    {
      question: "Question-11: Who is the author of the Harry Potter series?",
      a: "J.K. Rowling",
      b: "George R.R. Martin",
      c: "Stephenie Meyer",
      d: "Suzanne Collins",
      ans: "a"
    },
    {
      question: "Question-12: What is the name of the longest river in the world?",
      a: "Amazon",
      b: "Nile",
      c: "Yangtze",
      d: "Mississippi",
      ans: "b"
    },
    {
      question: "Question-13: What is the capital of Canada?",
      a: "Toronto",
      b: "Montreal",
      c: "Vancouver",
      d: "Ottawa",
      ans: "d"
    }  
];
const question = document.querySelector('.question');
const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');
const submit = document.querySelector('#submit');
const answers = document.querySelectorAll('.answer');
const showscore= document.querySelector('#showscore');

let questionCount =0;
let score=0;

// defining the function
const loadQuestion = () =>{
  const questionList = quizDB[questionCount];
  question.innerText = questionList.question;
  option1.innerText = questionList.a;
  option2.innerText = questionList.b;
  option3.innerText = questionList.c;
  option4.innerText = questionList.d;
};
// calling the function

loadQuestion();

const getCheckAnswer = ()=> {
  let answer;
  answers.forEach((curAnsElem)=>{
if (curAnsElem.checked){//user ny kis ko check kis hua hy wo data laany k liye uski id laany k liye
answer=curAnsElem.id;
}

  });
  return answer;
};
// deselection k liye
const deselectAll = ()=>{
  answers.forEach((curAnsElem)=> curAnsElem.checked=false);
}
// now i want to see the data k user ny kis button ko select kr k submitt kia hy us k liye phly to eventlisner phir const wala kam
submit.addEventListener('click',()=> {
const checkedAnswer = getCheckAnswer ();
console.log(checkedAnswer);// ider tak answer ko check krany k liye
// ab hmny dekhna hy k jo selected option hy wo quiz k answer waly obj sy match krta hy k nhi
if (checkedAnswer===quizDB[questionCount].ans){
  score++;
};
questionCount++;
// by default jo slected next question ata hy usko khatam krny k liye
deselectAll();
// ab hmny krna h k check krny k baad jb submitt click krun to next question aa jaye
if (questionCount<quizDB.length){
  loadQuestion();
}else{
  showscore.innerHTML=`
  <h3>Your Score is ${score}/${quizDB.length}</h3>
  <button class="btn" onclick="goUserInfoPage()">Attempt again</button>
  `;
  showscore.classList.remove('scoreArea');
}
});

// count down
var timeleft = 300;
var timerId = setInterval(function() {
  timeleft--;
  var minutes = Math.floor(timeleft / 60);
  var seconds = timeleft % 60;
  var display = minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
  document.getElementById("countdown").innerHTML = display;

  if (timeLeft <= 0) {
    clearInterval(timerId);
    document.getElementById("countdown").innerHTML = "Time's up!";
  } else {
    document.getElementById("countdown").innerHTML = timeleft + " seconds remaining";
  }
  timeleft -= 1;
  if (timeleft==-1) {
    showscore.innerHTML = `
            <h3>You scored ${score}/${quizDB.length} </h3>
            <button class="btn" onclick="./index.html">Play Again </button>
        `;
        showscore.classList.remove('scoreArea');
}
}, 1000);

function goUserInfoPage(){
  window.location.href = "index.html";
}

// Get the values of the name and rollnum parameters from the URL
const queryString = window.location.search;

const urlParams = new URLSearchParams(queryString);

// Get the value of the name parameter and display it
const name = urlParams.get('name');
document.getElementById('name').textContent = name;
// jb mn refresh krun to wohi user wala page aye

// function redirectToUserPage() {
//   window.location.href = "userInfo.html";
//}