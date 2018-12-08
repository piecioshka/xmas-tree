function v4(levels) {
    Array.from({ length: levels })
        .map((_, i) => {
            return i;
        })
        .filter(x => x)
        .map((i) => {
            const countLabel = (i > 0)
                ? i + (i - 1)
                : i;
            const countEmpty = (levels - i - 1);
            return ' '.repeat(countEmpty) + '*'.repeat(countLabel);
        })
        .forEach((line) => {
            console.log('%c' + line, 'font-size: 20px; color: #0f0;');
        });

    console.log('%c  XMas Tree', 'font-size: 20px;');
}

console.log('%cv4:', 'font-size: 25px; color: #f00');

v4(8);
