const correctAnswers = ['C', 'B', 'C', 'B'];
const form = document.querySelector('.quizz-form');
const result = document.querySelector('.result');
const span = document.querySelector('span');
const submitButton = document.getElementById('submit-button');

form.addEventListener('submit', e => {
  e.preventDefault();

  let score = 0;
  const userAnswers = [
    form.q1.value,
    form.q2.value,
    form.q3.value,
    form.q4.value
  ];

  userAnswers.forEach((answer, index) => {
    if (answer === correctAnswers[index]) {
      score += 25;
    }
  });

  window.scrollTo({ top: 0, behavior: 'smooth' });

  result.classList.remove('d-none');

  let outputResult = 0;

  const timer = setInterval(() => {
    span.textContent = `${outputResult}%`;

    if (score >= 0 && score <= 25) {
      span.setAttribute('class', 'very-bad-score display-4 p-3');
    } else if (score >= 26 && score <= 50) {
      span.setAttribute('class', 'bad-score display-4 p-3');
    } else if (score >= 51 && score <= 75) {
      span.setAttribute('class', 'correct-score display-4 p-3');
    } else {
      span.setAttribute('class', 'good-score display-4 p-3');
    }

    if (outputResult === score) {
      clearInterval(timer);
    } else {
      outputResult++;
    }
  }, 30);
});
