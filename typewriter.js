const sentence = "hello there from lighthouse labs";

for (let x = 0; x <= sentence.length; x++) {
  if (x === 0) {
    process.stdout.write(sentence[x]);
  } else if (sentence[x]) {
    setTimeout(() => {
      process.stdout.write(sentence[x]);
    }, x * 80);
  } else {
    setTimeout(() => {
      process.stdout.write('\n');
    }, sentence.length * 80);
  }
}