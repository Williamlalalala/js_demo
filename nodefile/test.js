var fs = require("fs");

function travel(dir, callback) {
    fs.readdirSync(dir).forEach(function(file) {
        var pathname = path.join(dir, file);
        if (fs.statSync(pathname).isDictionary()) {
            travel(pathname, callback);
        } else {
            callback(pathname);
        }
    })
}

function main(argv) {
    travel(argv[0], argv[1]);
}

main(process.argv.slice(2));