class CollisionsHandler{
 
	update(){
		game.physics.arcade.collide(player, platforms);
	 	game.physics.arcade.collide(player, rider);
	 	game.physics.arcade.collide(player, faller);
	 	game.physics.arcade.collide(player, slowFaller);
	 	game.physics.arcade.collide(slowFaller, platforms);
	 	game.physics.arcade.collide(goal, faller);
	 	game.physics.arcade.collide(player, goal);
	 	game.physics.arcade.collide(platforms, goal);
	 	game.physics.arcade.collide(player, trampolines);
	 	game.physics.arcade.collide(trampolines, platforms);
	 	game.physics.arcade.collide(slowFaller, trampolines);
	}

}