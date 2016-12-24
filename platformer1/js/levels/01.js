var stateLevel01 = {

	 create: function() {	
	 	
	 	canBoostFlag = true;

	 	gameLogic.game.world.setBounds(0, 0, 1245, 376);

	 	gameLogic.game.add.sprite(0, 0, 'background2');
	 	gameLogic.game.add.sprite(640, 0, 'background2');

	 	arrow = gameLogic.game.add.sprite(10, 270, 'arrow');
   		gameLogic.game.physics.arcade.enable(arrow);
   		arrow.body.immovable = true;

	 	player = gameLogic.game.add.sprite(80, 10, 'monster1');
		player.animations.add('stand', [0, 1, 2], 5, true);
		gameLogic.game.physics.arcade.enable(player);
		player.body.bounce.y = 0.2;
   		player.body.gravity.y = 300;
        player.body.collideWorldBounds = true;

		evilTwin = gameLogic.game.add.sprite(560, 10, 'monster1');
		evilTwin.animations.add('stand', [0, 1, 2], 5, true);
		gameLogic.game.physics.arcade.enable(evilTwin);
		evilTwin.body.bounce.y = 0.2;
   		evilTwin.body.gravity.y = 300;
        evilTwin.body.collideWorldBounds = true;

        trampolines = gameLogic.game.add.group();
        trampolines.enableBody = true;
        gameLogic.game.physics.arcade.enable(trampolines);

        trampolines.create(240, 270, 'trampoline');
        trampolines.create(280, 270, 'trampoline');
   		trampolines.forEachAlive(function(item) {
   			item.body.bounce.y = 0.2;
   			item.body.gravity.y = 300;
   			item.body.collideWorldBounds = true;
		}, this);
		

        platforms = gameLogic.game.add.group();
        platforms.enableBody = true;
        platforms.create(0, 300, 'platform');
        platforms.create(197, 300, 'platform');
        platforms.create(506, 300, 'platform');
        platforms.create(646, 300, 'platform');
        platforms.create(787, 300, 'platform');
        platforms.create(928, 300, 'platform');
        platforms.create(1049, 300, 'platform');

        platforms.forEachAlive(function(item) {
        	item.body.immovable = true;
		}, this);

        faller = gameLogic.game.add.sprite(420, 282, 'faller');
        gameLogic.game.physics.arcade.enable(faller);

        slowFaller = gameLogic.game.add.sprite(120, 162, 'faller');
        gameLogic.game.physics.arcade.enable(slowFaller);

        rider = gameLogic.game.add.sprite(290, 50, 'faller');
        gameLogic.game.physics.arcade.enable(rider);
        rider.body.immovable = true;
        rider.body.bounce.setTo(1, 1);
        rider.body.collideWorldBounds = true;
        rider.body.velocity.setTo(-100, 0);


        killers = gameLogic.game.add.group();
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
       
        cursors = gameLogic.game.input.keyboard.createCursorKeys();
        gameLogic.game.camera.follow(player); 

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
	    	gameLogic.game.sound.play('jump');
	        player.body.velocity.y = -150;
	    }

	    gameLogic.game.physics.arcade.overlap(player, killers, this.die, null, this);
	    gameLogic.game.physics.arcade.overlap(evilTwin, killers, this.win, null, this);

	    gameLogic.game.physics.arcade.overlap(player, trampolines, this.trampolinePlayer, null, this);
	    trampolines.forEachAlive(function(item) {
	    	item.body.velocity.x = 0;
		}, this);

	    faller.body.velocity.x = 0;
	    gameLogic.game.physics.arcade.overlap(player, arrow, null, this.arrowBoost, this);
	 },

	 arrowBoost: function(){
	 	if(canBoostFlag){
	 		gameLogic.game.sound.play('ding')
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
	 	gameLogic.game.sound.play('trampoline_jump');
	 },

	 die: function(){
	 	gameLogic.game.sound.play('die');
	 	player.x = -1000;
	 	setTimeout(function(){
	 		gameLogic.game.state.start('level01');
		}, 600);
	 	
	 },

	 win: function(){
	 	gameLogic.game.sound.play('splash');
	 	evilTwin.x = -1000;
	 	var loadingLabel = gameLogic.game.add.text(player.x - 100, player.y - 150, 'YOU WIN', 
			{font: '40px Courier', fill: '#fff'});
	 	setTimeout(function(){
	 		gameLogic.game.state.start('menu');
		}, 2000);
	 	
	 },

};