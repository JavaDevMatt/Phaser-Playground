class Level2{

	constructor() {
        this.rider1;

	 	this.playerStartingX = 10;
	 	this.playerStartingY = 10; 
 	 }


    addStartingText(game){
                var levelLabel = game.add.text(110, 278, 'Kill 2 red evil slimes!', 
                        {font: '20px Courier', fill: '#fff'});
                setTimeout(function(){
                        levelLabel.kill();
                }, 3000);
    }

    addEndingText(game, player){
        game.add.text(player.x - 200, 100, 'Nice!', 
                {font: '40px Courier', fill: '#fff'});
                game.add.text(player.x - 200, 136, 'Get ready for more...', 
                {font: '20px Courier', fill: '#fff'});
    }

 	 createBackground(game){
 	 	game.world.setBounds(0, 0, 1705, 376);

 	 	game.add.sprite(0, 0, 'background2');
	 	game.add.sprite(640, 0, 'background2');
        game.add.sprite(1280, 0, 'background2');
 	 }

     addRedSlimes(redSlimes){
        redSlimes.create(1470, 10, 'monster2');
        redSlimes.create(390, 70, 'monster2');
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
                killers.create(1510, 352, 'lava2');

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