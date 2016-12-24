var playState = {

	 resetState: function(){
	 	canBoostFlag = true;
	 },

	 create: function() {	 
	 	if(gameLevel == 1){
			level = new LevelPrototype();
	 	} else {
	 		level = new Level1();
	 	}
	 	
	 	collisionsHandler = new CollisionsHandler();

	 	this.resetState();
	 	level.createBackground(game);
	 	level.addStartingText(game);

   		this.initPlayer();
		this.initEvilTwin();
		this.initTrampolines();
		this.initPlatforms();
		this.initKillers();
		this.initArrows();
		this.initFallers();

        // TODO add slowFaller to slowFallers group
        slowFaller = game.add.sprite(120, 162, 'faller');
        game.physics.arcade.enable(slowFaller);

        // TODO add rider to riders group
        rider = game.add.sprite(290, 50, 'faller');
        game.physics.arcade.enable(rider);
        rider.body.immovable = true;
        rider.body.bounce.setTo(1, 1);
        rider.body.collideWorldBounds = true;
        rider.body.velocity.setTo(-100, 0);

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
	    slowFaller.body.velocity.x = 0;
	 	slowFaller.body.velocity.y = 0;

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
	    }

	     // overlaps
	    game.physics.arcade.overlap(player, killers, this.die, null, this);
	    game.physics.arcade.overlap(evilTwin, killers, this.win, null, this);
	    game.physics.arcade.overlap(player, trampolines, this.trampolinePlayer, null, this);
	    game.physics.arcade.overlap(player, arrows, this.arrowBoost, null, this);

	 },

	 arrowBoost: function(player, arrow){
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
	 	gameLevel++;
	 	evilTwin.x = -1000;
	 	var loadingLabel = game.add.text(player.x - 200, 100, 'YOU WIN', 
			{font: '40px Courier', fill: '#fff'});
	 	setTimeout(function(){
	 		if(gameLevel >= 3){
	 			game.state.start('menu');
	 		} else {
	 			game.state.start('play');
	 		}
	 		
		}, 2000);
	 	
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

};