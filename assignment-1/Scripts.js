const questions =[
    {
        question: "What is the capital of Japan? ",
        answers: [
            { text: "Beijing",correct: false},
            { text: "Tokyo",correct: true},
            { text: "Seoul",correct: false},
            { text: "Bangkok",correct: false},
            { text: "ottawa",correct: false},

            ]
    },
    {   
        question: "India has largest deposits of ____ in the world. ",
        answers: [
            { text: "gold",correct: false},
            { text: "copper",correct:false},
            { text: "mica",correct: true},
            { text: "zinc",correct: false},
            { text: "None of the above",correct: false},
            ]

    },
    {
        question: "What chemical element is used in the manufacture of glass? ",
        answers: [
            { text: "Silver",correct: false},
            { text: "Sodium",correct:false},
            { text: "Oxygen",correct: false},
            { text: "Silicone",correct:true},
            { text: "sulfur",correct:false},
            ]
 
    },
    {
        question: " Which planet in the solar system is known as the “Blue Planet”?",
        answers: [
            { text: "Venus",correct: false},
            { text: "Earth",correct:true},
            { text: "Uranus",correct: false},
            { text: "Neptune",correct:false},
            { text: "mars",correct:false},
            ]
   },
   {
    question: " Which of these buildings is in India?",
        answers: [
            { text: "Taj Mahal",correct: true},
            { text: "Eiffel Tower",correct: false},
            { text: "Colosseum",correct:false},
            { text: "burj khalifa",correct: false},
            { text: "Great Wall of China",correct:false},
            ]
   }
];
const questionElement =document.getElementById("question");
const answerButtons =document.getElementById("answer-buttons");  
const nextButton =document.getElementById("next-btn");  
 let currentQuestionIndex = 0;
 let score = 0;

 function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML="Next";
    showQuestion();

 }
 function  showQuestion(){
     resetState();
     let currentQuestion = questions[currentQuestionIndex]
     let QuestionNo  =  currentQuestionIndex +1;
     questionElement.innerHTML =QuestionNo + "." +currentQuestion.
     question;

     currentQuestion.answers.forEach(answer => {
        const button =document.createElement("button");
        button.innerHTML =answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
                           
     });
 }

 function resetState(){
    nextButton.style.display ="none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild )
    }
 }
 function  selectAnswer(e){
    const selectedBtn =e.target;
    const isCorrect =selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
   }
   Array.from(answerButtons.children).forEach(button =>
   {
      if(button.dataset.correct === "true"){
        button.classList.add("correct");

      }
          button.disabled = true;

   });
   nextButton.style.display ="block";
 }
 function showScore(){
    resetState();
    questionElement.innerHTML =`you scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML ="Play Again";
    nextButton.style.display="block";
} 


 function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex <questions.length){
        showQuestion();
    }else{
        showScore();

    }
 }
 nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex <questions.length){
       handleNextButton() ;
    }else{
        startQuiz();
    }

 });
 
 startQuiz();



