var game = new Phaser.Game(640, 376, Phaser.AUTO, 'gameDiv');
var music;

game.state.add('init', initState);
game.state.add('menu', menuState);
game.state.add('play', playState);

// levels
game.state.add('level01', stateLevel01);

game.state.start('init');
