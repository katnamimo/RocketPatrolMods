// Kat Pe Bentio
// Rocket Patrol: Reformed
// new timing/scoring that adds time to clock + 15  DONE
// randomized explosions + 10 DONE
// particle explosion + 15 DONE
// enemy spaceship + 15
// time remaining on screen + 10 DONE
// new title screen + 10 DONE
// parallax scrolling for background + 10 DONE
// high score + 5 DONE
// control after fired + 5 DONE

// 95 total
let config = {
  type: Phaser.CANVAS,
  width: 640,
  height: 480,
  scene: [Menu, Play]
}

let game = new Phaser.Game(config);

// reserve keyboard bars
let keyF, keyR, keyLEFT, keyRIGHT, keyUP, keyA, keyD, keyW;

// set UI sizes
let borderUISize = game.config.height / 15;
let borderPadding = borderUISize / 3;
let highscore = 0;