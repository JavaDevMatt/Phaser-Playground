class Level1{

	 constructor() {
 	 }

 	 createBackground(game){
 	 	game.world.setBounds(0, 0, 1245, 376);

 	 	game.add.sprite(0, 0, 'background2');
	 	game.add.sprite(640, 0, 'background2');
 	 }

 	 addTrampolines(trampolines){
 	 	trampolines.create(240, 270, 'trampoline');
        trampolines.create(280, 270, 'trampoline');
 	 }

 	 addtPlatforms(platforms){
 	 	platforms.create(0, 300, 'platform');
        platforms.create(197, 300, 'platform');
        platforms.create(506, 300, 'platform');
        platforms.create(646, 300, 'platform');
        platforms.create(787, 300, 'platform');
        platforms.create(928, 300, 'platform');
        platforms.create(1049, 300, 'platform');
 	 }
}