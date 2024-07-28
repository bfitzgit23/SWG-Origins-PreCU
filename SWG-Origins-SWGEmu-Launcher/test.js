const request = require('request');
const fs = require('fs');
var url = "https://codeberg.org/gitfitz1/SWG-Origins-Launcher/raw/branch/main/pre-pub-9-jedi.tre";
var file = fs.createWriteStream("C:\\SWG-Origins\pre-pub-9-jedi.tre");
request(url).on('error', err => {
    process.send("download error " + err);
    file.close();
    fs.unlink(dest);
    if (cb) cb(err.message);
})
.on('close', e=>console.log('done'))
.pipe(file);
