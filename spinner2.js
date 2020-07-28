
const spinner = ['\r|   ', '\r/   ', '\r-   ','\r|   ', '\r\\  ','\r|   ', '\n'];

for (let i = 0; i < spinner.length; i++) {
  const elementOne = spinner[i];
  setTimeout((data) => {
    process.stdout.write(data);
  }, 100 + i * 200, elementOne);
};



