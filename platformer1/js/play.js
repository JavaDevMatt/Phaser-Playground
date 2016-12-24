var playState = {


	 create: function() {	 
	 	
	 	canBoostFlag = true;

	 	level = new Level1();

	 	level.createBackground(game);

	 	arrow = game.add.sprite(10, 270, 'arrow');
   		game.physics.arcade.enable(arrow);
   		arrow.body.immovable = true;

	 	player = game.add.sprite(level.playerStartingX, level.playerStartingY, 'monster1');
		player.animations.add('stand', [0, 1, 2], 5, true);
		game.physics.arcade.enable(player);
		player.body.bounce.y = 0.2;
   		player.body.gravity.y = 300;
        player.body.collideWorldBounds = true;

		evilTwin = game.add.sprite(level.evilTwinStartingX, level.evilTwinStartingY, 'monster1');
		evilTwin.animations.add('stand', [0, 1, 2], 5, true);
		game.physics.arcade.enable(evilTwin);
		evilTwin.body.bounce.y = 0.2;
   		evilTwin.body.gravity.y = 300;
        evilTwin.body.collideWorldBounds = true;

        trampolines = game.add.group();
        trampolines.enableBody = true;
        game.physics.arcade.enable(trampolines);
        level.addTrampolines(trampolines);
   		trampolines.forEachAlive(function(item) {
   			item.body.bounce.y = 0.2;
   			item.body.gravity.y = 300;
   			item.body.collideWorldBounds = true;
		}, this);
		

        platforms = game.add.group();
        platforms.enableBody = true;
        level.addtPlatforms(platforms);
        platforms.forEachAlive(function(item) {
        	item.body.immovable = true;
		}, this);

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
        killers.create(141, 332, 'lava');
        killers.create(338, 332, 'lava');
        killers.create(394, 332, 'lava');
        killers.create(450, 332, 'lava');
        killers.create(1190, 332, 'lava');

        killers.forEachAlive(function(item) {
       	 	item.body.immovable = true;
       	 	item.animations.add('stand', [0, 1], 2, true);
		}, this);
       
        cursors = game.input.keyboard.createCursorKeys();
        game.camera.follow(player); 

        collisionsHandler = new CollisionsHandler();
	 },

	 update: function() {   
	 	collisionsHandler.update()

	 	player.animations.play('stand');
	 	evilTwin.animations.play('stand');

	 	killers.forEachAlive(function(item) {
       	 	item.animations.play('stand');
		}, this);

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
	    game.physics.arcade.overlap(evilTwin, killers, this.win, null, this);

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
	 	evilTwin.x = -1000;
	 	var loadingLabel = game.add.text(player.x - 100, player.y - 150, 'YOU WIN', 
			{font: '40px Courier', fill: '#fff'});
	 	setTimeout(function(){
	 		game.state.start('menu');
		}, 2000);
	 	
	 },

};