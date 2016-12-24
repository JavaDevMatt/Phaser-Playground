var initState = {

	preload: function(){

		var loadingLabel = gameLogic.game.add.text(20, 150, 'loading game data...', 
			{font: '40px Courier', fill: '#fff'});

		// add content loadin here
		gameLogic.game.load.audio('music', 'assets/music.mp3'); // http://opengameart.org/content/rise-of-spirit
		gameLogic.game.load.image('background', 'assets/background.png'); // http://opengameart.org/content/industrial-parallax-background
		gameLogic.game.load.image('background2', 'assets/background2.png');
		gameLogic.game.load.image('platform', 'assets/platform.png');
		gameLogic.game.load.image('faller', 'assets/faller.png'); 
		gameLogic.game.load.image('trampoline', 'assets/trampoline.png');
		gameLogic.game.load.image('arrow', 'assets/arrow.png');

		gameLogic.game.load.spritesheet('monster1', 'assets/monster1.png', 30, 23); // http://opengameart.org/content/scifi-creature-tileset-mini-32x32-scifi-creature-icons 
		gameLogic.game.load.spritesheet('lava', 'assets/lava.png', 56, 32); 

		gameLogic.game.load.audio('splash', 'assets/splash.mp3'); // http://opengameart.org/content/lava-splash
		gameLogic.game.load.audio('ding', 'assets/ding.mp3'); // http://freesound.org/people/gloriaeffect/sounds/108428/
		gameLogic.game.load.audio('jump', 'assets/jump.mp3');
		gameLogic.game.load.audio('trampoline_jump', 'assets/trampoline_jump.mp3'); // http://freesound.org/people/arteffect/sounds/349854/
		gameLogic.game.load.audio('die', 'assets/die.mp3');
	},

	initStuff: function(){
		gameLogic.game.physics.startSystem(Phaser.Physics.ARCADE);
	},

	create: function() {
		this.initStuff();
		
		gameLogic.game.state.start('menu');
	}

};