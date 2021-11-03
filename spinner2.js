let symbols = [ '\r|   ', '\r/   ', '\r-   ', '\r\\   ', '\r|   ', '\r/   ', '\r-   ', '\r\\   ', '\r|   '];

let delay = 0;

let incr = 200;

for (const symbol in symbols) {
  setTimeout(() => {
    process.stdout.write(symbols[symbol]);
  }, delay += incr);
  
}