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
	 	game.physics.arcade.collide(player, trampoline);
	 	game.physics.arcade.collide(trampoline, platforms);
	 	game.physics.arcade.collide(slowFaller, trampoline);
	}

}