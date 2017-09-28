
var playState = {

	create: function() {
		this.colideCounter = 0;

		this.player = game.add.sprite(100, 100, 'asset');
		game.physics.enable(this.player, Phaser.Physics.ARCADE);
		this.player.body.bounce.setTo(1, 1);
		this.player.body.collideWorldBounds = true;

		this.enemy = game.add.sprite(300, 200, 'asset');
		game.physics.enable(this.enemy, Phaser.Physics.ARCADE);
		this.enemy.body.bounce.setTo(1, 1);
		this.enemy.body.collideWorldBounds = true;

		this.cursors = game.input.keyboard.createCursorKeys();
	},

	shouldCollide: function(){
		return this.player.body.velocity.x > 150 || this.player.body.velocity.y > 150;
	},

	collideCallback: function(object1, object2) {
		game.sound.play('collision');
	    this.colideCounter++;
	},

	update: function() {
		game.physics.arcade.collide(this.player, this.enemy, this.collideCallback, this.shouldCollide, this);

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

	    if(this.colideCounter >= 5){
	    	game.state.start('win'); 
	    }
	    
	}

};