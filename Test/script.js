const questions = [
    {
questions: "Какой тег используеться для создания абзаца?",
options:["<p>","<div>","<span>","<br>"],
correct: 0
    },


        {
questions: "Какое свойство CSS используеться для изменения цвета текста?",
options:["<background-color>","<color>","<font-size>","<border>"],
correct: 1
    },


        {
questions: "Что значит HTML?",
options:["<Hyper Text Markup Language>","<Hign Text Marketing Language>","<Hyper Text Marketing Language>","<Home Text Marketing Language>"],
correct: 0
    },



        {
questions: " Какой язык используется для програмирования повидения веб-страницы?",
options:["<CSS>","<HTML>","<JavaScript>","<Python>"],
correct: 2
    },

         {
estions: "Какой антрибут задает альтернативный текст для изображения?",
options:["<title>","<alt>","<src>","<text>"],
correct: 2
    },


       {
estions: "Какой тег используеться для вставки изображения?",
options:["<img src>","<imge>","<img>","<picture>"],
correct: 3
    },


   {
estions: "Какой тег создает строку в таблице?",
options:["<table-rov>","<item>","<data>","<tr>"],
correct: 4
    },


       {
estions: "Какой антрибуд определяет,куда отправляются данные формы?",
options:["<achion>","<method>","<send>","<target>"],
correct: 1
    },


       {
estions: "Какой тег содержит информацию о документе?",
options:["<body>","<info>","<head>","<meta>"],
correct: 3
    },


       {
estions: "Какой тег используется для создания формы?",
options:["<imput>","<form>","<field>","<data>"],
correct: 2
    }
] 



let currentQuestion = 0;
function loadQuestion() {
    const q = questions[currentQuestion];
    document.getElementById('question').textContent = q.question;
    const answersDiv = document.getElementById('answers');
    answersDiv.innerHTML = '';
    q.options.forEach((option, index) => {
        const label = document.createElement('label');
        label.innerHTML = `<input type="radio" name="answer" value="${index}"> ${option}`;
        answersDiv.appendChild(label);
    });
    document.getElementById('result').innerHTML = '';
    document.getElementById('result').className = '';
}
function checkAnswer() {
    const selected = document.querySelector('input[name="answer"]:checked');
    if (!selected) {
        alert('Пожалуйста, выберите ответ!');
        return;
    }
    const userAnswer = parseInt(selected.value);
    const q = questions[currentQuestion];
    if (userAnswer === q.correct) {
        document.getElementById('result').innerHTML = 'Правильно! Молодец!';
        document.getElementById('result').className = 'correct';
    } else {
        document.getElementById('result').innerHTML = `Неправильно! Правильный ответ: ${q.options[q.correct]}`;
        document.getElementById('result').className = 'incorrect';
    }
}
function nextQuestion() {
    currentQuestion++;
    if (currentQuestion >= questions.length) {
        document.getElementById('quiz-area').innerHTML = '<h2>Викторина завершена!</h2><p>Вы ответили на все вопросы.</p><button onclick="location.reload()">Начать заново</button>';
        return;
    }
    loadQuestion();
}
document.addEventListener('DOMContentLoaded', loadQuestion);
document.getElementById('submit-btn').addEventListener('click', checkAnswer);

