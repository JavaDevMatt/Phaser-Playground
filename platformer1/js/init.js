var initState = {

	preload: function(){

		var loadingLabel = game.add.text(20, 150, 'loading game data...', 
			{font: '40px Courier', fill: '#fff'});

		// add content loadin here
		// game.load.image('img', 'assets/img.png');

	},

	create: function() {
		game.physics.startSystem(Phaser.Physics.ARCADE);
		
		game.state.start('menu');
	}

};