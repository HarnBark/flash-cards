/* eslint-disable eqeqeq */
const fs = require('fs');
const readlineSync = require('readline-sync');

function start() {
  console.log('Привет!');
  console.log('');
  console.log('Выбери тему:\n');
  console.log(' 1. Автомобили\n 2. Тюремная романтика\n 3. Спорт\n');

  const readLine = readlineSync.question('>---');
  let pointsCounter = 0;

  // eslint-disable-next-line no-shadow
  function questionQuiz(readLine) {
    if (readLine == 1) {
      const readFile = fs.readFileSync(`${__dirname}/topics/cars.txt`, 'utf-8');
      const questionArr = readFile.split('\n');
      for (let i = 0; i < questionArr.length; i += 3) {
        console.log(questionArr[i]);
        const answer = readlineSync.question('Твой ответ: ');
        if (answer.toLowerCase() === questionArr[i + 1].toLowerCase()) {
          console.log('\uD83D\uDE97', 'Мотор!');
          console.log('');
          pointsCounter += 1;
        } else {
          console.log('\x1b[31m', 'Притормозил ты');
          console.log(
            '\x1b[36m%s\x1b[0m',
            'Правильный ответ',
            questionArr[i + 1],
            '\n'
          );
        }
      }
    }

    if (readLine == 2) {
      const readFile = fs.readFileSync(
        `${__dirname}/topics/prisonsJokes.txt`,
        'utf-8'
      );
      const questionArr = readFile.split('\n');
      for (let i = 0; i < questionArr.length; i += 3) {
        console.log(questionArr[i]);
        const answer = readlineSync.question('Твой ответ: ');
        if (answer.toLowerCase() === questionArr[i + 1].toLowerCase()) {
          console.log('Вечер в хату!');
          console.log('');
          pointsCounter += 1;
        } else {
          console.log('\x1b[31m', 'Теперь ты опущенный! \uD83D\uDC13');
          console.log(
            '\x1b[36m%s\x1b[0m',
            'Правильный ответ',
            questionArr[i + 1],
            '\n'
          );
        }
      }
    }
    if (readLine == 3) {
      const readFile = fs.readFileSync(
        `${__dirname}/topics/sport.txt`,
        'utf-8'
      );
      const questionArr = readFile.split('\n');
      for (let i = 0; i < questionArr.length; i += 3) {
        console.log(questionArr[i]);
        const answer = readlineSync.question('Твой ответ: ');
        if (answer.toLowerCase() === questionArr[i + 1].toLowerCase()) {
          console.log('\u26BD', 'Ты чемпион!');
          console.log('');
          pointsCounter += 1;
        } else {
          console.log('\x1b[31m', 'Лузер!');
          console.log(
            '\x1b[36m%s\x1b[0m',
            'Правильный ответ',
            `${questionArr[i + 1]}`,
            '\n'
          );
        }
      }
    }
  }
  questionQuiz(readLine);
  console.log('\x1b[32m', 'Твой результат: ', pointsCounter);
}
start();
