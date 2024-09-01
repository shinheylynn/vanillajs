playGame();

function playGame() {
  const computer = generateRandomNumber();
  let user = generateRandomNumber();
  let attempt = 0;
  
  console.log('컴퓨터가 숫자를 생성하였습니다. 답을 맞춰보세요!');
  while (computer !== user) {
    attempt += 1;
    
    user = generateRandomNumber();
    checkValue(computer, user, attempt);
  }
}

function generateRandomNumber() {
  const computerNumber = [];

  while (computerNumber.length < 3) {
    const number = Math.floor(Math.random() * 10)

    if (!computerNumber.includes(number)) { computerNumber.push(number) }
  }

  return computerNumber.join('');
}

function checkValue(computerNum, userNum, attempt) {
  let ball = 0;
  let strike = 0;
  
  const computerNumArr = [...computerNum]
  const userNumArr = [...userNum]

  for (i = 0; i < 3; i++) {
    if (computerNumArr[i] === userNumArr[i]) {
      strike += 1;
    }
    else if (computerNumArr.includes(userNumArr[i])) {
      ball += 1;
    }
  }

  getResult(computerNum, userNum, ball, strike, attempt);
}

function getResult(computerNum, userNum, ball, strike, attempt) {
  console.log(`${attempt}번째 시도 : ${userNum}`)
  
  if (strike === 3) {
    console.log(`🎉${attempt}번째 시도 끝에 컴퓨터 숫자 ${computerNum}와 일치합니다!🎉`)
    console.log('게임을 종료합니다.');
    return 
  }
  if (strike !== 0 && ball !== 0) {
    console.log(`${ball}B${strike}S`)
    return
  }
  if (ball === 0 && strike !== 0) {
    console.log(`${strike}S`)
    return
  }
  if (strike === 0 && ball !== 0) {
    console.log(`${ball}B`)
    return
  }
  console.log(`OB0S`)
} 
