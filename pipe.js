const fs = require("fs");

const source = fs.createReadStream("sourceFile.txt");
const destination = fs.createWriteStream("destinationFile.txt");

let totalBytes = 0;

source.pipe(destination);

source.on("data", (chunk) => {
  totalBytes += chunk.length;
  console.log(`Copied ${totalBytes} bytes of data.`);
});

source.on("end", () => {
  console.log("File copy completed.");
});

source.on("error", (err) => {
  console.error("Read Error:", err);
});

destination.on("error", (err) => {
  console.error("Write Error:", err);
});
