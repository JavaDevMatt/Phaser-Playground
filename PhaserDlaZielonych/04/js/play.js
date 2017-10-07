var playState = {

	create: function() {
		this.player = game.add.sprite(100, 100, 'asset2');
		game.physics.enable(this.player, Phaser.Physics.ARCADE);
		this.player.body.bounce.setTo(1, 1);
		this.player.body.collideWorldBounds = true;

		this.targets = game.add.group();
		this.targets.enableBody = true;
		
        game.physics.arcade.enable(this.targets);
		this.targets.create(100, 200, 'asset');
		this.targets.create(100, 300, 'asset');
		this.targets.create(100, 400, 'asset');
		this.targets.create(500, 200, 'asset');
		this.targets.create(500, 300, 'asset');
		this.targets.create(500, 400, 'asset');
		this.targets.forEachAlive(function(item) {
   			item.body.bounce.y = 1.0;
			item.body.bounce.x = 1.0;
			item.body.collideWorldBounds = true;
		}, this);

		this.enemy = game.add.sprite(300, 200, 'asset2');
		game.physics.enable(this.enemy, Phaser.Physics.ARCADE);
		this.enemy.body.bounce.setTo(1, 1);
		this.enemy.body.collideWorldBounds = true;

		this.cursors = game.input.keyboard.createCursorKeys();

		this.emitter = game.add.emitter(0, 0, 100);
		this.emitter.makeParticles('asset');
		this.emitter.gravity = 200;
	},

	playerCollideCallback: function(object1, object2) {
		game.sound.play('collision');
	},

	targetCollideCallback: function(enemy, target) {
		game.sound.play('collision');

		this.emitter.x = target.x;
    	this.emitter.y = target.y;
		this.emitter.start(true, 500, null, 20);

		target.kill();
	},

	update: function() {
		game.physics.arcade.collide(this.player, this.enemy, this.playerCollideCallback, null, this);
		game.physics.arcade.collide(this.enemy, this.targets, this.targetCollideCallback, null, this);
		game.physics.arcade.collide(this.player, this.targets, this.playerCollideCallback, null, this);
		game.physics.arcade.collide(this.targets, this.targets, null, null, this);


		if (this.cursors.left.isDown){
	        this.player.body.velocity.x -= 10;
	    } 

	    if (this.cursors.right.isDown){
	        this.player.body.velocity.x += 10;
	    } 

	    if (this.cursors.down.isDown){
	        this.player.body.velocity.y += 10;
	    }  

	    if (this.cursors.up.isDown){
	        this.player.body.velocity.y -= 10;
	    }

	    if(this.targets.countLiving() <= 0){
	    	game.state.start('win'); 
	    }
	    
	}

};