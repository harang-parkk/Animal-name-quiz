document.addEventListener('DOMContentLoaded', () => {
  let selectedQuestions = [];
  let currentIndex = 0;
  let score = 0;

  let totalTimerId = null;
  const TOTAL_TIME_LIMIT = 50;  // 제한시간 50초
  let timeLeft = TOTAL_TIME_LIMIT;

  function shuffle(array) {
    return array.sort(() => Math.random() - 0.5);
  }

  function startQuiz() {
    selectedQuestions = shuffle([...questions]).slice(0, 15); // 15문제 선택
    currentIndex = 0;
    score = 0;
    document.getElementById('result').style.display = 'none';

    // 제한시간 초기화 및 타이머 시작
    timeLeft = TOTAL_TIME_LIMIT;
    const timerDiv = document.getElementById('timer');
    timerDiv.style.display = 'block';
    timerDiv.textContent = `⏰ 남은 시간: ${timeLeft}초`;

    if (totalTimerId) clearInterval(totalTimerId);
    totalTimerId = setInterval(() => {
      timeLeft--;
      if (timeLeft >= 0) {
        timerDiv.textContent = `⏰ 남은 시간: ${timeLeft}초`;
      }
      if (timeLeft === 0) {
        clearInterval(totalTimerId);
        alert("⏰ 시간이 종료되었습니다!");
        endQuiz();
      }
    }, 1000);

    showQuestion();
  }

  function showQuestion() {
    const q = selectedQuestions[currentIndex];
    document.getElementById('question-image').src = q.image;
    document.getElementById('question-text').textContent = `Q${currentIndex + 1}. ${q.question}`;
    document.getElementById('feedback').textContent = '';
    document.getElementById('next-button').style.display = 'none';

    const optionsDiv = document.getElementById('options');
    optionsDiv.innerHTML = '';

    q.options.forEach(option => {
      const btn = document.createElement('button');
      btn.textContent = option;
      btn.onclick = () => checkAnswer(option, btn);
      optionsDiv.appendChild(btn);
    });
  }

  function checkAnswer(selected, button) {
    // 답 선택 시 타이머 종료 없이 계속 진행(전체 제한시간 적용 중)

    const q = selectedQuestions[currentIndex];
    const isCorrect = selected === q.answer;

    const feedbackDiv = document.getElementById('feedback');
    const buttons = document.querySelectorAll('#options button');

    buttons.forEach(btn => {
      btn.disabled = true;
      if (btn.textContent === q.answer) {
        btn.style.backgroundColor = "#b2f2bb";  // 초록
      } else if (btn.textContent === selected) {
        btn.style.backgroundColor = "#ffc9c9";  // 빨강
      }
    });

    if (isCorrect) {
      feedbackDiv.textContent = "✅ 정답입니다!";
      score++;
    } else {
      feedbackDiv.textContent = `❌ 오답입니다. 정답은 "${q.answer}"입니다.`;
    }

    document.getElementById('next-button').style.display = 'inline-block';
  }

  document.getElementById('next-button').addEventListener('click', () => {
    currentIndex++;
    if (currentIndex < selectedQuestions.length) {
      showQuestion();
    } else {
      endQuiz();
    }
  });

  function endQuiz() {
    if (totalTimerId) clearInterval(totalTimerId);

    document.getElementById('quiz-container').innerHTML = `
      <h1>퀴즈 완료!</h1>
      <p>총 ${selectedQuestions.length}문제 중 <strong>${score}</strong>문제를 맞췄습니다.</p>
      <button onclick="location.reload()">다시 시작하기</button>
    `;

    const timerDiv = document.getElementById('timer');
    if (timerDiv) timerDiv.style.display = 'none';
  }

  startQuiz();
});
