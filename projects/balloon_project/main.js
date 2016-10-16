// Create "main" state that holds game

var mainState = {
  preload: function() {
    // This is executed at beginning
    // Images and sounds are loaded here

    // load the balloon
    game.load.image('balloon', 'images/balloon.png');
    game.load.image('pipe', 'images/cloud.png');
    game.load.image('background', 'images/background.png');

  },

  create: function() {
    // This is after the preload. This sets up the environment, images.

    // display background
    this.background = game.add.sprite(0, 0, 'background');

//+++++++++++++++++++++++++ RESPONSIVE AND MOBILE +++++++++++++++++++++++++

    // if this is not a desktop (so it's a mobile)
    if (game.device.desktop == false) {

      game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
      // set a minimum and maximum size -- the minimum is half the size
      // the maximum is the original size
      game.scale.setMinMax(game.width/2, game.height/2, game.width, game.height);
    }
    // calls jump function when screen is tapped
    game.input.onDown.add(this.jump, this);

//++++++END RESPONSIVE++++++

    // change the canvas background color

    game.stage.backgroundColor = '#f2d6b1';

    game.scale.pageAlignHorizontally = true;
    game.scale.pageAlignVertically = true;

    game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL; //scales to show all while keeping aspect ratio

    // enables the physics system --this is for my gravity
    game.physics.startSystem(Phaser.Physics.ARCADE);

    // displays my balloon at x=100 and y=245
    this.balloon = game.add.sprite(100, 245, 'balloon');

    // add physics to balloon -- movements,gravity
    game.physics.arcade.enable(this.balloon)

    // make my balloon fall
    this.balloon.body.gravity.y = 1000;

    // use phaser's "jump" function when spacebar is pressed
    var spaceKey = game.input.keyboard.addKey(
                    Phaser.Keyboard.SPACEBAR);
    spaceKey.onDown.add(this.jump, this);

    // makes a group for many different elements
    this.pipes = game.add.group();

    this.timer = game.time.events.loop(1500, this.addRowOfPipes, this);

  }, //for create function

  addOnePipe: function(x, y) {
    // create pipe at position x and y
    var pipe = game.add.sprite(x, y, 'pipe');

    // put this into group that was made earlier
    this.pipes.add(pipe);

    // turn on physics
    game.physics.arcade.enable(pipe);

    // add velocity to pipes so they actually move left
    pipe.body.velocity.x = -200;

    // get rid of it when it's no longer visible so it doesn't eat resources
    pipe.checkWorldBounds = true;
    pipe.outOfBoundsKill = true;
  },

  addRowOfPipes: function() {
    // randomly pick a number between 1 and 5
    // this will be the hole position
    var hole = Math.floor(Math.random() * 8) + 1;
    // creates 6 pipes with one hole at position 'hole' and 'hole+1' --the+1 is to make the hole wider



    for (var i = 0; i < 10; i++)
      if (i != hole && i != hole + 1)
        this.addOnePipe(400, i * 60 + 10);
    },

  update: function() {
    // Called 60 times every second -- has environment logic


      // if my balloon is out of the screen -- restart the game
      if (this.balloon.y < 0 || this.balloon.y > 600) //adjusted based on pixel height
          this.restartGame();

          game.physics.arcade.overlap(
            this.balloon, this.pipes, this.restartGame, null, this);
    },

    // make my balloon float or 'jump' using phaser's terminology
  jump:function() {
    // uses vertical velocity
    this.balloon.body.velocity.y = -350;
  },

  // the restartgame function
  restartGame: function() {
    //just start the main state again, restarting the code
    game.state.start('main');
  },

};

// Starts the phaser.js, and creates a 400px by 490px environment

var game = new Phaser.Game(//400, 490
);


// Both adds and starts the "main" state (the one that holds the game)
game.state.add('main', mainState, true);
