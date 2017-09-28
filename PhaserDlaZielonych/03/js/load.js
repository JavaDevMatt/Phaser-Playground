var loadState = {

	preload: function(){
		game.load.image('asset', 'assets/asset.png');
		game.load.audio('collision', 'assets/collision.mp3');
	},

	create: function() {
		game.physics.startSystem(Phaser.Physics.ARCADE);
		game.state.start('menu');
	}

}