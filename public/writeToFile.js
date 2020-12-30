

export function writeToFile() {
    console.log("test")
    const fs = require(fs)
    fs.writeFile('./log/log.txt', 'Hello content!', function (err) {
        if (err) throw err;
        console.log('Saved!');
      });
}
