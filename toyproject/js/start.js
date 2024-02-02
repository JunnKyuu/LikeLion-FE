const main = document.getElementById('main'); // main 화면
const qna = document.getElementById('qna'); // qna 화면

// start-button을 누르면 qna 화면으로 전환
const start = () => {
  main.style.animation = 'fadeOut 1s';
  setTimeout(() => {
    qna.style.animation = 'fadeIn 1s';
    setTimeout(() => {
      main.style.display = 'none';
      qna.style.display = 'flex';
    }, 450);
    let qustionIndex = 0;
    next(qustionIndex);
  }, 450);
};

// 질문에 대한 답변 버튼 생성
const next = (qustionIndex) => {
  let questionBox = document.getElementById('question-box');
  questionBox.innerHTML = qnaList[qustionIndex].q;

  for (let i in qnaList[qustionIndex].a) {
    addAnswerButton(qnaList[qustionIndex].a[i].answer, qustionIndex);
  }
};

const addAnswerButton = (answerText, qustionIndex) => {
  let answerBox = document.getElementById('answer-box');
  let answerButton = document.createElement('button');

  answerButton.classList.add('answer-list');
  answerBox.appendChild(answerButton);
  answerButton.innerHTML = answerText;

  answerButton.addEventListener('click', () => {
    let buttonChildren = document.getElementsByClassName('answer-list');
    for (let i = 0; i < buttonChildren.length; i++) {
      buttonChildren[i].disabled = true;
      buttonChildren[i].style.display = 'none';
    }
    next(++qustionIndex);
  });
};
