function example1(levels) {
    var star = '*';
    var space = ' ';

    function stars(number) {
        var r = '';

        for (var j = 0; j < number; j++) {
            r = r + star;
        }

        return r;
    }

    function spaces(number) {
        var r = '';

        for (var k = 0; k < number; k++) {
            r = r + space;
        }

        return r;
    }

    for (var i = 1; i <= levels; i++) {
        var line = spaces(levels - i) + stars(i + i - 1);
        console.log('%c' + line, 'font-size: 20px; color: #0f0;');
    }

    console.log('%cXMas Tree', 'font-size: 20px;');
}

console.log('%cExample 1:', 'font-size: 25px; color: #f00');

example1(5);
