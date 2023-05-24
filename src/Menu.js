class Menu extends Phaser.Scene {
   constructor() {
      super("menuScene");
   }

   preload() {
      // load audio
      this.load.audio("sfx_select", "./assets/blip_select12.wav");
      this.load.audio("backgroundmusic", "./assets/carnival.mp3");
      this.load.audio("sfx_rocket", "./assets/rocket_shot.wav");
      this.load.image('menuBackground', './assets/menuBackground.png');
      this.load.audio("sfx_explosion1", "./assets/explosion1.wav");
      this.load.audio("sfx_explosion2", "./assets/explosion2.wav");
      this.load.audio("sfx_explosion3", "./assets/explosion3.wav");
      this.load.audio("sfx_explosion4", "./assets/explosion4.wav");
   }
   create() {
      // Load and display the menu background image
      this.menuBackground = this.add.image(0, 0, 'menuBackground').setOrigin(0);
      this.backgroundMusic = this.sound.add('backgroundmusic');
      this.backgroundMusic.play();
      // menu text config
      let menuConfig = {
         fontFamily: 'Courier',
         fontSize: '28px',
         color: '#843605',
         align: 'center',
         padding: {
            top: 5,
            bottom: 5,
         },
         fixedWidth: 0
      }
   
      // show menu text
      this.add.text(game.config.width/2, game.config.height/2 - borderUISize * 2 - borderPadding * 2, 'ROCKET PATROL: Reformed', menuConfig).setOrigin(0.5);
      this.add.text(game.config.width/2, game.config.height/2 - borderUISize - borderPadding, 'Highscore: ' + highscore, menuConfig).setOrigin(0.5);
      this.add.text(game.config.width/2, game.config.height/2, '1: Use ←→ arrows to move & ↑ to fire', menuConfig).setOrigin(0.5);
      this.add.text(game.config.width/2, game.config.height/2 + borderUISize + borderPadding, 'You can move rocket after shot with arrows. ', menuConfig).setOrigin(0.5);
      
      this.add.text(game.config.width/2, game.config.height/2 + borderUISize * 2 + borderPadding * 2, 'Press ← for Easy or → for Hard', menuConfig).setOrigin(0.5);
   
      // define keys
      keyLEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
      keyRIGHT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
   }
   
   update() {
      if (Phaser.Input.Keyboard.JustDown(keyLEFT)) {
         // easy mode
         game.settings = {
            spaceshipSpeed: 3,
            gameTimer: 30000
         }
         this.sound.play("sfx_select", {volume: 0.5});
         this.scene.start("playScene");
      }
      if (Phaser.Input.Keyboard.JustDown(keyRIGHT)) {
         // hard mode
         game.settings = {
            spaceshipSpeed: 4,
            gameTimer: 10000
         }
         this.sound.play("sfx_select", {volume: 0.5});
         this.scene.start("playScene");
      }
   }
      
}