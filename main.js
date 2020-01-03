function runApp(){
    'use strict';
    
    // init the Phaser game app
    var app = new App();
    app.start();

    window.addEventListener('resize', resizeApp);
    resizeApp();
}

window.onload = function(){
    'use strict';

    // Check ES6
    try {
        eval('let i = 0;');
        eval('const _dev = true');
    } catch (e) {
        this.alert('This browser is not supported. Use Chrome or Firefox.');
        return false;
    }

    //Launch the game
    runApp();
};

function resizeApp(){
    'use strict';
    // width-height- ratio of the game resolution
    var game_ratio = (360/2) / (640/2);

    // Make div full height of browser and keep the ratio of game resolution
    var div = document.getElementById('phaser-app');
    div.style.width = (window.innerHeight * game_ratio) + 'px';
    div.style.width = window.innerHeight + 'px';

    // check if device DPI messes up the width-height.ratio
    var canvas = document.getElementsByTagName('canvas')[0];

    var dpi_w = (parseInt(div.style.width)/ canvas.width);
    var dpi_h = (parseInt(div.style.height)/ canvas.height);

    var height = window.innerHeight * (dpi_w / dpi_h);
    var width = height * game_ratio;

    // Scale canvas
    canvas.style.width = width + 'px';
    canvas.style.height = height + 'px';


}