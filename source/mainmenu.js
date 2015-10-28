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
    var schwierigkeit = 0;
    
Break.MainMenu.prototype = {
    create: function () {
        this.physics.startSystem(Phaser.Physics.ARCADE);
        //Activate Keyboard
        cursors = this.input.keyboard.createCursorKeys();

        background = this.add.tileSprite(0, 0, 1024, 768, 'mario0');

        //Mario
        supermario = this.add.sprite(190, 635, 'supermario');
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
        
        //Startbeschriftung
        startlabel= this.add.sprite(110, 395, 'startlabel');
        soundlabel= this.add.sprite(326, 395, 'soundlabel');
        weicheilabel= this.add.sprite(542, 398, 'weicheilabel');
        editorlabel= this.add.sprite(758, 395, 'editorlabel');
        startlabel.scale.set(0.13);
        soundlabel.scale.set(0.13);
        weicheilabel.scale.set(0.13);
        editorlabel.scale.set(0.13);
        
        
        
        
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
	
    buildLabels: function() {
        
        
        // Deklarieren der übrigen, zunächst unsichtbaren, Beschriftungen
        heldlabel= this.add.sprite(564, 398, 'heldlabel');
        heldlabel.scale.set(0.13);
        heldlabel.visible=false;

        psycholabel= this.add.sprite(543, 399, 'psycholabel');
        psycholabel.scale.set(0.13);
        psycholabel.visible=false;
        
        multilabel= this.add.sprite(326, 395, 'multilabel');
        multilabel.scale.set(0.13);
        multilabel.visible=false;

        botlabel= this.add.sprite(542, 397, 'botlabel');
        botlabel.scale.set(0.13);
        botlabel.visible=false;
        
        singlelabel= this.add.sprite(110, 395, 'singlelabel');
        singlelabel.scale.set(0.13);
        singlelabel.visible=false;

        zuruecklabel= this.add.sprite(758, 397, 'zuruecklabel');
        zuruecklabel.scale.set(0.13);
        zuruecklabel.visible=false;
        
        
        level1label= this.add.sprite(81, 397, 'level1label');
        level1label.scale.set(0.13);
        level1label.visible=false;

        level2label= this.add.sprite(256, 397, 'level2label');
        level2label.scale.set(0.13);
        level2label.visible=false;
        
        level3label= this.add.sprite(431, 397, 'level3label');
        level3label.scale.set(0.13);
        level3label.visible=false;

        eigenelabel= this.add.sprite(606, 397, 'eigenelabel');
        eigenelabel.scale.set(0.13);
        eigenelabel.visible=false;
        
        soundonlabel= this.add.sprite(276, 389, 'soundonlabel');
        soundonlabel.scale.set(0.13);
        soundonlabel.visible=false;

        soundofflabel= this.add.sprite(276, 389, 'soundofflabel');
        soundofflabel.scale.set(0.13);
        soundofflabel.visible=false;
        
        musiconlabel= this.add.sprite(470, 391, 'musiconlabel');
        musiconlabel.scale.set(0.13);
        musiconlabel.visible=false;

        musicofflabel= this.add.sprite(470, 391, 'musicofflabel');
        musicofflabel.scale.set(0.13);
        musicofflabel.visible=false;
        
    
    },
    
    marioHitButton1: function() {
        if(supermario.body.touching.up){
            if(editorstate==0 && soundstate==0){ 
                
                switch(button1count) {
                    case 0:
                        
                        this.showPlayerMenu();
                         button1count+=1;
                        break;
                    case 1:
                        this.showLevelMenu();
                        button1count+=1;
                        startstate=2;
                        break;
                    case 2:
                        this.startLevel1();
                        button1count=0;
                        startstate=0;
                        break;

                }
            }
            
            if(soundstate==1 ){
                switch(soundon) {
                    case true:
                       
                        soundonlabel.visible=false;
                        soundofflabel.visible=true;
                        soundon=false;
                        break;
                    case false:
                        soundonlabel.visible=true;
                        soundofflabel.visible=false;
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
                        musiconlabel.visible=true;
                        musicofflabel.visible=false;
                        musicon=true;
                        break;
                    case true:
                        musiconlabel.visible=false;
                        musicofflabel.visible=true;
                        musicon=false;


                        break;
                    

                }
            }
            
            
            if(startstate==0 && editorstate==0 && soundstate==0){
                        if(soundon){
                            soundonlabel.visible=true;
                        } 
                        else {
                            soundofflabel.visible=true;
                        }
                
                        if(musicon){
                           musiconlabel.visible=true;
                        }
                    	else{
                            musicofflabel.visible=true;
                          
                        }
                
                        
                        startlabel.visible=false;
                        soundlabel.visible=false;
                        weicheilabel.visible=false;
                        heldlabel.visible=false;
                        psycholabel.visible=false;
                        editorlabel.visible=false;

                        
                        zuruecklabel.x=640
                        zuruecklabel.visible=true;

                        button1.x = 310;
                        button2.x = 510;
                        button3.x = 710;
                        button4.body.enable=false;
                        button4.visible=false;
                
                        soundstate=1;
                
            }
            
            
                       
            if(startstate==1){
               this.showLevelMenu(); 
            }
            
            if(startstate==2){
               //Start Level2 
            }
            
            
            
                
        }
    },
    
    marioHitButton3: function() {
        if(supermario.body.touching.up){
            if(startstate==0 && editorstate==0 && soundstate==0){
                switch(button3count) {
                    case 0:
                        weicheilabel.visible=false;
                        heldlabel.visible=true;
                        button3count+=1;
                        schwierigkeit =2;
                        break;
                    case 1:
                        heldlabel.visible=false;
                        psycholabel.visible=true;
                        button3count+=1;
                        schwierigkeit=3;
                        break;
                    case 2:
                        psycholabel.visible=false;
                        weicheilabel.visible=true;
                        button3count=0;
                        schwierigkeit=0;
                        
                        break;

                }
            }
            
            if(startstate==1) {
                this.showLevelMenu();
            }
            
            if(soundstate==1) {
                soundstate=0;
                startlabel.visible=true;
                soundlabel.visible=true;
                weicheilabel.visible=true;
                editorlabel.visible=true;  
                
                

                musicofflabel.visible=false;
                musiconlabel.visible=false;
                soundofflabel.visible=false;
                soundonlabel.visible=false;
                
                zuruecklabel.x=758
                zuruecklabel.visible=false;

                button1.x =180;
                button2.x = 396;
                button3.x = 612;
                button4.body.enable=true;
                button4.visible=true;
                
                
            }
            
            
            
                
                
        
            
            
        }
    },
    
    marioHitButton4: function() {
        if(supermario.body.touching.up){
           
        }
        
        
    },
    
    marioHitButton5: function() {
        if(supermario.body.touching.up){
            
        }
        
        
    },
    
    showLevelMenu: function(){
        
        singlelabel.visible=false;
        multilabel.visible=false;
        botlabel.visible=false;
        zuruecklabel.x=false;

        button1.x = 150;
        button2.x= 325;
        button3.x=500;
        button4.x=675;
        button5.body.enable=true;
        button5.visible=true;
        zuruecklabel.x=790;

        level1label.visible=true;
        level2label.visible=true;
        level3label.visible=true;
        eigenelabel.visible=true;
        
    },
    
    showPlayerMenu: function(){
        startlabel.visible=false;
        soundlabel.visible=false;
        weicheilabel.visible=false;
        heldlabel.visible=false;
        psycholabel.visible=false;
        editorlabel.visible=false;

        singlelabel.visible=true;
        multilabel.visible=true;
        botlabel.visible=true;
        zuruecklabel.visible=true;
       
        startstate=1;
    },
    
    startLevel1: function() {
        this.game.state.start('Game');
    }
    
   
    
};