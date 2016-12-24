class Level1{

	 constructor() {
    	
 	 }



 	 createBackground(game){
 	 	game.world.setBounds(0, 0, 1245, 376);
 	 	
 	 	game.add.sprite(0, 0, 'background2');
	 	game.add.sprite(640, 0, 'background2');
 	 }
}