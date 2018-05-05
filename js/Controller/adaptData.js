import QuestionType from '../data/questionType';
import AnswerType from '../data/answerType';

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

  if (type === QuestionType.ONE_OF_THREE) {

    const paintAmount = answers.filter((answer) => answer.type === AnswerType.PAINTING).length;

    const rigthType = paintAmount > 1 ? AnswerType.PHOTO : AnswerType.PAINTING;

    answers.find((answer, key) => {
      if (answer.type === rigthType) {
        adaptedAnswers.push(key);
      }
    });

  } else if (type === QuestionType.TWO_OF_TWO) {

    firstAnswer = answers[0].type === AnswerType.PHOTO ? 0 : 1;
    secondAnswer = answers[1].type === AnswerType.PHOTO ? 2 : 3;
    adaptedAnswers.push(firstAnswer, secondAnswer);

  } else if (type === QuestionType.TINDER_LIKE) {
    firstAnswer = answers[0].type === AnswerType.PHOTO ? 0 : 1;
    adaptedAnswers.push(firstAnswer);
  }

  return adaptedAnswers;

};
