import {QuestionTypes, AnswerTypes, Buttons} from '../data/config';

export default function adaptData(state, data, callback) {
  let adaptedData = {};

  try {
    data.forEach((stage, key) => {

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
        adaptedStage.content.photos.push(answer.image.url);
      });

      adaptedData[`game${key}`] = adaptedStage;
    });

    adaptedData[`game${data.length - 1}`].next = state.endScreen;

  } catch (e) {
    callback(e);
  }

  callback(null, adaptedData);
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
