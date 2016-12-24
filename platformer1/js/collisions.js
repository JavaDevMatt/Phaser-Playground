class CollisionsHandler{
 
	update(){
		game.physics.arcade.collide(player, platforms);
	 	game.physics.arcade.collide(player, riders); 
	 	game.physics.arcade.collide(player, fallers); 
	 	game.physics.arcade.collide(player, slowFallers);
	 	game.physics.arcade.collide(slowFallers, platforms);
	 	game.physics.arcade.collide(evilTwin, fallers);
	 	game.physics.arcade.collide(evilTwin, trampolines);
	 	game.physics.arcade.collide(player, evilTwin);
	 	game.physics.arcade.collide(platforms, evilTwin);
	 	game.physics.arcade.collide(player, trampolines);
	 	game.physics.arcade.collide(trampolines, platforms);
	 	game.physics.arcade.collide(slowFallers, trampolines);
	 	game.physics.arcade.collide(trampolines, trampolines);
	}

}