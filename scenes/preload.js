// this class for asserts initialization
class Preload extends Phaser.Scene {
    constructor() {
        super({key: 'Preload', active: false});
    }

    init() {
        // Globals
        this.URL = this.sys.game.URL;
        this.CONFIG = this.sys.game.CONFIG;
    }

    preload() {
        // create loading bar 
        this.createLoadingBar();

        // SpriteSheets
        this.load.setPath(this.URL + 'assets/img');

        // files
        this.load.spritesheet('spr-hero', 'spr-hero.png', {
            frameWidth: 6,
            frameHeight: 6,
            endFrame: 3,
            margin: 1,
            spacing: 2
        });

    }

    create() {
        // Go menu
        this.time.addEvent({
            delay: 1000,
            callback: () => {this.scene.start('Menu');},
            callbackScope: this
        });
        // this.scene.start('Menu');
    }

    createLoadingBar() {
        // Title
        this.title = new Text(
            this,
            this.CONFIG.centerX,
            75,
            'Loading Game',
            'preload',
            0.5
        );
        // Progress text
        this.txt_progress = new Text(
            this,
            this.CONFIG.centerX,
            this.CONFIG.centerY - 5,
            'Loading .... ',
            'preload',
            {x: 0.5, y: 1}
        );

        // Progress bar
        var x = 10;
        var y = this.CONFIG.centerY + 5;
        // var w = this.CONFIG.width - 2 * x;
        // var h = 18;

        this.progress = this.add.graphics({x: x, y: y});
        this.border = this.add.graphics({x: x, y: y});

        // Progress callback

        this.load.on('progress', this.onProgress, this);
    }

    onProgress(val) {
        // width of progress bar
        var w = this.CONFIG.width - 2*this.progress.x;
        var h = 18;

        this.progress.clear();
        this.progress.fillStyle('0xFFFFFF', 1);
        this.progress.fillRect(0, 0, w * val, h);

        this.border.clear();
        this.border.lineStyle(2,'0x4D6592', 1);
        this.border.strokeRect(0, 0, w * val, h);

        // Percentage in progress text
        this.txt_progress.setText(Math.round(val * 100) + '%');
        console.log(this.txt_progress.text);
    }

}


// 240 *360