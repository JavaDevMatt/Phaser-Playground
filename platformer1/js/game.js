var gameLogic = new GameLogic();
var music;

gameLogic.game.state.add('init', initState);
gameLogic.game.state.add('menu', menuState);
gameLogic.game.state.add('play', playState);

// levels
gameLogic.game.state.add('level01', stateLevel01);

gameLogic.game.state.start('init');
