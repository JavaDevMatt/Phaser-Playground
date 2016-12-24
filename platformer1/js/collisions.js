class CollisionsHandler{
 
	update(){
		game.physics.arcade.collide(player, platforms);
	 	game.physics.arcade.collide(player, rider);
	 	game.physics.arcade.collide(player, faller);
	 	game.physics.arcade.collide(player, slowFaller);
	 	game.physics.arcade.collide(slowFaller, platforms);
	 	game.physics.arcade.collide(evilTwin, faller);
	 	game.physics.arcade.collide(player, evilTwin);
	 	game.physics.arcade.collide(platforms, evilTwin);
	 	game.physics.arcade.collide(player, trampolines);
	 	game.physics.arcade.collide(trampolines, platforms);
	 	game.physics.arcade.collide(slowFaller, trampolines);
	 	game.physics.arcade.collide(trampolines, trampolines);
	}

}