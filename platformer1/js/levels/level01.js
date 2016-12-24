class Level1{

	 constructor() {
	 	this.playerStartingX = 80;
	 	this.playerStartingY = 10;

	 	this.evilTwinStartingX = 560;
	 	this.evilTwinStartingY = 10;
 	 }

 	 createBackground(game){
 	 	game.world.setBounds(0, 0, 1245, 376);

 	 	game.add.sprite(0, 0, 'background2');
	 	game.add.sprite(640, 0, 'background2');
 	 }

 	 addTrampolines(trampolines){
 	 	trampolines.create(240, 270, 'trampoline');
        trampolines.create(150, 50, 'trampoline');
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

 	 addKillers(killers){
 	 	killers.create(141, 332, 'lava');
        killers.create(338, 332, 'lava');
        killers.create(394, 332, 'lava');
        killers.create(450, 332, 'lava');
        killers.create(1190, 332, 'lava');
 	 }

 	 addArrows(arrows){
 	 	arrows.create(10, 270, 'arrow');
	 	arrows.create(300, 270, 'arrow');
 	 }
}