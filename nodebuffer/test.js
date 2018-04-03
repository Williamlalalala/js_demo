var bin = new Buffer([0x68, 0x65, 0x6c, 0x6c, 0x6f]);
var sub = bin.slice(2);

sub[0] = 0x65;
console.log(bin); // => <Buffer 68 65 65 6c 6f>


function main(argv) {
    var str = argv[0] + argv[1];
    console.log(str);
}


main(process.argv.slice(2));