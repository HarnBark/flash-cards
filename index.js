/* eslint-disable eqeqeq */
const fs = require('fs');
const readlineSync = require('readline-sync');

function start() {
  console.log('Привет!');
  console.log('');
  console.log('Выбери тему:\n');
  console.log(' 1. Ястребы\n 2. Выдры\n 3. Еноты\n');

  const readLine = readlineSync.question('>---');
  let pointsCounter = 0;

  // eslint-disable-next-line no-shadow
  function questionQuiz(readLine) {
    if (readLine == 1) {
      const readFile = fs.readFileSync(
        `${__dirname}/topics/nighthawk_flashcard_data.txt`,
        'utf-8'
      );
      const questionArr = readFile.split('\n');
      for (let i = 0; i < questionArr.length; i += 3) {
        console.log(questionArr[i]);
        const answer = readlineSync.question('Твой ответ: ');
        if (answer.toLowerCase() === questionArr[i + 1].toLowerCase()) {
          console.log('right!');
          pointsCounter += 1;
        } else {
          console.log('Noo!');
        }
      }
    }
  }
  questionQuiz(readLine);
  console.log('Твой результат: ', pointsCounter);
}
start();
