let arr = ["\r|   ", "\r/   ", "\r-   ", "\r\\   ", "\r|   "];
let delay = 100;
for (let i = 0; i <= 4; i++) {
  delay = delay + 200;
  setTimeout(function() {
    process.stdout.write(arr[i]);
  }, delay);
}