function example2(levels) {
    var star = '*';
    var space = ' ';

    function chars(number, char) {
        var r = '';

        for (var j = 0; j < number; j++) {
            r = r + char;
        }

        return r;
    }

    for (var i = 1; i <= levels; i++) {
        var line = chars(levels - i, space) + chars(i + i - 1, star);
        console.log('%c' + line, 'font-size: 20px; color: #0f0;');
    }

    console.log('%c XMas Tree', 'font-size: 20px;');
}

console.log('%cExample 2:', 'font-size: 25px; color: #f00');

example2(6);
