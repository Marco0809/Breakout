Break.MainMenu = function (game) {
    var startbutton, soundbutton, hardbutton, level1button, level2button, level3button, Zurueckbutton, Soundreglerbutton, supermario, boden;
    //var key1;
    //var key2;
};

Break.MainMenu.prototype = {
    create: function () {
        this.physics.startSystem(Phaser.Physics.ARCADE);
        //Activate Keyboard
        cursors = this.input.keyboard.createCursorKeys();



        background = this.add.tileSprite(0, 0, 1024, 768, 'mario0');



        /* Bitte nicht löschen
        key1 = this.game.input.keyboard.addKey(Phaser.Keyboard.LEFT);
        key1.onDown.add(this.movemarioleft, this);
        key2 = this.game.input.keyboard.addKey(Phaser.Keyboard.RIGHT);
        key2.onDown.add(this.movemarioright, this);
        */

        //
        supermario = this.add.sprite(190, 580, 'supermario');
        supermario.scale.set(0.5);
        supermario.anchor.set(0.5);

        this.physics.arcade.enable(supermario);

        supermario.body.velocity.setTo(0, 0);
        supermario.body.gravity.set(0, 6000);
        supermario.body.collideWorldBounds = true;
        supermario.checkWorldBounds = true;
        supermario.body.bounce.set(0.21);


        //
        boden= this.add.sprite(0, 705, 'boden');
        this.physics.arcade.enable(boden);

        boden.body.immovable = true;
        boden.body.collideWorldBounds = true;
        boden.checkWorldBounds = true;
        boden.body.bounce.set(1);


        //Startknopf

        startbutton= this.add.sprite(200, 422, 'startbutton');
        startbutton.anchor.setTo(0.5,0.5);
        this.physics.arcade.enable(startbutton);
        startbutton.body.immovable = true;
        startbutton.body.collideWorldBounds = true;
        startbutton.checkWorldBounds = true;
        startbutton.body.bounce.set(1);

        //Soundknopf
        soundbutton= this.add.sprite(830, 422, 'soundbutton');
        soundbutton.anchor.setTo(0.5,0.5);
        this.physics.arcade.enable(soundbutton);
        soundbutton.body.immovable = true;
        soundbutton.body.collideWorldBounds = true;
        soundbutton.checkWorldBounds = true;
        soundbutton.body.bounce.set(1);

        //Schwierigkeitsknopf

         hardbutton= this.add.sprite(515, 422, 'hardbutton');
        hardbutton.anchor.setTo(0.5,0.5);
        hardbutton.scale.set(0.13);
        this.physics.arcade.enable(hardbutton);
        hardbutton.body.immovable = true;
        hardbutton.body.collideWorldBounds = true;
        hardbutton.checkWorldBounds = true;
        hardbutton.body.bounce.set(1);

        //Level1

        level1button= this.add.sprite(200, 300, 'test1');
        level1button.anchor.setTo(0.5,0.5);
        this.physics.arcade.enable(level1button);
        level1button.body.immovable = true;
        level1button.body.collideWorldBounds = true;
        level1button.checkWorldBounds = true;
        level1button.body.bounce.set(1);
        level1button.visible=false;
        level1button.body.enable=false;

        //Level2
        level2button= this.add.sprite(515, 421, 'test2');
        level2button.anchor.setTo(0.5,0.5);
        this.physics.arcade.enable(level2button);
        level2button.body.immovable = true;
        level2button.body.collideWorldBounds = true;
        level2button.checkWorldBounds = true;
        level2button.body.bounce.set(1);
        level2button.visible=false;
        level2button.body.enable=false;

        //Level3

        level3button = this.add.sprite(830, 421, 'test1');
        level3button.anchor.setTo(0.5,0.5);
        level3button.scale.set(0.13);
        this.physics.arcade.enable(level3button);
        level3button.body.immovable = true;
        level3button.body.collideWorldBounds = true;
        level3button.checkWorldBounds = true;
        level3button.body.bounce.set(1);
        level3button.visible=false;
        level3button.body.enable=false;

        //SoundAn/Aus

        Soundreglerbutton= this.add.sprite(200, 422, 'test1');
        Soundreglerbutton.anchor.setTo(0.5,0.5);
        this.physics.arcade.enable(Soundreglerbutton);
        Soundreglerbutton.body.immovable = true;
        Soundreglerbutton.body.collideWorldBounds = true;
        Soundreglerbutton.checkWorldBounds = true;
        Soundreglerbutton.body.bounce.set(1);
        Soundreglerbutton.visible=false;
        Soundreglerbutton.body.enable=false;
        
        //Zurück
        Zurueckbutton= this.add.sprite(830, 422, 'test2');
        Zurueckbutton.anchor.setTo(0.5,0.5);
        this.physics.arcade.enable(Zurueckbutton);
        Zurueckbutton.body.immovable = true;
        Zurueckbutton.body.collideWorldBounds = true;
        Zurueckbutton.checkWorldBounds = true;
        Zurueckbutton.body.bounce.set(1);
        Zurueckbutton.visible=false;
        Zurueckbutton.body.enable=false;
        
      
    },
    

       
    update: function() {
	
	    this.physics.arcade.collide(supermario, boden);
        this.physics.arcade.collide(supermario, startbutton, this.marioHitStart, null, this);
        this.physics.arcade.collide(supermario, hardbutton, this.marioHitDiff, null, this);
        this.physics.arcade.collide(supermario, soundbutton, this.marioHitSound, null, this);
        this.physics.arcade.collide(supermario, level1button, this.marioHitLevel1, null, this);
        this.physics.arcade.collide(supermario, level2button, this.marioHitLevel2, null, this);
        this.physics.arcade.collide(supermario, level3button, this.marioHitLevel3, null, this);
        this.physics.arcade.collide(supermario, Soundreglerbutton, this.marioHitSetSound, null, this);
        this.physics.arcade.collide(supermario, Zurueckbutton, this.marioHitBack, null, this);
	

	
         if (this.input.keyboard.isDown(Phaser.Keyboard.LEFT))
        {

            supermario.x -= 12;
            
        supermario.animations.play('left');

        }
        else if (this.input.keyboard.isDown(Phaser.Keyboard.RIGHT))
        {


            supermario.x += 12;
            
        supermario.animations.play('right');
        }
            
        
        else
        {
        //  Do nothing
        supermario.animations.stop();

        supermario.frame = 4;
        }

        //  Jump only if Mario is already touching the ground
        if (cursors.up.isDown && supermario.body.touching.down)
        {
            supermario.body.velocity.y = -2150;
        }
	
	},
	

    
    marioHitStart: function() {
       
        if(supermario.body.touching.up){
            startbutton.visible=false;
            startbutton.body.enable=false;
            soundbutton.visible=false;
            soundbutton.body.enable=false;
            hardbutton.visible=false;
            hardbutton.body.enable=false;
            
            level1button.visible=true;
            level1button.body.enable=true;
            
            level2button.visible=true;
            level2button.body.enable=true;
            
            level3button.visible=true;
            level3button.body.enable=true;
            
        }
    },
    
    marioHitSound: function() {
        
        if(supermario.body.touching.up){
            startbutton.visible=false;
            startbutton.body.enable=false;
            soundbutton.visible=false;
            soundbutton.body.enable=false;
            hardbutton.visible=false;
            hardbutton.body.enable=false;
            
            Soundreglerbutton.visible=true;
            Soundreglerbutton.body.enable=true;
            Zurueckbutton.visible=true;
            Zurueckbutton.body.enable=true;
            
        }
    },
    
    marioHitDiff: function() {
        
        if(supermario.body.touching.up){
            startbutton.visible=false;
            startbutton.body.enable=false;
            soundbutton.visible=false;
            soundbutton.body.enable=false;
            hardbutton.visible=false;
            hardbutton.body.enable=false;
            
        }
    },
    
    marioHitLevel1: function() {
        if(supermario.body.touching.up){
            this.game.state.start('Game');
            
        }
        
        
    },
    
    marioHitLevel2: function() {
    },

    marioHitLevel3: function() {
    },

    marioHitSetSound: function() {
    },

    marioHitBack: function() {

            if(supermario.body.touching.up){
                startbutton.visible=true;
                startbutton.body.enable=true;
                soundbutton.visible=true;
                soundbutton.body.enable=true;
                hardbutton.visible=true;
                hardbutton.body.enable=true;

            }
        }
    
};