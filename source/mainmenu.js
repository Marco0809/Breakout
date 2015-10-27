Break.MainMenu = function (game) {
    var button1, button2, button3, button4,supermario, boden, button1count, button2count, button3count,button4count;
    
};

Break.MainMenu.prototype = {
    create: function () {
        this.physics.startSystem(Phaser.Physics.ARCADE);
        //Activate Keyboard
        cursors = this.input.keyboard.createCursorKeys();

        background = this.add.tileSprite(0, 0, 1024, 768, 'mario0');

        //Mario
        supermario = this.add.sprite(190, 580, 'supermario');
        supermario.scale.set(0.5);
        supermario.anchor.set(0.5);
        this.physics.arcade.enable(supermario);
        supermario.body.velocity.setTo(0, 0);
        supermario.body.gravity.set(0, 6000);
        supermario.body.collideWorldBounds = true;
        supermario.checkWorldBounds = true;
        supermario.body.bounce.set(0.21);


        //Boden
        boden= this.add.sprite(0, 705, 'boden');
        this.physics.arcade.enable(boden);

        boden.body.immovable = true;
        boden.body.collideWorldBounds = true;
        boden.checkWorldBounds = true;
        boden.body.bounce.set(1);


        //Linker Knopf
        button1= this.add.sprite(180, 422, 'menuebutton');
        button1.anchor.setTo(0.5,0.5);
        button1.scale.set(0.13);
        this.physics.arcade.enable(button1);
        button1.body.immovable = true;
        button1.body.collideWorldBounds = true;
        button1.checkWorldBounds = true;
        button1.body.bounce.set(1);

        //Zweiter von Links
        button2= this.add.sprite(396, 422, 'menuebutton');
        button2.anchor.setTo(0.5,0.5);
        button2.scale.set(0.13);
        this.physics.arcade.enable(button2);
        button2.body.immovable = true;
        button2.body.collideWorldBounds = true;
        button2.checkWorldBounds = true;
        button2.body.bounce.set(1);

        //Zweiter von Rechts
        button3= this.add.sprite(612, 422, 'menuebutton');
        button3.anchor.setTo(0.5,0.5);
        button3.scale.set(0.13);
        this.physics.arcade.enable(button3);
        button3.body.immovable = true;
        button3.body.collideWorldBounds = true;
        button3.checkWorldBounds = true;
        button3.body.bounce.set(1);

        //Rechter Knopf

        button4= this.add.sprite(830, 422, 'menuebutton');
        button4.anchor.setTo(0.5,0.5);
        button4.scale.set(0.13);
        this.physics.arcade.enable(button4);
        button4.body.immovable = true;
        button4.body.collideWorldBounds = true;
        button4.checkWorldBounds = true;
        button4.body.bounce.set(1);
        
        //Startbeschriftung
        startfont= this.add.sprite(110, 395, 'startfont');
        soundfont= this.add.sprite(326, 395, 'soundfont');
        weicheifont= this.add.sprite(542, 397, 'weicheifont');
        editorfont= this.add.sprite(758, 395, 'editorfont');
        startfont.scale.set(0.13);
        soundfont.scale.set(0.13);
        weicheifont.scale.set(0.13);
        editorfont.scale.set(0.13);
        
        button1count = 0;
        button2count = 0;
        button3count = 0;
        button4count = 0;
        
        
        // Deklarieren der übrigen BEschriftungen
        heldfont= this.add.sprite(564, 398, 'heldfont');
        heldfont.scale.set(0.13);
        heldfont.visible=false;

        psychofont= this.add.sprite(543, 399, 'psychofont');
        psychofont.scale.set(0.13);
        psychofont.visible=false;
        

      
    },
    

       
    update: function() {
	
	    this.physics.arcade.collide(supermario, boden);
        this.physics.arcade.collide(supermario, button1, this.marioHitButton1, null, this);
        this.physics.arcade.collide(supermario, button2, this.marioHitButton2, null, this);
        this.physics.arcade.collide(supermario, button3, this.marioHitButton3, null, this);
        this.physics.arcade.collide(supermario, button4, this.marioHitButton4, null, this);
        
	

	
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
	

    
    marioHitButton1: function() {
       
        if(supermario.body.touching.up){
           
       
            
            
        }
    },
    
    marioHitButton2: function() {
        
        if(supermario.body.touching.up){
            
            
           
        }
    },
    
    marioHitButton3: function() {
        if(supermario.body.touching.up){
        switch(button3count) {
            case 0:
                weicheifont.visible=false;
                heldfont.visible=true;
                button3count+=1;
                break;
            case 1:
                heldfont.visible=false;
                psychofont.visible=true;
                button3count+=1;
                break;
            case 2:
                psychofont.visible=false;
                weicheifont.visible=true;
                button3count=0;
                break;

        }
                
                
        
            
            
        }
    },
    
    marioHitButton4: function() {
        if(supermario.body.touching.up){
           // this.game.state.start('Game');
            
        }
        
        
    }
    
   
    
};