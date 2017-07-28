var game = new Phaser.Game(640, 480, Phaser.AUTO, '');

game.state.add('play', playState);

game.state.start('play'); 

