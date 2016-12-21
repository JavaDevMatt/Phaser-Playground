var game = new Phaser.Game(640, 480, Phaser.AUTO, 'gameDiv');

game.state.add('init', initState);


game.state.start('init');
