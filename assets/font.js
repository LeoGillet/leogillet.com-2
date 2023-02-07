var fonts = ['TerminessTTF Nerd Font', 'Space Mono', 'Victor Mono', 'Cascadia Code', 'FantasqueSans Mono', 'Iosevka Curly', 'JetBrains Mono', 'Monofoki'];
var font = fonts[Math.floor(Math.random() * fonts.length)];

var textEls = document.getElementsByClassName('random-font');

textEls.forEach(element => {
    element.style.fontFamily = font+", monospace";
    console.info("Font randomly chosen: "+font);
});

