// function generateResults() {
//   const results = {
//     correctAvarage: [],
//     correctFast: [],
//     correctSlow: [],
//     wrongAvarage: [],
//     wrongFast: [],
//     wrongSlow: []
//   };

//   for (let i = 1; i < 11; i++) {
//     const fast = Math.floor(Math.random() * 10);
//     const avarage = Math.floor(Math.random() * 10) + 10;
//     const slow = Math.floor(Math.random() * 11) + 30;

//     results.correctAvarage.push({
//       correct: true,
//       time: avarage
//     });
//     results.correctFast.push({
//       correct: true,
//       time: fast
//     });
//     results.correctSlow.push({
//       correct: true,
//       time: slow
//     });
//     results.wrongAvarage.push({
//       correct: i > 5 ? true : false,
//       time: avarage
//     });
//     results.wrongFast.push({
//       correct: i > 5 ? true : false,
//       time: fast
//     });
//     results.wrongSlow.push({
//       correct: i > 5 ? true : false,
//       time: slow
//     });
//   }
//   return results;
// }

// export default generateResults;
