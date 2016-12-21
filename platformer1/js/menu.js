var menuState = {


	create: function() {
		var startLabel = game.add.text(200, game.world.height-180,
		 'Press Spacer Bar to start',
			{font: '25px Arial', fill: '#ffffff'});

		var spaceKey = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);

		spaceKey.onDown.addOnce(this.startGame, this);
	},

	startGame: function(){
		console.log('dummy startGame');
		// game.state.start('play');
	},

};