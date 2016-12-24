class Level2{



	 constructor() {
                this.rider1;

	 	this.playerStartingX = 10;
	 	this.playerStartingY = 10;


	 	this.evilTwinStartingX = 1070;
	 	this.evilTwinStartingY = 10;
 	 }

         addStartingText(game){
                // no text
         }

 	 createBackground(game){
 	 	game.world.setBounds(0, 0, 1205, 376);

 	 	game.add.sprite(0, 0, 'background2');
	 	game.add.sprite(640, 0, 'background2');
 	 }

 	 addTrampolines(trampolines){
 	 	trampolines.create(50, 270, 'trampoline');
 	 }

 	 addtPlatforms(platforms){
 	 }

 	 addKillers(killers){
                killers.create(0, 332, 'lava2');
                killers.create(252, 332, 'lava2');
                killers.create(502, 332, 'lava2');
 	 }

 	 addArrows(arrows){
 	 	// arrows.create(10, 270, 'arrow');
 	 } 

 	 addFallers(fallers){
 	 	// fallers.create(20 282, 'faller');
 	 }

         addSlowFallers(slowFallers){
                slowFallers.create(20, 282, 'faller');
         } 

         addRiders(riders){
                this.rider1 = riders.create(490, 200, 'faller');
         }

         handleRidersLogic(){
               if(this.rider1.x > 600){
                this.rider1.body.velocity.x = -100;
               } 
         }
}