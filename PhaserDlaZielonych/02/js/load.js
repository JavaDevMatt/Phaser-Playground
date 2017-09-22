var loadState = {

	preload: function(){
		game.load.image('asset', 'assets/asset.png');
	},

	create: function() {
		game.state.start('menu');
	}

}