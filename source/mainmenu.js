Break.MainMenu = function (game) {
    var button1, button2, button3, button4, button5, supermario, boden;
   
};
    var button1count=0;
    var button2count=0; 
    var button3count=0;
    var button4count=0; 
    var button5count=0;
    var startstate = 0;
    var soundstate = 0;
    var editorstate=0;
    var soundon = true;
    var musicon = true;
    var difficulty = 1;
    var playercount;
    
Break.MainMenu.prototype = {
    create: function () {
        this.physics.startSystem(Phaser.Physics.ARCADE);
        //Activate Keyboard
        cursors = this.input.keyboard.createCursorKeys();

        background = this.add.tileSprite(0, 0, 1024, 768, 'mario0');

        //Mario
        //supermario = this.add.sprite(190, 635, 'supermario');
        supermario=this.add.sprite(190,635, 'supermario');
        supermario.frame=0;
        supermario.scale.set(0.5);
        supermario.anchor.set(0.5);
        this.physics.arcade.enable(supermario);
        supermario.body.velocity.setTo(0, 0);
        supermario.body.gravity.set(0, 6000);
        supermario.body.collideWorldBounds = true;
        supermario.checkWorldBounds = true;
        supermario.body.bounce.set(0.21);
         
        this.buildAnimations();

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
        
        
        //Ganz Rechter Knopf für Levelmenü

        button5= this.add.sprite(860, 422, 'menuebutton');
        button5.anchor.setTo(0.5,0.5);
        button5.scale.set(0.13);
        this.physics.arcade.enable(button5);
        button5.body.immovable = true;
        button5.body.collideWorldBounds = true;
        button5.checkWorldBounds = true;
        button5.body.bounce.set(1);
        button5.body.enable=false;
        button5.visible=false;
        
        this.buildLabels();
        
    },
    

       
    update: function() {

	    this.physics.arcade.collide(supermario, boden);
        this.physics.arcade.collide(supermario, button1, this.marioHitButton1, null, this);
        this.physics.arcade.collide(supermario, button2, this.marioHitButton2, null, this);
        this.physics.arcade.collide(supermario, button3, this.marioHitButton3, null, this);
        this.physics.arcade.collide(supermario, button4, this.marioHitButton4, null, this);
        this.physics.arcade.collide(supermario, button5, this.marioHitButton5, null, this);
         
            
         if (this.input.keyboard.isDown(Phaser.Keyboard.LEFT))
        {
                
            supermario.x -= 12;
            if (this.input.keyboard.isDown(Phaser.Keyboard.UP))
            {supermario.animations.play('jumpleft');
            }
            else{
            
        supermario.animations.play('left');}

        }
        else if (this.input.keyboard.isDown(Phaser.Keyboard.RIGHT))
        {


            supermario.x += 12;
            
            if (this.input.keyboard.isDown(Phaser.Keyboard.UP))
            {supermario.animations.play('jumpright');
            }
            else{
            
        supermario.animations.play('right');}

        }
       
         else if (this.input.keyboard.isDown(Phaser.Keyboard.UP))
        {

            if (    (!(this.input.keyboard.isDown(Phaser.Keyboard.LEFT)))&& (!(this.input.keyboard.isDown(Phaser.Keyboard.LEFT)))            )
            {supermario.animations.play('jump');
            }
       

        }   
        
        else
        {
        //  Do nothing
        supermario.animations.stop();

        supermario.frame = 0;
        }

        //  Jump only if Mario is already touching the ground
        if (cursors.up.isDown && supermario.body.touching.down)
        {
            supermario.body.velocity.y = -2150;
        }
	
	},
	
    buildLabels: function() {            
         //Startbeschriftung
        label1= this.add.sprite(110, 395, 'startlabel');
        label2= this.add.sprite(326, 395, 'soundlabel');
        label3= this.add.sprite(542, 398, 'weicheilabel');
        label4= this.add.sprite(758, 395, 'editorlabel');
        label5= this.add.sprite(758, 395, 'editorlabel');
       
        label1.scale.set(0.13);
        label2.scale.set(0.13);
        label3.scale.set(0.13);
        label4.scale.set(0.13);
        label5.scale.set(0.13);
        
        label5.visible=false;
        
    },
    
    buildAnimations: function() {
       
        supermario.animations.add('right', [7,8,9,10], 20, true);
        supermario.animations.add('left', [3,4,5,6], 20, true);
        supermario.animations.add('jumpright', [2], 0, true);
        supermario.animations.add('jumpleft', [1], 0, true);
        supermario.animations.add('jump', [11], 0, true);
        
 
    },
    
    marioHitButton1: function() {
        if(supermario.body.touching.up){
            if(editorstate==0 && soundstate==0){ 
                
                switch(startstate) {
                    case 0:
                        this.showPlayerMenu();
                        break;
                    case 1:
                        this.showLevelMenu();
                        playercount=1;
                        break;
                    case 2:
                        this.startLevel1();
                        startstate=0;
                        break;

                }
            }
            
            if(soundstate==1 ){
                switch(soundon) {
                    case true:
                        label1.loadTexture('soundofflabel',0);
                        soundon=false;
                        break;
                    case false:
                        label1.loadTexture('soundonlabel',0);
                        soundon=true;
                        break;
                    

                }
           
           
            }
        }
    },
    
    marioHitButton2: function() {
        
        if(supermario.body.touching.up){
            
            if(soundstate==1){
                
                switch(musicon) {
                    case false:
                        
                        label2.loadTexture('musiconlabel',0);
                        musicon=true;
                        break;
                    case true:
                        label2.loadTexture('musicofflabel',0);
                        musicon=false;


                        break;
                    

                }
            }
            
            
            if(startstate==0 && editorstate==0 && soundstate==0){
                        
                        label1.x = 280;
                        label2.x = 475;
                
                        label1.y = 388;
                        label2.y = 392;
                        
                        if(soundon){
                            label1.loadTexture('soundonlabel',0);;
                        } 
                        else {
                            label1.loadTexture('soundofflabel',0);
                        }
                
                        if(musicon){
                           label2.loadTexture('musiconlabel',0);
                        }
                    	else{
                            label2.loadTexture('musicofflabel',0);
                          
                        }
                
                        
                        label3.loadTexture('zuruecklabel',0);
                        

                        
                        label3.x=640;
                        label4.visible=false;
                        label5.visible=false;

                        button1.x = 310;
                        button2.x = 510;
                        button3.x = 710;
                        button4.body.enable=false;
                        button4.visible=false;
                
                        soundstate=1;
                
            }
            
            
                       
            if(startstate==1){
                this.showLevelMenu();
                playercount=2;
            }
            
            if(startstate==2){
               //Start Level2 
            }
            
            
            
                
        }
    },
    
    marioHitButton3: function() {
        if(supermario.body.touching.up){
            if(startstate==0 && editorstate==0 && soundstate==0){
                switch(difficulty) {
                    case 1:
                        label3.x=570;
                        label3.loadTexture('heldlabel',0);
                        difficulty=2;
                        break;
                    case 2:
                        label3.x=542;
                        label3.loadTexture('psycholabel',0);
                        difficulty=3;
                        break;
                    case 3:
                        label3.x=542;
                        label3.loadTexture('weicheilabel',0);
                        difficulty=1;
                        break;
                    

                }
            }
            
            if(startstate==1) {
                this.showLevelMenu();
                playercount=0;
            }
            
            if(soundstate==1) {
                soundstate=0;
                this.showMainMenu();
                
                
            }
            
            
            
        }
                
        
            
            
        
    },
    
    marioHitButton4: function() {
        if(supermario.body.touching.up){
          if(startstate==1){
              this.showMainMenu();
          }
            
          if(startstate==0 && soundstate==0 &&editorstate==0){
              //Show Leveleditor
          }
            
           
            
        }
        
        
    },
    
    marioHitButton5: function() {
        if(supermario.body.touching.up){
            this.showPlayerMenu();
            
        }
        
        
    },
    
    showLevelMenu: function(){
        

        button1.x = 150;
        button2.x= 325;
        button3.x=500;
        button4.x=675;
        button5.body.enable=true;
        button5.visible=true;
        
        label1.x=81;
        label2.x=256;
        label3.x=431;
        label4.x=606;
        label5.x=790;
        label5.visible=true;

        label1.loadTexture('level1label',0);
        label2.loadTexture('level2label',0);
        label3.loadTexture('level3label',0);
        label4.loadTexture('eigenelabel',0);
        label5.loadTexture('zuruecklabel',0);
        startstate=2;
    },
    
    showMainMenu: function(){
        switch(difficulty) {
            case 1:
                label3.x=542;
                label3.loadTexture('weicheilabel',0);
                break;
            case 2:
                label3.x=570;
                label3.loadTexture('heldlabel',0);
                break;
            case 3:
                label3.x=542;
                label3.loadTexture('psycholabel',0);
                break;
           
        }
        
        
        label1.loadTexture('startlabel',0);
        label2.loadTexture('soundlabel',0);
        label4.loadTexture('editorlabel',0);
        label5.visible=false;
        label4.visible=true;

        label1.x=110;
        label1.y=395;
        label2.x=326;
        label2.y=395;
        
        label3.y=398;
        label4.x=758;
        label4.y=395;

        button1.x =180;
        button2.x = 396;
        button3.x = 612;
        button4.body.enable=true;
        button4.visible=true;
        
        startstate=0;
        soundstate=0;
        editorstate=0;
        
        
    },
    
    showPlayerMenu: function(){
        button1.x = 180;
        button2.x = 396;
        button3.x = 612;
        button4.x = 830;
        button5.body.enable=false;
        button5.visible=false;
        
        label1.x=110;
        label1.y=395;
        label2.x=326;
        label2.y=395;
        label3.x=542;
        label3.y=398;
        label4.x=758;
        label4.y=395;
        label5.visible=false;
        label1.loadTexture('singlelabel',0);
        label2.loadTexture('multilabel',0);
        label3.loadTexture('botlabel',0);
        label4.loadTexture('zuruecklabel',0); 
       
        startstate=1;
    },
    
    startLevel1: function() {
        this.game.state.start('Game');
    }
    
   
    
};