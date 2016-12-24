class LevelPrototype{

	 constructor() {
	 	this.playerStartingX = 10;
	 	this.playerStartingY = 10;

	 	this.evilTwinStartingX = 670;
	 	this.evilTwinStartingY = 10;
 	 }

         addStartingText(game){
                var loadingLabel = game.add.text(100, 200, 'Kill the evil slime!', 
                        {font: '30px Courier', fill: '#fff'});
                setTimeout(function(){
                        loadingLabel.kill();
                }, 4000);
         }

 	 createBackground(game){
 	 	game.world.setBounds(0, 0, 745, 376);

 	 	game.add.sprite(0, 0, 'background2');
	 	game.add.sprite(640, 0, 'background2');
 	 }

 	 addTrampolines(trampolines){
 	 	trampolines.create(600, 270, 'trampoline');
 	 }

 	 addtPlatforms(platforms){
 	 	platforms.create(0, 300, 'platform');
                platforms.create(197, 300, 'platform2');
                platforms.create(506, 300, 'platform');
                platforms.create(646, 300, 'platform');
                platforms.create(646, 112, 'tower1');
 	 }

 	 addKillers(killers){
 	 	killers.create(141, 332, 'lava');
                killers.create(254, 332, 'lava2');
 	 }

 	 addArrows(arrows){
 	 	// arrows.create(10, 270, 'arrow');
 	 } 

 	 addFallers(fallers){
 	 	fallers.create(340, 282, 'faller');
 	 }
}