import {intro} from '../templates/intro';
import {greeting} from '../templates/greeting';
import {rules} from '../templates/rules';
import {game1} from '../templates/game1';
import {game2} from '../templates/game2';
import {game3} from '../templates/game3';
import {stats} from '../templates/stats';
import handleName from './events/handleName';
import handleAnswer from './events/handleAnswer';

const initialState = {
  currentScreen: `intro`,
  lifes: 3,
  time: 0
};

const stages = {
  'intro': {
    screen: intro,
    next: {screen: `greeting`, class: `intro__asterisk`},
  },
  'greeting': {
    screen: greeting,
    next: {screen: `rules`, class: `greeting__continue`}
  },
  'rules': {
    disabled: true,
    value: ``,
    screen: rules,
    next: {screen: `game1`, class: `rules__button`},
    events: [
      {
        type: `input`,
        class: `rules__input`,
        func: (state, nextStages, cb, input) => handleName(state, nextStages, cb, input)
      }
    ]
  },
  'game1': {
    screen: game1,
    next: {screen: `game2`},
    content: {
      title: `Угадайте для каждого изображения фото или рисунок?`,
      photo: [`http://i.imgur.com/1KegWPz.jpg`, `https://k42.kn3.net/CF42609C8.jpg`],
      answers: [0, 3]
    },
    events: [
      {
        type: `click`,
        class: `game__answer`,
        func: (e, elements, state, nextStages, cb) => handleAnswer(e, elements, state, nextStages, cb)
      }
    ]
  },
  'game2': {
    screen: game1,
    next: {screen: `game3`},
    content: {
      title: `Угадайте для каждого изображения фото или рисунок?`,
      photo: [`https://i.imgur.com/DiHM5Zb.jpg`, `https://k42.kn3.net/D2F0370D6.jpg`],
      answers: [0, 3]
    },
    events: [
      {
        type: `click`,
        class: `game__answer`,
        func: (e, elements, state, nextStages, cb) => handleAnswer(e, elements, state, nextStages, cb)
      }
    ]
  },
  'game3': {
    screen: game2,
    next: {screen: `game4`},
    content: {
      title: `Угадай, фото или рисунок?`,
      photo: [`https://i.imgur.com/6nKqm1A.jpg`],
      answers: [1]
    },
    events: [
      {
        type: `click`,
        class: `game__answer`,
        func: (e, elements, state, nextStages, cb) => handleAnswer(e, elements, state, nextStages, cb)
      }
    ]
  },
  'game4': {
    screen: game1,
    next: {screen: `game5`},
    content: {
      title: `Угадайте для каждого изображения фото или рисунок?`,
      photo: [`https://i.pinimg.com/originals/4f/cb/79/4fcb7962dfda535af9c12d83721aaba0.jpg`, `http://htekidsnews.com/wp-content/uploads/2011/05/camel-thorn-trees-namibia_35259_990x742-600x449.jpg`],
      answers: [1, 2]
    },
    events: [
      {
        type: `click`,
        class: `game__answer`,
        func: (e, elements, state, nextStages, cb) => handleAnswer(e, elements, state, nextStages, cb)
      }
    ]
  },
  'game5': {
    screen: game3,
    next: {screen: `game6`},
    content: {
      title: `Найдите рисунок среди изображений`,
      photo: [`https://mymodernmet.com/wp/wp-content/uploads/archive/9whTQqiyQmQM-AideREF_1082129986.jpeg`, `https://www.nasa.gov/sites/default/files/styles/full_width_feature/public/p50142.jpg`, `https://i.imgur.com/0ngvilj.jpg`],
      answers: [2]
    },
    events: [
      {
        type: `click`,
        class: `game__option`,
        func: (e, elements, state, nextStages, cb) => handleAnswer(e, elements, state, nextStages, cb)
      }
    ]
  },
  'game6': {
    screen: game3,
    next: {screen: `game7`},
    content: {
      title: `Найдите изображение среди рисунков`,
      photo: [`https://i.pinimg.com/originals/ba/4e/2a/ba4e2a3b8bdf26a1872c7c00b1d3ebd8.jpg`, `https://secure.i.telegraph.co.uk/multimedia/archive/01604/Jamie-and-Alexa_1604021i.jpg`, `http://www.krogen.co/wp-content/uploads/2017/10/realistic-painting-best-25-hyper-realistic-paintings-ideas-only-on-pinterest-picture.jpg`],
      answers: [1]
    },
    events: [
      {
        type: `click`,
        class: `game__option`,
        func: (e, elements, state, nextStages, cb) => handleAnswer(e, elements, state, nextStages, cb)
      }
    ]
  },
  'game7': {
    screen: game1,
    next: {screen: `game8`},
    content: {
      title: `Угадайте для каждого изображения фото или рисунок?`,
      photo: [`https://qph.fs.quoracdn.net/main-qimg-f8f8bc1608104624854e64cfe62ebf8d-c`, `https://i2.wp.com/gamesretrospect.com/wp-content/uploads/2014/01/Dear-Esther-04.jpg`],
      answers: [0, 2]
    },
    events: [
      {
        type: `click`,
        class: `game__answer`,
        func: (e, elements, state, nextStages, cb) => handleAnswer(e, elements, state, nextStages, cb)
      }
    ]
  },
  'game8': {
    screen: game1,
    next: {screen: `game9`},
    content: {
      title: `Угадайте для каждого изображения фото или рисунок?`,
      photo: [`http://bucket.trending.com/trending/reddit/2017-12-12/this-new-painting-of-prince-phillip-looks-like-woodhouse-from-archer_preview.jpg`, `http://oddstuffmagazine.com/wp-content/uploads/2013/06/drawings29-610x610.jpg`],
      answers: [1, 3]
    },
    events: [
      {
        type: `click`,
        class: `game__answer`,
        func: (e, elements, state, nextStages, cb) => handleAnswer(e, elements, state, nextStages, cb)
      }
    ]
  },
  'game9': {
    screen: game1,
    next: {screen: `game10`},
    content: {
      title: `Угадайте для каждого изображения фото или рисунок?`,
      photo: [`http://brekend.nl/wp-content/uploads/2013/07/joongwon-jeong1.jpg`, `https://media.timeout.com/images/105148243/630/472/image.jpg`],
      answers: [1, 2]
    },
    events: [
      {
        type: `click`,
        class: `game__answer`,
        func: (e, elements, state, nextStages, cb) => handleAnswer(e, elements, state, nextStages, cb)
      }
    ]
  },
  'game10': {
    screen: game1,
    next: {screen: `stats`},
    content: {
      title: `Угадайте для каждого изображения фото или рисунок?`,
      photo: [`https://i.pinimg.com/originals/99/99/c6/9999c65139c6d0c784152c6469656069.jpg`, `http://www.cuded.com/wp-content/uploads/2013/01/robert_by_jw_jeong600_600.jpg`],
      answers: [0, 3]
    },
    events: [
      {
        type: `click`,
        class: `game__answer`,
        func: (e, elements, state, nextStages, cb) => handleAnswer(e, elements, state, nextStages, cb)
      }
    ]
  },
  'stats': {
    screen: stats,
    next: {screen: `stats`},
    content: {
      title: `Угадайте для каждого изображения фото или рисунок?`
    }
  },
  'results': []
};

export {initialState, stages};
