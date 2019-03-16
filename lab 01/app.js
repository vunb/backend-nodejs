var fs = require('fs');

fs.readFile('input.txt', 'utf-8', (err, data) => {
    if (err) {
        console.log('Co loi xay ra: ' + err);
        return;
    } else {
        console.log(data);
    }
});

// 02.
var bContent = fs.readFileSync('b.txt', 'utf-8');
console.log(bContent);

console.log('Done!!!!');

