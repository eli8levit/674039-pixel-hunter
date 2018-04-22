const initialState = {
  currentScreen: `intro`,
  nameInput: ``,
  lifes: 3,
  time: 0,
  game: false,
  results: [],
  stages: {
    'intro': {next: `greeting`},
    'greeting': {next: `rules`},
    'rules': {next: `game1`},
    'game1': {
      screen: `game1`,
      next: `game2`,
      content: {
        title: `Угадайте для каждого изображения фото или рисунок?`,
        photo: [`http://i.imgur.com/1KegWPz.jpg`, `https://k42.kn3.net/CF42609C8.jpg`],
        answers: [0, 3]
      }
    },
    'game2': {
      screen: `game1`,
      next: `game3`,
      content: {
        title: `Угадайте для каждого изображения фото или рисунок?`,
        photo: [`https://i.imgur.com/DiHM5Zb.jpg`, `https://k42.kn3.net/D2F0370D6.jpg`],
        answers: [0, 3]
      }
    },
    'game3': {
      screen: `game2`,
      next: `game4`,
      content: {
        title: `Угадай, фото или рисунок?`,
        photo: [`https://i.imgur.com/6nKqm1A.jpg`],
        answers: [1]
      }
    },
    'game4': {
      screen: `game1`,
      next: `game5`,
      content: {
        title: `Угадайте для каждого изображения фото или рисунок?`,
        photo: [`https://i.pinimg.com/originals/4f/cb/79/4fcb7962dfda535af9c12d83721aaba0.jpg`, `http://htekidsnews.com/wp-content/uploads/2011/05/camel-thorn-trees-namibia_35259_990x742-600x449.jpg`],
        answers: [1, 2]
      }
    },
    'game5': {
      screen: `game3`,
      next: `game6`,
      content: {
        title: `Найдите рисунок среди изображений`,
        photo: [`https://mymodernmet.com/wp/wp-content/uploads/archive/9whTQqiyQmQM-AideREF_1082129986.jpeg`, `https://www.nasa.gov/sites/default/files/styles/full_width_feature/public/p50142.jpg`, `https://i.imgur.com/0ngvilj.jpg`],
        answers: [2]
      },
    },
    'game6': {
      screen: `game3`,
      next: `game7`,
      content: {
        title: `Найдите изображение среди рисунков`,
        photo: [`https://i.pinimg.com/originals/ba/4e/2a/ba4e2a3b8bdf26a1872c7c00b1d3ebd8.jpg`, `https://secure.i.telegraph.co.uk/multimedia/archive/01604/Jamie-and-Alexa_1604021i.jpg`, `http://www.krogen.co/wp-content/uploads/2017/10/realistic-painting-best-25-hyper-realistic-paintings-ideas-only-on-pinterest-picture.jpg`],
        answers: [1]
      }
    },
    'game7': {
      screen: `game1`,
      next: `game8`,
      content: {
        title: `Угадайте для каждого изображения фото или рисунок?`,
        photo: [`https://qph.fs.quoracdn.net/main-qimg-f8f8bc1608104624854e64cfe62ebf8d-c`, `https://i2.wp.com/gamesretrospect.com/wp-content/uploads/2014/01/Dear-Esther-04.jpg`],
        answers: [0, 2]
      }
    },
    'game8': {
      screen: `game1`,
      next: `game9`,
      content: {
        title: `Угадайте для каждого изображения фото или рисунок?`,
        photo: [`http://bucket.trending.com/trending/reddit/2017-12-12/this-new-painting-of-prince-phillip-looks-like-woodhouse-from-archer_preview.jpg`, `http://oddstuffmagazine.com/wp-content/uploads/2013/06/drawings29-610x610.jpg`],
        answers: [1, 3]
      }
    },
    'game9': {
      screen: `game1`,
      next: `game10`,
      content: {
        title: `Угадайте для каждого изображения фото или рисунок?`,
        photo: [`http://brekend.nl/wp-content/uploads/2013/07/joongwon-jeong1.jpg`, `https://media.timeout.com/images/105148243/630/472/image.jpg`],
        answers: [1, 2]
      }
    },
    'game10': {
      screen: `game1`,
      next: `stats`,
      content: {
        title: `Угадайте для каждого изображения фото или рисунок?`,
        photo: [`https://i.pinimg.com/originals/99/99/c6/9999c65139c6d0c784152c6469656069.jpg`, `http://www.cuded.com/wp-content/uploads/2013/01/robert_by_jw_jeong600_600.jpg`],
        answers: [0, 3]
      }
    },
    'stats': {
      screen: `stats`,
      content: {
        title: `Угадайте для каждого изображения фото или рисунок?`
      }
    },
  }
};

export default initialState;
