function example3(levels) {
    var star = '*';

    for (var i = 1; i <= levels; i++) {
        var line = new Array(levels - i + 1).join(' ');
        line += new Array(i + 1).join(star);
        line += new Array(i).join(star);
        console.log('%c' + line, 'font-size: 20px; color: #0f0;');
    }

    console.log('%c  XMas Tree', 'font-size: 20px;');
}

console.log('%cExample 3:', 'font-size: 25px; color: #f00');

example3(7);
