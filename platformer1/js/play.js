var playState = {

	 resetState: function(){
	 	canBoostFlag = true;
	 	isDead = false;
	 	hasWon = false;
	 },

	 chooseLevel: function(){
	 	// return level = new Level2();

	 	if(gameLevel == 1){
	 		return level = new Level1();
	 	} else {
	 		// music.stop();
	 		// music = game.sound.play('music2');
	 		return level = new Level2();
	 	}
	 },

	 create: function() {	 
	 	level = this.chooseLevel();
	 	
	 	collisionsHandler = new CollisionsHandler();

	 	this.resetState();
	 	level.createBackground(game);
	 	level.addStartingText(game);

   		this.initPlayer();
		this.initEvilTwin();
		this.initTrampolines();
		this.initKillers();
		this.initPlatforms();
		this.initArrows();
		this.initFallers();
		this.initSlowFallers();
		this.initRiders();

		emitter = game.add.emitter(0, 0, 100);
   		emitter.makeParticles('particle');
		emitter.gravity = 200;

		emitter2 = game.add.emitter(0, 0, 100);
   		emitter2.makeParticles('particle2');
		emitter2.gravity = 50;

		emitterRed = game.add.emitter(0, 0, 100);
   		emitterRed.makeParticles('red-particle');
		emitterRed.gravity = 50;


        cursors = game.input.keyboard.createCursorKeys();

        game.camera.follow(player); 
	 },

	 update: function() {   
	 	// collisios
	 	collisionsHandler.update()

	 	// animations
	 	player.animations.play('stand');
	 	evilTwin.animations.play('stand');
	 	killers.forEachAlive(function(item) {
       	 	item.animations.play('stand');
		}, this);

	    // preventing "free move"
	    player.body.velocity.x = 0;
	    trampolines.forEachAlive(function(item) {
	    	item.body.velocity.x = 0;
		}, this);
		fallers.forEachAlive(function(item) {
	    	item.body.velocity.x = 0;
		}, this);
		slowFallers.forEachAlive(function(item) {
	    	item.body.velocity.x = 0;
	 		item.body.velocity.y = 0;
		}, this);
	    
	    // controls
	    if (cursors.left.isDown){
	        player.body.velocity.x = -150;
	    }
	    else if (cursors.right.isDown){
	        player.body.velocity.x = 150;
	    }
	    if (cursors.up.isDown && player.body.touching.down){
	    	game.sound.play('jump');
	        player.body.velocity.y = -150;

	        emitter.x = player.x + 15;
    		emitter.y = player.y + 25;
			emitter.start(true, 2000, null, 20);
	    }

	    if(player.body.touching.down && player.body.velocity.x != 0){
	    	emitter.x = player.x + 15;
    		emitter.y = player.y + 25;

			emitter.start(true, 100, null, 1);
	    }
	     // overlaps
	    game.physics.arcade.overlap(player, killers, this.die, null, this);
	    game.physics.arcade.overlap(evilTwin, killers, this.win, null, this);
	    game.physics.arcade.overlap(player, trampolines, this.trampolinePlayer, null, this);
	    game.physics.arcade.overlap(evilTwin, trampolines, this.trampolineTwin, null, this);
	    game.physics.arcade.overlap(player, arrows, this.arrowBoost, null, this);

	    level.handleRidersLogic();

	    if(!canBoostFlag){
	    	emitter2.x = player.x + 15;
    		emitter2.y = player.y + 24;

			emitter2.start(true, 70, null, 10);
	    }
	 },

	 arrowBoost: function(player, arrow){
	 	if(canBoostFlag){
	 		game.sound.play('ding')
	 		canBoostFlag = false;
	 		arrow.kill();
		 	setTimeout(function(){
		 		emitter2.x = player.x + 15;
    			emitter2.y = player.y + 25;

				emitter2.start(true, 5000, null, 500);

		 		canBoostFlag = true;
		 		player.body.velocity.y = -500;
			}, 3000);
	 	}
	 	 
	 },

	 trampolineTwin: function(){
	 	evilTwin.body.velocity.y -= 200;
	 	game.sound.play('trampoline_jump');
	 },

	 trampolinePlayer: function(){
	 	player.body.velocity.y -= 200;
	 	game.sound.play('trampoline_jump');
	 },

	 die: function(){
	 	if(!hasWon){
	 		emitter2.x = player.x + 15;
    		emitter2.y = player.y + 25;
			emitter2.start(true, 600, null, 600);


	 		isDead = true;
		 	game.sound.play('splash-death');
		 	player.kill();
		 	setTimeout(function(){
		 		game.state.start('play');
			}, 600);
	 	}
	 },

	 win: function(){
	 	if(!isDead){
	 		emitterRed.x = evilTwin.x + 15;
    		emitterRed.y = evilTwin.y + 25;
			emitterRed.start(true, 3000, null, 600);

	 		hasWon = true;
	 		game.add.text(player.x - 200, 100, 'Great!', 
			{font: '40px Courier', fill: '#fff'});
	 		game.add.text(player.x - 200, 136, 'Time for the next one....', 
			{font: '20px Courier', fill: '#fff'});
	 	// }
	 	
		 	game.sound.play('splash-death');
		 	gameLevel++;
		 	evilTwin.kill();
		 	setTimeout(function(){
		 		if(gameLevel >= 3){
		 			gameLevel = 1;
		 			game.state.start('menu');
		 		} else {
		 			game.state.start('play');
		 		}
		 		
			}, 3000);
	 	}
	 	
	 },

	 initPlayer: function(){
		player = game.add.sprite(level.playerStartingX, level.playerStartingY, 'monster1');
		player.animations.add('stand', [0, 1, 2], 5, true);
		game.physics.arcade.enable(player);
		player.body.bounce.y = 0.2;
   		player.body.gravity.y = 300;
        player.body.collideWorldBounds = true;
	 },

	 initEvilTwin: function(){
		evilTwin = game.add.sprite(level.evilTwinStartingX, level.evilTwinStartingY, 'monster2');
		evilTwin.animations.add('stand', [0, 1, 2], 5, true);
		game.physics.arcade.enable(evilTwin);
		evilTwin.body.bounce.y = 0.2;
		evilTwin.body.bounce.x = 1.0;
   		evilTwin.body.gravity.y = 300;
        evilTwin.body.collideWorldBounds = true;
	 },

	 initTrampolines: function(){
		trampolines = game.add.group();
        trampolines.enableBody = true;
        game.physics.arcade.enable(trampolines);
        level.addTrampolines(trampolines);
   		trampolines.forEachAlive(function(item) {
   			item.body.bounce.y = 0.2;
   			item.body.gravity.y = 300;
   			item.body.collideWorldBounds = true;
		}, this);
	 },

	 initPlatforms: function(){
		platforms = game.add.group();
        platforms.enableBody = true;
        level.addtPlatforms(platforms);
        platforms.forEachAlive(function(item) {
        	item.body.immovable = true;
		}, this);
	 },

	 initKillers: function(){
	 	killers = game.add.group();
        killers.enableBody = true;
        level.addKillers(killers);
        killers.forEachAlive(function(item) {
       	 	item.body.immovable = true;
       	 	item.animations.add('stand', [0, 1], 2, true);
		}, this);
	 },

	 initArrows: function(){
	 	arrows = game.add.group();
	 	arrows.enableBody = true;
	 	level.addArrows(arrows);
   		arrows.forEachAlive(function(item) {
       	 	item.body.immovable = true;
		}, this);
	 },

	 initFallers: function(){
	 	fallers = game.add.group();
		fallers.enableBody = true;
        level.addFallers(fallers);
	 },

	 initSlowFallers: function(){
	 	slowFallers = game.add.group();
		slowFallers.enableBody = true;
        level.addSlowFallers(slowFallers);
	 },

	 initRiders: function(){
		riders = game.add.group();
        riders.enableBody = true;
        game.physics.arcade.enable(riders);
        level.addRiders(riders);
        riders.forEachAlive(function(item) {
        	item.body.immovable = true;
        	item.body.bounce.setTo(1, 1);
       		item.body.collideWorldBounds = true;
        	item.body.velocity.setTo(-100, 0);
		}, this);
	 },


};