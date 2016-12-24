class Level2{



	constructor() {
        this.rider1;

	 	this.playerStartingX = 1200;
	 	this.playerStartingY = 10;


	 	this.evilTwinStartingX = 1470;
	 	this.evilTwinStartingY = 10;
 	 }

    addStartingText(game){
                // no text
    }

 	 createBackground(game){
 	 	game.world.setBounds(0, 0, 1805, 376);

 	 	game.add.sprite(0, 0, 'background2');
	 	game.add.sprite(640, 0, 'background2');
        game.add.sprite(1280, 0, 'background2');
 	 }

 	 addTrampolines(trampolines){
 	 	trampolines.create(50, 270, 'trampoline');
        trampolines.create(900, 270, 'trampoline');
 	 }

 	 addtPlatforms(platforms){
        platforms.create(754, 172, 'tower1');
        platforms.create(887, 300, 'platform');
        platforms.create(1028, 300, 'platform');
        platforms.create(1169, 300, 'platform');
        platforms.create(1169, 272, 'tower1');
        platforms.create(1310, 300, 'platform');
        platforms.create(1451, 300, 'platform');
        platforms.create(1410, 112, 'tower1');

        // platforms.create(754, 112, 'tower1');
 	 }

 	 addKillers(killers){
                killers.create(0, 332, 'lava2');
                killers.create(252, 332, 'lava2');
                killers.create(502, 332, 'lava2');
                killers.create(754, 332, 'lava2');
 	 }

 	 addArrows(arrows){
 	 	arrows.create(1230, 240, 'arrow');
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
               if(this.rider1.x > 650){
                this.rider1.body.velocity.x = -100;
               } 
         }
}