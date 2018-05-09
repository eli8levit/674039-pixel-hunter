import {QuestionTypes, AnswerTypes, Buttons, Answers} from '../data/config';

export default function adaptData(state, data, callback) {
  let adaptedData = {};
  let count = 0;

  const games = data.slice(0, Answers.ANSWERS_AMOUNT);

  const photoAmounts = games.map((game) => game.answers.length);
  const totalPhotoAmount = photoAmounts.reduce((a, b) => a + b);

  try {
    games.forEach((stage, key) => {
      const adaptedStage = {
        screen: stage.type,
        next: `game${key + 1}`,
        content: {
          answers: decideWhichAnswer(stage.answers, stage.type),
          title: stage.question,
          photos: []
        }
      };

      stage.answers.forEach((answer) => {

        const image = new Image();
        image.src = answer.image.url;

        image.onload = () => {
          adaptedStage.content.photos.push(image.src);
          count++;
          if (count === totalPhotoAmount) {
            callback(null, adaptedData);
          }
        };
      });
      adaptedData[`game${key}`] = adaptedStage;
    });

    adaptedData[`game${data.length - 1}`].next = state.endScreen;

  } catch (e) {
    callback(e);
  }
}

const decideWhichAnswer = (answers, type) => {

  const adaptedAnswers = [];
  let firstAnswer;
  let secondAnswer;

  if (type === QuestionTypes.ONE_OF_THREE) {

    const paintAmount = answers.filter((answer) => answer.type === AnswerTypes.PAINTING).length;

    const rigthType = paintAmount > 1 ? AnswerTypes.PHOTO : AnswerTypes.PAINTING;

    answers.find((answer, key) => {
      if (answer.type === rigthType) {
        adaptedAnswers.push(key);
      }
    });

  } else if (type === QuestionTypes.TWO_OF_TWO) {

    firstAnswer = answers[0].type === AnswerTypes.PHOTO ? Buttons.FIRST_PHOTO : Buttons.FIRST_PAINTING;
    secondAnswer = answers[1].type === AnswerTypes.PHOTO ? Buttons.SECOND_PHOTO : Buttons.SECOND_PAINTING;
    adaptedAnswers.push(firstAnswer, secondAnswer);

  } else if (type === QuestionTypes.TINDER_LIKE) {
    firstAnswer = answers[0].type === AnswerTypes.PHOTO ? Buttons.FIRST_PHOTO : Buttons.FIRST_PAINTING;
    adaptedAnswers.push(firstAnswer);
  }

  return adaptedAnswers;

};
