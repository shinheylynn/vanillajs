function generateRandomNumber() {
  const answer = [];

  while (answer.length < 3) {
    const number = Math.floor(Math.random() * 9) + 1;
    answer.push(number);
  }

  return answer.join('');
}

function playGame() {
  const answer = generateRandomNumber();
  let attempts = 0;

  console.log('숫자야구게임을 시작합니다.');
  console.log(answer);
  console.log(answer);
}

playGame();
