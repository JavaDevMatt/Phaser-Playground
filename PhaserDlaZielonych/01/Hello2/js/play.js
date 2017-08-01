var cursors;
var player;

var playState = {

	preload: function(){
		game.load.image('asset', 'assets/asset.png');
	},

	create: function() {
		player = game.add.sprite(100, 100, 'asset');

		cursors = game.input.keyboard.createCursorKeys();
	},

	update: function() {
		
		if (cursors.left.isDown){
	        player.x -= 1;
	    } 

	    if (cursors.right.isDown){
	        player.x += 1;
	    } 

	    if (cursors.down.isDown){
	        player.y += 1;
	    }  

	    if (cursors.up.isDown){
	        player.y -= 1;
	    }
	    
	}

};