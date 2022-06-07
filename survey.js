const readline = require('readline');
// const args = process.argv.slice(2);
// console.log(args)

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// rl.question('What is your name ? ', (answer) => {
//   console.log(`answer: ${answer}`);
//   rl.close();
// });

// rl.question('What is an activity you like doing? ', (answer) => {
//   console.log(`answer: ${answer}`);
//   rl.close();
// });


rl.question('What do you think of Node.js? ', (answer) => {
  console.log(`Thank you for your valuable feedback: ${answer}`);

  rl.question('What is your name? ', (answer1) => {
    console.log(`Thank you for your valuable feedback: ${answer1}`);

    rl.question('What do you listen to while doing that? ', (answer2) => {
      console.log(`Thank you for your valuable feedback: ${answer2}`);

      rl.close();
    });
  });

});