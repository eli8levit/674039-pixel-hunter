// function timer(time, done) {
//   if (!time) {
//     throw new Error(`time is not defined`);
//   } else if (typeof time !== `number`) {
//     throw new Error(`type of time must be a number`);
//   } else if (!done) {
//     throw new Error(`done is not defined`);
//   } else if (typeof done !== `function`) {
//     throw new Error(`type of done must be a function`);
//   } else if (time > 1000) {
//     throw new Error(`time is too big`);
//   }
//   return () => {
//     const tick = setInterval(() => {
//       if (time === 0) {
//         clearInterval(tick);
//         done();
//       }
//       time -= 1;
//     }, 1000);
//   };
// }

// export default timer;
