var playState = {

	 create: function() {	
	 	game.add.sprite(0, 0, 'background2');

	 	player = game.add.sprite(10, 10, 'monster1');
		player.animations.add('stand', [0, 1, 2], 5, true);

		game.physics.arcade.enable(player);
		player.body.bounce.y = 0.2;
   		player.body.gravity.y = 300;
        player.body.collideWorldBounds = true;

        platforms = game.add.group();
        platforms.enableBody = true;
        var platform1 = platforms.create(0, 300, 'platform');
        platform1.body.immovable = true;
        var platform2 = platforms.create(200, 300, 'platform');
        platform2.body.immovable = true;
        platform2.scale.setTo(0.3, 1);

        cursors = game.input.keyboard.createCursorKeys();
	 },

	 update: function() {   
	 	game.physics.arcade.collide(player, platforms);

	 	player.animations.play('stand');

		player.body.velocity.x = 0;
		if (cursors.left.isDown) 
		{
	        player.body.velocity.x = -150;
	    }
	    else if (cursors.right.isDown) 
	    {
	        player.body.velocity.x = 150;
	    }
	    if (cursors.up.isDown && player.body.touching.down)
	    {
	    	game.sound.play('jump');
	        player.body.velocity.y = -150;
	    }
	 },

};