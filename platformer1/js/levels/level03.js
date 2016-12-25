class Level3{

     constructor() {
        this.playerStartingX = 10;
        this.playerStartingY = 10; 
     }

    addStartingText(game){
        var levelLabel = game.add.text(0, 0, 'Time to blow some shit up!', 
                        {font: '20px Courier', fill: '#fff'});
                setTimeout(function(){
                        levelLabel.kill();
                }, 3000);
    }

    addEndingText(game, player){
    }
 
     createBackground(game){
        game.world.setBounds(0, 0, 885, 376);

        game.add.sprite(0, 0, 'background2');
        game.add.sprite(640, 0, 'background2');
     }

     addRedSlimes(redSlimes){
        redSlimes.create(630, 10, 'monster2');
     }

     addTrampolines(trampolines){
        trampolines.create(600, 270, 'trampoline');
     }

     addtPlatforms(platforms){
                platforms.create(0, 112, 'tower1'); 
                platforms.create(1, 300, 'platform');
                platforms.create(506, 300, 'platform');
                platforms.create(646, 300, 'platform');
                platforms.create(646, 112, 'tower1');
     }

     addKillers(killers){
        killers.create(142, 332, 'lava');
        killers.create(198, 332, 'lava');

        killers.create(254, 332, 'lava2');
        killers.create(700, 332, 'lava2');

     }

     addArrows(arrows){
        // arrows.create(10, 270, 'arrow');
     } 

     addFallers(fallers){
        // fallers.create(340, 282, 'faller');
     }

         addSlowFallers(slowFallers){
                // slowFallers.create(120, 162, 'faller');
         } 

         addRiders(riders){
                // riders.create(290, 50, 'faller');
         }

    handleRidersLogic(){
         
         }
}