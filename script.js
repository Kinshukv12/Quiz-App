const questions = [
    {
        'que': 'Which of the following is a markup language?',
        'a'  : 'HTML',
        'b'  : 'CSS',
        'c'  : 'Javascript',
        'd'  : 'PHP',
        'correct' : 'a'
    },
    {
        'que': 'What year was javascript launched?',
        'a'  : '1996',
        'b'  : '1995',
        'c'  : '1994',
        'd'  : 'None of the above',
        'correct' : 'b'
    },
    {
        'que': 'What does CSS stands for?',
        'a'  : 'Hypertext Markup Language',
        'b'  : 'Cascading Style Sheet',
        'c'  : 'Jason Object Notation',
        'd'  : 'Helicopter Terminals',
        'correct' : 'b'
    }
]
let index = 0;
let total = questions.length;
let wrong =0,right=0;

const optionInputs=document.querySelectorAll(".option");
const queBox = document.querySelector("#queBox");
const loadQuestion = () => {
    if(index===total){
        return endQuiz();
    }
    reset();
    const data =questions[index]
    queBox.innerText = `${index+1}) ${data.que}`;
    optionInputs[0].nextElementSibling.innerText = data.a;
    optionInputs[1].nextElementSibling.innerText = data.b;
    optionInputs[2].nextElementSibling.innerText = data.c;
    optionInputs[3].nextElementSibling.innerText = data.d;
}
const submitQuiz = () => {
    const data =questions[index]
    const ans = getAnswer()
    if(ans==data.correct){
        right++;
    }
    else{
        wrong++;
    }
    index++;
    loadQuestion();
    return;
}

document.querySelector(".btn").addEventListener("click", submitQuiz);
const getAnswer = () => {
    let answer;
    optionInputs.forEach(
        (input) => {
            if(input.checked){
                answer = input.value ;
            }
        }
    )
    return answer;
}

const reset = () => {
    optionInputs.forEach(
        (input) => {
            input.checked=false;
        }
    )
}

const endQuiz = () => {
    document.querySelector("#box").innerHTML = `
    <div style="text-align: center;">
    <h3> Thank You for playing the quiz</h3>
    <h2> ${right}/${total} are correct </h2>
    </div>
    `
}
loadQuestion();