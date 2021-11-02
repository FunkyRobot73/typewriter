const string = "What's happening?\n";
let delay = 300;
for ( let x of string) {
  setTimeout(() => {
    process.stdout.write(x);
  }, delay);
  delay += 300;
  
}