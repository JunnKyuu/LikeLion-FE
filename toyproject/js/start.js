const main = document.getElementById('main'); // main 화면
const qna = document.getElementById('qna'); // qna 화면
const endPoint = 12;

// start-button을 누르면 qna 화면으로 전환
const start = () => {
  main.style.animation = 'fadeOut 1s';
  setTimeout(() => {
    qna.style.animation = 'fadeIn 1s';
    setTimeout(() => {
      main.style.display = 'none';
      qna.style.display = 'flex';
    }, 450);

    let questionIndex = 0;
    next(questionIndex);
  }, 450);
};

// 질문에 대한 답변 버튼 생성
const next = (questionIndex) => {
  let questionBox = document.getElementById('question-box');
  questionBox.innerHTML = qnaList[questionIndex].q;

  let statusNum = document.getElementById('status-number');
  statusNum.innerHTML = questionIndex + 1 + '/12';
  for (let i in qnaList[questionIndex].a) {
    addAnswerButton(qnaList[questionIndex].a[i].answer, questionIndex);
  }

  let status = document.getElementById('status-bar');
  status.style.width = (100 / endPoint) * (questionIndex + 1) + '%';
};

const addAnswerButton = (answerText, questionIndex) => {
  let answerBox = document.getElementById('answer-box');
  let answerButton = document.createElement('button');

  answerButton.classList.add('answer-list');
  answerButton.classList.add('fadeIn');
  answerBox.appendChild(answerButton);
  answerButton.innerHTML = answerText;

  answerButton.addEventListener('click', () => {
    let buttonChildren = document.getElementsByClassName('answer-list');
    for (let i = 0; i < buttonChildren.length; i++) {
      buttonChildren[i].disabled = true;
      buttonChildren[i].style.animation = 'fadeOut 0.5s';
    }
    setTimeout(() => {
      for (let i = 0; i < buttonChildren.length; i++) {
        buttonChildren[i].style.display = 'none';
      }
      next(++questionIndex);
    }, 450);
  });
};
