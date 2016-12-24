var playState = {

	 create: function() {	
	 	collisionsHandler = new CollisionsHandler();

	 	canBoostFlag = true;

	 	game.world.setBounds(0, 0, 1245, 376);

	 	game.add.sprite(0, 0, 'background2');
	 	game.add.sprite(640, 0, 'background2');

	 	arrow = game.add.sprite(10, 270, 'arrow');
   		game.physics.arcade.enable(arrow);
   		arrow.body.immovable = true;

	 	player = game.add.sprite(80, 10, 'monster1');
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

        trampolines = game.add.group();
        trampolines.enableBody = true;
        game.physics.arcade.enable(trampolines);

        trampolines.create(240, 270, 'trampoline');
        trampolines.create(280, 270, 'trampoline');
   		trampolines.forEachAlive(function(item) {
   			item.body.bounce.y = 0.2;
   			item.body.gravity.y = 300;
   			item.body.collideWorldBounds = true;
		}, this);
		

        platforms = game.add.group();
        platforms.enableBody = true;
        var platform1 = platforms.create(0, 300, 'platform');
        platform1.body.immovable = true;
        var platform2 = platforms.create(197, 300, 'platform');
        platform2.body.immovable = true;
        var platform3 = platforms.create(506, 300, 'platform');
        platform3.body.immovable = true;
        var platform4 = platforms.create(646, 300, 'platform');
        platform4.body.immovable = true;
        var platform5 = platforms.create(787, 300, 'platform');
        platform5.body.immovable = true;
        var platform6 = platforms.create(928, 300, 'platform');
        platform6.body.immovable = true;
        var platform7 = platforms.create(1049, 300, 'platform');
        platform7.body.immovable = true;

        faller = game.add.sprite(420, 282, 'faller');
        game.physics.arcade.enable(faller);

        slowFaller = game.add.sprite(120, 162, 'faller');
        game.physics.arcade.enable(slowFaller);

        rider = game.add.sprite(290, 50, 'faller');
        game.physics.arcade.enable(rider);
        rider.body.immovable = true;
        rider.body.bounce.setTo(1, 1);
        rider.body.collideWorldBounds = true;
        rider.body.velocity.setTo(-100, 0);


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
        lava5 = killers.create(1190, 332, 'lava');
        lava5.body.immovable = true;
       
        lava.animations.add('stand', [0, 1], 2, true);
        lava2.animations.add('stand', [0, 1], 2, true);
        lava3.animations.add('stand', [0, 1], 2, true);
        lava4.animations.add('stand', [0, 1], 2, true);
        lava5.animations.add('stand', [0, 1], 2, true);

        cursors = game.input.keyboard.createCursorKeys();
        game.camera.follow(player); 
	 },

	 update: function() {   
	 	collisionsHandler.update()

	 	player.animations.play('stand');
	 	goal.animations.play('stand');
	 	lava.animations.play('stand');
	 	lava2.animations.play('stand');
	 	lava3.animations.play('stand');
	 	lava4.animations.play('stand');
	 	lava5.animations.play('stand');

	 	slowFaller.body.velocity.x = 0;
	 	slowFaller.body.velocity.y = 0;

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

	    game.physics.arcade.overlap(player, trampolines, this.trampolinePlayer, null, this);
	    trampolines.forEachAlive(function(item) {
	    	item.body.velocity.x = 0;
		}, this);

	    faller.body.velocity.x = 0;
	    game.physics.arcade.overlap(player, arrow, null, this.arrowBoost, this);
	 },

	 arrowBoost: function(){
	 	if(canBoostFlag){
	 		game.sound.play('ding')
	 		canBoostFlag = false;
	 		arrow.kill();
		 	setTimeout(function(){
		 		canBoostFlag = true;
		 		player.body.velocity.y = -500;
			}, 3000);
	 	}
	 	 
	 },

	 trampolinePlayer: function(){
	 	player.body.velocity.y -= 200;
	 	game.sound.play('trampoline_jump');
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
	 	var loadingLabel = game.add.text(player.x - 100, player.y - 150, 'YOU WIN', 
			{font: '40px Courier', fill: '#fff'});
	 	setTimeout(function(){
	 		game.state.start('menu');
		}, 2000);
	 	
	 },

};