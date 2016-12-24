var menuState = {


	create: function() {
		if(music != null){
			music.stop();
		}
		music = gameLogic.game.sound.play('music');
		music.volume = 1.0;
		gameLogic.game.add.sprite(0, 0, 'background');

		monster1 = gameLogic.game.add.sprite(160, gameLogic.game.world.height-60, 'monster1');
		monster1.animations.add('stand', [0, 1, 2], 5, true);

		monster2 = gameLogic.game.add.sprite(430, gameLogic.game.world.height-60, 'monster1');
		monster2.animations.add('stand', [0, 1, 2], 5, true);
		

		var startLabel = gameLogic.game.add.text(200, gameLogic.game.world.height-60,
		 'press Space to start',
			{font: '25px Arial', fill: '#ffffff'});

		var spaceKey = gameLogic.game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);

		spaceKey.onDown.addOnce(this.startGame, this);
	},

	update: function() {
		monster1.animations.play('stand');
		monster2.animations.play('stand');
	},

	startGame: function(){
		music.volume = 0.5;
		gameLogic.game.sound.play('splash');
		console.log('dummy startGame');
		gameLogic.game.state.start('level01');
	},

};