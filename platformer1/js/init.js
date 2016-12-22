var initState = {

	preload: function(){

		var loadingLabel = game.add.text(20, 150, 'loading game data...', 
			{font: '40px Courier', fill: '#fff'});

		// add content loadin here
		game.load.audio('music', 'assets/music.mp3'); // http://opengameart.org/content/rise-of-spirit
		game.load.image('background', 'assets/background.png'); // http://opengameart.org/content/industrial-parallax-background
		game.load.image('background2', 'assets/background2.png');
		game.load.image('platform', 'assets/platform.png');
		game.load.image('faller', 'assets/faller.png'); 
		game.load.image('trampoline', 'assets/trampoline.png');

		game.load.spritesheet('monster1', 'assets/monster1.png', 30, 23); // http://opengameart.org/content/scifi-creature-tileset-mini-32x32-scifi-creature-icons 
		game.load.spritesheet('lava', 'assets/lava.png', 56, 32); 

		game.load.audio('splash', 'assets/splash.mp3'); // http://opengameart.org/content/lava-splash
		game.load.audio('jump', 'assets/jump.mp3');
		game.load.audio('die', 'assets/die.mp3');
	},

	initStuff: function(){
		game.physics.startSystem(Phaser.Physics.ARCADE);
	},

	create: function() {
		this.initStuff();
		
		game.state.start('menu');
	}

};