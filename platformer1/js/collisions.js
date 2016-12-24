class CollisionsHandler{
 
	update(){
		gameLogic.game.physics.arcade.collide(player, platforms);
	 	gameLogic.game.physics.arcade.collide(player, rider);
	 	gameLogic.game.physics.arcade.collide(player, faller);
	 	gameLogic.game.physics.arcade.collide(player, slowFaller);
	 	gameLogic.game.physics.arcade.collide(slowFaller, platforms);
	 	gameLogic.game.physics.arcade.collide(evilTwin, faller);
	 	gameLogic.game.physics.arcade.collide(player, evilTwin);
	 	gameLogic.game.physics.arcade.collide(platforms, evilTwin);
	 	gameLogic.game.physics.arcade.collide(player, trampolines);
	 	gameLogic.game.physics.arcade.collide(trampolines, platforms);
	 	gameLogic.game.physics.arcade.collide(slowFaller, trampolines);
	 	gameLogic.game.physics.arcade.collide(trampolines, trampolines);
	}

}