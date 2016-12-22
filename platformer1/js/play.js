var playState = {

	 create: function() {	
	 	game.add.sprite(0, 0, 'background2');

	 	player = game.add.sprite(10, 10, 'monster1');
		player.animations.add('stand', [0, 1, 2], 5, true);
		game.physics.arcade.enable(player);
		player.body.bounce.y = 0.2;
   		player.body.gravity.y = 300;
        player.body.collideWorldBounds = true;

		goal = game.add.sprite(560, 10, 'monster1');
		goal.animations.add('stand', [0, 1, 2], 5, true);
		game.physics.arcade.enable(goal);
		goal.body.bounce.y = 0.2;
   		goal.body.gravity.y = 300;
        goal.body.collideWorldBounds = true;

        trampoline = game.add.sprite(240, 270, 'trampoline');
		game.physics.arcade.enable(trampoline);
		trampoline.body.bounce.y = 0.2;
   		trampoline.body.gravity.y = 300;
   		trampoline.body.collideWorldBounds = true;

		

        platforms = game.add.group();
        platforms.enableBody = true;
        var platform1 = platforms.create(0, 300, 'platform');
        platform1.body.immovable = true;
        var platform2 = platforms.create(197, 300, 'platform');
        platform2.body.immovable = true;
        var platform3 = platforms.create(506, 300, 'platform');
        platform3.body.immovable = true;

        faller = game.add.sprite(420, 282, 'faller');
        game.physics.arcade.enable(faller);


        killers = game.add.group();
        killers.enableBody = true;
        lava = killers.create(141, 332, 'lava');
        lava.body.immovable = true;
        lava2 = killers.create(338, 332, 'lava');
        lava2.body.immovable = true;
        lava3 = killers.create(394, 332, 'lava');
        lava3.body.immovable = true;
        lava4 = killers.create(450, 332, 'lava');
        lava4.body.immovable = true;
       
        lava.animations.add('stand', [0, 1], 2, true);
        lava2.animations.add('stand', [0, 1], 2, true);
        lava3.animations.add('stand', [0, 1], 2, true);
        lava4.animations.add('stand', [0, 1], 2, true);

        cursors = game.input.keyboard.createCursorKeys();
	 },

	 update: function() {   
	 	game.physics.arcade.collide(player, platforms);
	 	game.physics.arcade.collide(player, faller);
	 	game.physics.arcade.collide(player, goal);
	 	game.physics.arcade.collide(platforms, goal);
	 	game.physics.arcade.collide(player, trampoline);
	 	game.physics.arcade.collide(trampoline, platforms);

	 	player.animations.play('stand');
	 	goal.animations.play('stand');
	 	lava.animations.play('stand');
	 	lava2.animations.play('stand');
	 	lava3.animations.play('stand');
	 	lava4.animations.play('stand');


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

	    game.physics.arcade.overlap(player, killers, this.die, null, this);
	    game.physics.arcade.overlap(goal, killers, this.win, null, this);

	    game.physics.arcade.overlap(player, trampoline, this.trampolinePlayer, null, this);
	    trampoline.body.velocity.x = 0;
	 },

	 trampolinePlayer: function(){
	 	player.body.velocity.y -= 200;
	 },

	 die: function(){
	 	game.sound.play('die');
	 	player.x = -1000;
	 	setTimeout(function(){
	 		game.state.start('play');
		}, 600);
	 	
	 },

	 win: function(){
	 	game.sound.play('splash');
	 	goal.x = -1000;
	 	var loadingLabel = game.add.text(20, 150, 'YOU WIN', 
			{font: '40px Courier', fill: '#fff'});
	 	setTimeout(function(){
	 		game.state.start('menu');
		}, 2000);
	 	
	 },

};