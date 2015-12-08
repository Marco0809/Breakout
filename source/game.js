Break.Game =function(game) {
   
};
	//Variablenbestimmung fuer Spielgeraete
    var cursor;
    var cursor2;
    var ball;
    var ballreleased;
	
	// Variable zur Zaehlung der aktiven Powerups
    var powerup=[];
    var indexPowerArray = 0;
    var lifepowerup=[];
    var indexLifepowerArray = 0;
	//Textanzeige
    var scoreText;
    var lifeText;
	//Zaehler fuer Bloecke
	var alreadyHittedStrongBricks = [];
    var alreadyHittedBricks = [];
	var arrayIndex = 0; // the current index of the alreadyHittedBricks array will be save here
    var arrayStrongIndex = 0; // the current index of the alreadyHittedBricks array will be save here
    //Bowser beim Abraeumen aller Bloecke. 
	var bowser;
	// Hier beginnt die Zaehlung der Bowserhitpoints
    var bowserappeared=false;
    var bowserhit;
	//Powerups und Bloecke
    var counterHitStrong =[];
    var heartcounter=[];
    var powerupsalife=0;
    var lifepowerupsalife=0;
    var gameover=false;
	//Wie swchnell sich der Cursor bewegen laesst
    var cursorspeed=20;
	//Wie gross ist der Cursor
	var cursorsize2 =1;
    var cursorsize=1;
	//Freezepowerup und Bonuspunkte
    var freezescreen;
    var fullbonus=false;
	//Cheatimplementierung
    var cheat ="";
    var timeCheckCheat;
    var godmode=false;
    //Botmodus
    var botmultiplier=0;
    var newCursorX;
	//Musik
	var music;
   
    
   

    

Break.Game.prototype = {
	    //Funktion:
		//Die Createfunktion ist phasereigen und wird immer bei Spielstart aufgerufen
    create: function() {
        music = this.game.add.audio('SoundLevel1');

        //Variabeln
        ballreleased=false;
        gameover=false;
        
		//Game wird neu gestartet, level definiert
        switch(currentLevel){
                case 1: LevelEins(this);
                break;
                case 2: LevelZwei(this);
                break;
                case 3: LevelDrei(this);
                break;
                case 4: ownLevel(this, 1);
                break;
                case 5: ownLevel(this, 2);
                break;
                case 6: ownLevel(this, 3);
                break;
        }
       
        

        //Hinzufügen des Cursors
        
        this.createCursor1('cursor',520, 720);
        if(playercount==2){
            this.createCursor2('cursor2', 600, 720);
        }
        // Ist die Geschwindigkeit Psycho wird der Bildschirm gedreht
        if(difficulty==3){
            document.getElementById("body").style.transform= "rotate(180deg)";
        }
        
        //Hinzufügen des BAlls
        this.createBall();
       
       
        //Hinzufügen von Score
        scoreText = this.add.text(920, 16, score, { fontSize: '32px', fill: '#000', align: 'right' });
        if(currentLevel==3 ||currentLevel==2){scoreText.fill= '#FFF';}

        //Hinzufügen von Leben
        this.createHearts();
        
        // Feature und Lebenbricks. Diese gibt es in jedem Level
        featurebricks = this.game.add.group();
        featurebricks.enableBody = true;
		featurebricks.exists = true;
        
        eggbricks = this.game.add.group();
        eggbricks.enableBody = true;
		eggbricks.exists = true;

        //Maus aktivieren
        this.input.mouse.capture = true;
        freezescreen = this.add.sprite(0, 0, 'freeze');
        freezescreen.visible=false;
        // KEyhandler fuer Cheats
        this.game.input.keyboard.addCallbacks( this, this.mykeydownhandler );
        
		// Automatisches abfeuern des Balles im Botmodus
        if(playercount ==0 && !ballreleased){
            
            this.game.time.events.add(1000, this.releaseBall, this);
             
            
          
        }
        

       
    },

    //Funktion:
	//Die Update Funktion ist phasereigen und wird permanent aufgerufen
    update: function() {
       
        //Falls Ball nicht released ist
        
        this.game.input.onDown.add(this.releaseBall2, this);
        
            
            
            
            
            //Spiel Starten / linker Mausklick
            if (( this.input.keyboard.isDown(Phaser.Keyboard.SPACEBAR)) )
            {
                if(!gameover && !ballreleased){
                    this.releaseBall();
                }
                else if(gameover){
                    music.stop();
                    this.state.start('MainMenu');
                   
                    
                     
                }
            }
        

        
        
        //////SPIELER 1
        if(playercount!==0){
            if (this.input.keyboard.isDown(Phaser.Keyboard.LEFT))
            {
                // Cursor ändert Position bei Tastaturklick
                cursor.x -= cursorspeed;
                //Falls Ball auf Cursor liegt, ist PositionBall = PositionCursor
                if(!ballreleased){ 
                ball.x = cursor.x ;}

            }
            else if (this.input.keyboard.isDown(Phaser.Keyboard.RIGHT))
            {

                 // Cursor ändert Position bei Tastaturklick
                cursor.x += cursorspeed;
                if(!ballreleased){ 
                //Falls Ball auf Cursor liegt, ist PositionBall = PositionCursor
                ball.x = cursor.x ;}

            }
            
            else
                
            {
                
                this.game.input.onDown.add(this.changeCursorX, this);
                /*
                if (this.input.mousePointer.isDown)
                {

                    cursor.x=this.input.x;
                    /*
                    var xMovePosition = this.input.x;
                    var yMovePosition = cursor.y ;  
                    var cursorVelocity = 700;
                     cursor.body.bounce.set(100);  
                    this.physics.arcade.moveToXY(cursor, xMovePosition, yMovePosition, cursorVelocity);
                }*/
            /*
                else
                {
                    /* var xMovePosition = cursor.x;
                    var yMovePosition = cursor.y ;
                     var cursorVelocity = 0;
               
                    this.physics.arcade.moveToXY(cursor, xMovePosition, yMovePosition, cursorVelocity);
                }*/
                    if(!ballreleased){ 
                        ball.x = cursor.x ;}
                
            }
        }
        //Falls es 2. Spieler gibt
        if(playercount==2) {
         //////SPIELER 2
            if (this.input.keyboard.isDown(Phaser.Keyboard.A))
            {

                cursor2.x -= cursorspeed;

            }
            else if (this.input.keyboard.isDown(Phaser.Keyboard.D))
            {


                cursor2.x += cursorspeed;

            }


        }
        
        // BOT
        
        if(playercount ==0 && ballreleased){
            //Position des Cursors ist gleich ballposition undzufallsvariable
            cursor.x = ball.x + botmultiplier;
           
        }
        
        
        //Wenn der Ball den Boden berührt, führe ballHitBottom(ball)  aus
        if(ball.body.onFloor() || ball.body.touching.down)
        {
            if(!godmode){
            this.ballHitBottom(ball);
            }
        }

        // Wenn es keine Bricks mehr gibt -> nächstes Level
        if(strongBricks.hash.length <1 && bricks.hash.length <1 && middleBricks.hash.length<1 && featurebricks.hash.length<1 && eggbricks.hash.length<1 && !gameover)
        {
           
            // Call next Level 
            switch(currentLevel)
            {
                case 1:currentLevel=2;
                    cursorsize=1;
					music.stop();
                    this.game.state.start('Game');
                    break;

                case 2: currentLevel=3;
                    cursorsize=1;
					music.stop();
                    this.game.state.start('Game');
                    break;
				//Sind alle Bricks aus level 3 abgeraeumt, erscheint der Endgegner
                case 3: 
                    if(!bowserappeared && !gameover){
                        this.createBowser();
                    }
                    break;
            }

          }
        // Ist nach 3 Sekunden keine Eingabe zum Cheaten gemacht worden, wird der Cheatstring resettet
        if ((2980<= (this.game.time.now - timeCheckCheat)) && ((this.game.time.now - timeCheckCheat) <= 3200)){
             
             
            cheat="";
           
        }
        
        
		//Kollisionsdefinitionen zwischen den einzelnen Elementen
        this.physics.arcade.collide(ball, bricks, this.ballHitBrick, null, this);
        this.physics.arcade.collide(ball, middleBricks, this.ballHitMiddleBrick, null, this);
		this.physics.arcade.collide(ball, strongBricks, this.ballHitStrongBrick, null, this);
        this.physics.arcade.collide(ball, impossibleBricks);
        this.physics.arcade.collide(ball, featurebricks, this.ballHitFeatureBlock, null, this);
        this.physics.arcade.collide(ball, eggbricks, this.ballHitEggBlock, null, this);
        this.physics.arcade.collide(ball, cursor2, this.ballHitCursor, null, this);
        this.physics.arcade.collide(ball, cursor, this.ballHitCursor, null, this);
        this.physics.arcade.collide(ball, bowser, this.ballHitBowser, null, this);
		// Fuer jedes Aktive Powerup oder Lebenpowerup muessen Seperat Kollisionsdefinitionen angelegt werden]
        for(var i=0; i<=powerupsalife; i++){
        this.physics.arcade.collide(powerup[indexPowerArray-i], cursor, this.powerupHitCursor, null, this);
        }
        
        for(var k=0; k<=lifepowerupsalife; k++){
        this.physics.arcade.collide(lifepowerup[indexLifepowerArray-k], cursor, this.powerupHitCursor, null, this);   
        }
        /*
        for(var i=0; i<=powerupsalife; i++){
        this.physics.arcade.collide(powerup[indexPowerArray-i], cursor2, this.powerupHitCursor2, null, this);
        }
        
        for(var k=0; k<=lifepowerupsalife; k++){
        this.physics.arcade.collide(lifepowerup[indexLifepowerArray-k], cursor2, this.powerupHitCursor2, null, this);   
        }*/
        
        
        
    },
    changeCursorX: function()
    {
    cursor.x=this.input.x;},
	//Funktion:
    // Ist die Zeit nach dem Einsammeln eines Infinitypowerups vorbei, wird diese Funktion aufgerufen
    timesUpInfinity: function()
    {
        
            var tempX = cursor.x;
            var tempY = cursor.y;
			//Cursor wird gekillt und ein neuer in Normalgroesse(Variiert) created
            cursor.kill();
			//Der Cursor nimmt die alteGroesse wieder an
            switch(cursorsize){
                case 1:
            this.createCursor1('cursor', tempX, tempY);
                    break;
                    case 2:
            this.createCursor1('cursorEins', tempX, tempY);
                    break;
                    case 3:
            this.createCursor1('cursorZwei', tempX, tempY);
                    break;
                    case 4:
            this.createCursor1('cursorDrei', tempX, tempY);
                    break;
            }
    },
        //Funktion:
	// Siehe timesUpInfinity
    timesUpFlake: function()
    {
            freezescreen.visible=false;
            cursorspeed=20;
    },
    //Funktion:
    ballHitCursor: function(myBall, myCursor) {

        var diff = 0;

        if (myBall.x < myCursor.x)
        {
            //  Ball ist links auf dem Cursor
            diff = myCursor.x - myBall.x;
            myBall.body.velocity.x = (-8 * diff);
        }
        else if (myBall.x > myCursor.x)
        {
            //  Ball ist rechts auf dem Cursor
            diff = myBall.x - myCursor.x;
            myBall.body.velocity.x = (8 * diff);
        }
        else
        {
            //  Ball ist genau in der Mitte
            myBall.body.velocity.x = 2 + Math.random() * 8;
        }
        
        //Im  Botmodus wird 1,5 Sekunden nach dem Aufprall eine Zufallsvariable generiert
        if(playercount==0){
       this.game.time.events.add(1500, this.updateBotMultiplier, this);
        }

    },
    //Funktion:
	// Abfeuern des Balls (tastendruck oder Botmodus)
    releaseBall: function(){
        
        
                    ball.body.allowGravity = true;
                    ballreleased = true;
                    ball.body.immovable = false;
                    if(difficulty==1){
                    ball.body.velocity.y=-450;}
                    else{
                      ball.body.velocity.y=-900;  
                    }
        
    },
        
        releaseBall2: function(){
        
        if(!ballreleased && !gameover){
                    ball.body.allowGravity = true;
                    ballreleased = true;
                    ball.body.immovable = false;
                    if(difficulty==1){
                    ball.body.velocity.y=-450;}
                    else{
                      ball.body.velocity.y=-900;  
                    }
        }
            else if (gameover){
                music.stop();
                    this.state.start('MainMenu');
            }
        
    },
    //Funktion:
	// Definiert was geschieht, wenn ein bestimmtes Powerup den Cursor 1 beruehrt]
    powerupHitCursor:function(myPowerup, myCursor){
        
        myPowerup.kill();
        // JE nach benutztem Imagefile wird der Effekt veraendert
        switch(myPowerup.frameName){
			//Cursor wird unendlich gross
            case 'images/infinity.png': 
                var tempX = cursor.x;
                var tempY = cursor.y;
                cursor.kill();
                this.createCursor1('maxcursor', tempX, tempY);
                
                powerupsalife--;
                this.game.time.events.add(5000, this.timesUpInfinity, this);
        
                break;
			//Cursorgeschwindigkeit wird verlangsamt
            case 'images/snowflake.png': 
                 
                cursorspeed=5;
                freezescreen.visible=true;
                powerupsalife--;
                 this.game.time.events.add(5000, this.timesUpFlake, this);
        
                break;
			// MAn erhaelt ein neues Leben
            case 'images/leben.png': if(life<21){
                life++;
                 lifepowerupsalife--;               
                this.createHearts();
            }
                break;
			//CUrsor wird groesser
            case 'images/cursorplus.png': 
                if(cursorsize>0 && cursorsize<4){
                    cursorsize++;
                }
               
                var tempX = cursor.x;
                var tempY = cursor.y;
                cursor.kill();
                powerupsalife--;
				//JE nach dem wie gross der Cursor zuvor war
                switch(cursorsize){
                    case 2: this.createCursor1('cursorEins', tempX, tempY);
                       
                            break;
                    case 3: this.createCursor1('cursorZwei', tempX, tempY);
                            break;
                    case 4: this.createCursor1('cursorDrei', tempX, tempY);
                            break;
                }
                 
                break;
			//CUrsor wird kleiner
            case 'images/cursorminus.png': 
                if(cursorsize>1 && cursorsize<5){
                    cursorsize--;
                }
                var tempX = cursor.x;
                var tempY = cursor.y;
                cursor.kill();
                
                powerupsalife--;
				//JE nach dem wie gross der Cursor zuvor war
                switch(cursorsize){
                    case 1: this.createCursor1('cursor', tempX, tempY);
                        
                            break;
                    case 2: this.createCursor1('cursorEins', tempX, tempY);
                            break;
                    case 3: this.createCursor1('cursorZwei', tempX, tempY);
                            break;
                }
                break;
        }
      
    },
    
    // FUnktion>
	// Diese FUnktion enthaelt die gleichen Mechanismen wie function powerupHitCursor
     powerupHitCursor2:function(myPowerup, myCursor){
        
        
        myPowerup.kill();
        
        
       
        switch(myPowerup.frameName){
            case 'images/infinity.png': 
                var tempX = cursor2.x;
                var tempY = cursor2.y;
                cursor2.kill();
                this.createCursor2('maxcursor', tempX, tempY);
                
                timeCheckInfinity = this.game.time.now;
                powerupsalife--;
        
                break;
            case 'images/snowflake.png': 
                 
                cursorspeed=5;
                freezescreen.visible=true;
                timeCheckFlake = this.game.time.now;
                powerupsalife--;
        
                break;
            case 'images/leben.png': if(life<21){
                life++;
                 lifepowerupsalife--;               
                this.createHearts();
            }
                break;
            case 'images/cursorplus.png': 
                if(cursorsize2>0 && cursorsize2<4){
                    cursorsize2++;
                }
                 
                var tempX = cursor2.x;
                var tempY = cursor2.y;
                cursor2.kill();
                powerupsalife--;
                switch(cursorsize2){
                    case 2: this.createCursor2('cursorEins', tempX, tempY);
                       
                            break;
                    case 3: this.createCursor2('cursorZwei', tempX, tempY);
                            break;
                    case 4: this.createCursor2('cursorDrei', tempX, tempY);
                            break;
                }
                 
                break;
            case 'images/cursorminus.png': 
                if(cursorsize2>1 && cursorsize2<5){
                    cursorsize2--;
                }
                var tempX = cursor2.x;
                var tempY = cursor2.y;
                cursor2.kill();
                
                powerupsalife--;
                switch(cursorsize2){
                    case 1: this.createCursor2('cursor2', tempX, tempY);
                        
                            break;
                    case 2: this.createCursor2('cursorEins', tempX, tempY);
                            break;
                    case 3: this.createCursor2('cursorZwei', tempX, tempY);
                            break;
                }
                break;
        }
      
    },
    //Funktion
	// Diese Funktion bestimmt, ob beim killen eines Blocks ein Featureblock entsteht
	// Die Chance liegt standardgemaess bei ca. 12%
	// Die Funktion bestimmt des Weiteren, ob es ein echter Featureblock oder ein Herzblock wird.
	// Die Chance hieryu liegt jeweils bei 6%
     createFeatureBlock: function(brickX, brickY)
    {
		//Generieren einer Variable 
        var rndd = this.game.rnd.integerInRange(1, 7);
        if(rndd==1){
                    var featurebrick;
                    var eggbrick;
                    var rnd = this.game.rnd.integerInRange(1, 2);
                    if(rnd==1){
                        featurebrick = featurebricks.create(brickX, brickY, 'featureblock', 'featureblock.png');
                        featurebrick.scale.set(0.1);
                        featurebrick.body.bounce.set(1);
                        featurebrick.body.immovable = true;
                    }
                    else if(rnd==2){
                        if(life<21){
                        eggbrick = eggbricks.create(brickX, brickY, 'eiblock', 'eiblock.png');
                        eggbrick.scale.set(0.1);
                        eggbrick.body.bounce.set(1);
                        eggbrick.body.immovable = true;
                        }
                    }
                    
                    
        }
    },
    //Funktion
	//Hier wird definiert, welches Powerup beim TReffen eines Featureblocks generiert wird. Es gibt 4 Powerups, deshalb ist die chance 25%
     createPowerup: function(brickX, brickY)
    {
    
		//Generieren einer Randomvariablen
        var rnd = this.game.rnd.integerInRange(1, 4);
        switch(rnd){
            case 1: powerup[indexPowerArray]= this.add.sprite(brickX, brickY, 'infinity');
                    powerup[indexPowerArray].scale.setTo(0.1);
                    this.physics.arcade.enable(powerup[indexPowerArray]);
					//Powerup fliegt mit 450 Pixeln pro Sekunde
                    powerup[indexPowerArray].body.velocity.y= 450;
                    powerupsalife++;
                    indexPowerArray++;  
                    break;
                
            case 2: powerup[indexPowerArray]= this.add.sprite(brickX, brickY, 'snowflake');
                    powerup[indexPowerArray].scale.setTo(0.05);
                    this.physics.arcade.enable(powerup[indexPowerArray]);
                    powerup[indexPowerArray].body.velocity.y= 450;
                    powerupsalife++;
                    indexPowerArray++;  
                    break;
            case 3: powerup[indexPowerArray]= this.add.sprite(brickX, brickY, 'cursorplus');
                    powerup[indexPowerArray].scale.setTo(0.2);
                    this.physics.arcade.enable(powerup[indexPowerArray]);
					//Powerup fliegt mit 450 Pixeln pro Sekunde
                    powerup[indexPowerArray].body.velocity.y= 450;
                    powerupsalife++;
                    indexPowerArray++;  
                    break;
                
            case 4: powerup[indexPowerArray]= this.add.sprite(brickX, brickY, 'cursorminus');
                    powerup[indexPowerArray].scale.setTo(0.2);
                    this.physics.arcade.enable(powerup[indexPowerArray]);
					//Powerup fliegt mit 450 Pixeln pro Sekunde
                    powerup[indexPowerArray].body.velocity.y= 450;
                    powerupsalife++;
                    indexPowerArray++;  
                    break;
            
        }
        
        
                
        
        
    },
    //Funktion
	// Wird ein Eggblock gehittet,  entsteht ein Herzpowerup
    createEgglife: function(brickX, brickY)
    {
                    if(life<21){
                    lifepowerup[indexLifepowerArray]= this.add.sprite(brickX, brickY, 'leben');
                    lifepowerup[indexLifepowerArray].scale.setTo(0.05);
                    this.physics.arcade.enable(lifepowerup[indexLifepowerArray]);
					//Powerup fliegt mit 450 Pixeln pro Sekunde
                    lifepowerup[indexLifepowerArray].body.velocity.y= 450;
                    lifepowerupsalife++;
                    indexLifepowerArray++;
                    }
        
    },
    
	//Der Block wird gekillt und die Createpowerupfunktion aufgerufen
    ballHitFeatureBlock: function(myBall, myFBrick) {
        featurebricks.removeFromHash(myFBrick);
        myFBrick.kill();
        this.createPowerup( myFBrick.x, myFBrick.y);
    },
	
    //Der Block wird gekillt und die Createegglifefunktion aufgerufen
    ballHitEggBlock: function(myBall, myEBrick) {
        eggbricks.removeFromHash(myEBrick);
        myEBrick.kill();
        this.createEgglife( myEBrick.x, myEBrick.y);
    },
     //Funktion
	 // Hier wird definiert was passiert  wenn ein Ball einen Block hittet
    ballHitBrick: function(myBall, myBrick) {
        var points = 10; // Score plus 10
        score = score +points;
        this.createFadeScore( myBrick.x, myBrick.y, points);//Punkteanzeige poppt auf
        scoreText.text = score;
        bricks.removeFromHash(myBrick);//Block wird vom gesamt Hash entfernt
        myBrick.kill();
		//Zaehlen der hintereinander gehitteten Bloecke
        bonuscount++;
        
        this.createFadeBonus();// Fadebonus falls genug Bonus gesammelt wurde
        
        // Eventuell wird ein Featureblock kreiert
        this.createFeatureBlock( myBrick.x, myBrick.y);
        
            

    }, 

	     //Funktion
	 // Hier wird definiert was passiert  wenn ein Ball einen Block hittet
	ballHitMiddleBrick: function(myBall, myBrick) { //
		//Sound wird definiert
		var middleBrickSound = this.add.audio('HitStrongBrickSound');
		var BrickSound = this.add.audio('HitBrickSound');
		//Da die Bloecke zweimal gehittet werden muessen, wird hier ueberprueft, wieoft schon gehittet wurde
		if(alreadyHittedBricks.indexOf(myBrick) == -1){//
			
			alreadyHittedBricks[arrayIndex] = myBrick;
			arrayIndex ++;
			myBrick.loadTexture('mittel2',0);
			
            if(soundon){
			middleBrickSound.play();
            }
		}
        
		else{
			//wird der Block gekillt  Score +30
            var points = 30;
            score = score +points;
            this.createFadeScore( myBrick.x, myBrick.y, points);
			
			scoreText.text = score;
			//Gekillter Block wird vom hash entfernt
            middleBricks.removeFromHash(myBrick);
			myBrick.kill();
			
			//soundabgespielt
			BrickSound.play();
            bonuscount++;
            this.createFadeBonus();// Bonus
            
            
            this.createFeatureBlock( myBrick.x, myBrick.y);//Eventuell wird ein Featureblock erstellt
            
		}
			


    }, 	
    
         //Funktion
	 // Hier wird definiert was passiert  wenn ein Ball einen  schweren Block hittet
    ballHitStrongBrick: function(myBall, myBrick) { //

		var strongBrickSound = this.add.audio('HitStrongBrickSound');
		var BrickSound = this.add.audio('HitBrickSound');
       
        //Wenn Block einmal gehittet wurde
		if(alreadyHittedStrongBricks.indexOf(myBrick) == -1){//
			
			alreadyHittedStrongBricks[arrayStrongIndex] = myBrick;
            counterHitStrong[arrayStrongIndex] = 1;
			arrayStrongIndex ++;  
			myBrick.loadTexture('schwer2',0);
            if(soundon){
			strongBrickSound.play();
            }
		}
		else{      
               switch(counterHitStrong[alreadyHittedStrongBricks.indexOf(myBrick)])
                {
                    // Beim zweiten Hit
                    case 1: counterHitStrong[alreadyHittedStrongBricks.indexOf(myBrick)]++;
                            //Verändern der TExtur
                        	myBrick.loadTexture('schwer3',0);
                            if(soundon){
                                    strongBrickSound.play();
                            }
                            break;
                        //Beim dritten hit
                          case 2: counterHitStrong[alreadyHittedStrongBricks.indexOf(myBrick)]++;
                        	myBrick.loadTexture('schwer4',0);
                            if(soundon){
                                    strongBrickSound.play();
                            }
                            break;
                        //BEim vierten Hit wird der Block zerstört 
                          case 3: counterHitStrong[alreadyHittedStrongBricks.indexOf(myBrick)]++;
                        	//plus 100 score
                            var points = 100;
                            score = score +points;
                            scoreText.text = score;
                            //Punktanzeige
                            this.createFadeScore( myBrick.x, myBrick.y, points);
                           
                            strongBricks.removeFromHash(myBrick);
                            myBrick.kill();
                            if(soundon){
                            BrickSound.play();
                           
                            //Chance auf featureblock
                            this.createFeatureBlock( myBrick.x, myBrick.y);
                            bonuscount++;
                            this.createFadeBonus();
                            break;
                        
                    
                 }
               
            }
            
		}
			
       

    }, 	


    //Funktion
    //Wenn der Ball den Boden berührt
    ballHitBottom: function(myBall, leben) {

        if((life != 0)&&(!gameover))
        {

	       // Der Ball wird zerstört und man verliert ein leben
            life--;
            heartdraw--;
            myBall.kill();
            ballreleased = false;
            this.createBall();
            heartcounter[life].kill();
            bonuscount=0;
            fullbonus=false;
            
            //Befindet sich das Spiel im Botmodus, feuert es den Ball nach 1000 Millisekunden erneut ab
             if(playercount ==0 && !ballreleased){
            
            this.game.time.events.add(1000, this.releaseBall, this);
             
            
          
        }
            
           
        
        }
        else // Leben alle
        {
            //Anzeigen eines Gameovertexts
            var gameoverlabel = this.add.sprite(this.game.world.centerX, this.game.world.centerY, 'gameover');
            gameoverlabel.anchor.set(0.5);
            gameoverlabel.scale.setTo(0.7);
            gameoverlabel.alpha = 0;
            this.add.tween(gameoverlabel).to( { alpha: 1}, 10000, Phaser.Easing.Linear.None, true, 0, 0, false);
            
            //Nun kann Space gedrückt werden um zum  Menü zurückzukehren
            var spacelabel = this.add.sprite(this.game.world.centerX, this.game.world.centerY+90, 'pressspace');
            spacelabel.anchor.set(0.5);
            spacelabel.scale.setTo(0.4);
            spacelabel.alpha = 0;
            this.add.tween(spacelabel).to( { alpha: 1 }, 2000, Phaser.Easing.Linear.None, true, 2000, 0, false);
            
            //Ball wird gekillt und Spiel ist vorbei
            ball.kill();
            gameover=true;
            
            //Starteinstellungen
            currentLevel=1;
            life = 3;
            heartdraw=0;
            score=0;
            bonuscount=0;
             if(difficulty==3){
                    document.getElementById("body").style.transform= "rotate(360deg)";  
            }
            
        }
    },
    //Mithilfe dieser Funktion wird der Ball kreiert
    createBall: function()
        {
        //Hinzufügen des Balls
        ball = this.add.sprite(cursor.x, cursor.y-32, 'ball');
        ball.anchor.set(0.5);
        ball.scale.setTo(0.025);
        //Ball erhält physikalische Eigenschaften
        this.physics.arcade.enable(ball);
        ball.body.angularVelocity = 0;
        ball.body.collideWorldBounds = true;
        ball.checkWorldBounds = true;
        ball.body.bounce.set(1);
        ball.body.immovable = true;
        ball.body.allowGravity = false;
        ball.body.gravity.y = 50;
    },
    
    //Funktion zum erstellen des Cursors für Spieler 1
    createCursor1: function(cursorFrame, x, y)
    {
        
        cursor= this.add.sprite(x, y, cursorFrame);
        cursor.anchor.setTo(0.5, 0.5);
        this.physics.arcade.enable(cursor);
        cursor.body.immovable = true;
        cursor.body.collideWorldBounds = true;
        cursor.body.bounce.set(1);  
        
        
    },
    
    //Erstellen der Lebensanzeige
    createHearts: function()
    {
        for (heartdraw ; heartdraw < life; heartdraw++)
            {
                    //Nacheinander aufgereiht
                    var  leben= this.add.sprite(16+(42*heartdraw), 16, 'leben');
                    leben.scale.setTo(0.05);
                    //Wieviele Leben sollen gemalt werden?
                    heartcounter[heartdraw]= leben;
                
            }
    },
    
    //Funktion zum erstellen des Cursors für Spieler 2
    createCursor2: function(cursorFrame, x, y)
    {
        
        cursor2= this.add.sprite(x, y, 'cursor2');
        cursor2.anchor.setTo(0.5, 0.5);
        this.physics.arcade.enable(cursor2);
        cursor2.body.immovable = true;
        cursor2.body.collideWorldBounds = true;
        cursor2.body.bounce.set(1);  
        
    },
    
    //Funktion für PUnkteanzeige
    createFadeScore: function(imageX, imageY, score)
    {
        switch(score)//Je nach Block wird eine andere Punktanzeige kreiert
        {
            case 10:    var scoreimg = this.add.sprite(imageX+10, imageY-15, '10');
                        break;
            case 30:    var scoreimg = this.add.sprite(imageX+5, imageY-15, '30');
                        break;
            case 100:   var scoreimg = this.add.sprite(imageX+5, imageY-15, '100');
                        break;
        }

        //Unabhängig vom Block fadet die Anzeige nach oben weg
        scoreimg.scale.setTo(0.05);
        this.add.tween(scoreimg).to( { alpha: 0 }, 1500, Phaser.Easing.Linear.None, true, 0, 0, false);
        this.physics.arcade.enable(scoreimg);
        scoreimg.body.velocity.y = -100;
    },
    
    //Funktion:
    // für die Bonusanzeige
     createFadeBonus: function()
    {
        // Helfer um zu verhindern, dass die Eigenschaften des Bildes auch abgerufen werden, wenn es kein Bild gibt
        var helfer = false;
                            
        switch(bonuscount)// Je nachdem wieviele Blöcke man hintereinander tötet , ohne zu sterben, wird ein anderer Bonus gewährt
        {
            case 5:     if(!fullbonus){     
                            bonusimg = this.add.sprite(this.world.centerX, this.world.centerY, '5hit');
                            score = score +30;
                            helfer = true;
                        }
                        break;
            case 10:    if(!fullbonus){ 
                            bonusimg = this.add.sprite(this.world.centerX, this.world.centerY, '10hit');
                            score = score +100;
                            helfer = true;
                        }
                        break;
            case 15:    bonusimg = this.add.sprite(this.world.centerX, this.world.centerY, '15hit');
                        score = score +250;
                        helfer = true;
                        fullbonus=true;
                        bonuscount=0;
                        break;
        }

        if(helfer){
        bonusimg.scale.setTo(0.3);
        bonusimg.anchor.set(0.5);
        this.add.tween(bonusimg).to( { alpha: 0 }, 1500, Phaser.Easing.Linear.None, true, 0, 0, false);
        this.physics.arcade.enable(bonusimg);
        bonusimg.body.velocity.y = -100;
        }
    },
    
    //Funktion
    //kreieren des Endgegners nach level 3
    createBowser: function()
    {
        
        bowser= this.add.sprite(this.world.centerX-220, 10, 'bowser');
        bowser.scale.setTo(0.7);
        this.physics.arcade.enable(bowser);
        bowser.body.immovable = true;
        bowser.body.collideWorldBounds = true;
        bowser.body.bounce.set(1);
        bowser.body.velocity.x=-450;
        
        bowserhit =0;
        bowserappeared=true;
        
        //Alle Bricvks verschwinden ( wichtig für impossible)
        strongBricks.visible=false;
        strongBricks.enableBody=false;
        middleBricks.visible=false;
        middleBricks.enableBody=false;
        impossibleBricks.visible=false;
        impossibleBricks.enableBody=false;
        middleBricks.exists = false;
        strongBricks.exists = false;
        impossibleBricks.exists = false;
        
    },
    
    //Ist der Botmodus aktiv, wird hiermit immer bei Cursorhit eine neue Zufallsvariable erzeugt, die bestimmt wo der Cursor den Ball beim nächsten mal treffen soll
    updateBotMultiplier:function(){
            botmultiplier = this.game.rnd.integerInRange(-85, 85);
             
    },
    
    //Was passiert wenn der Endgegener getroffen wird
    ballHitBowser: function(){
        
        if(bowserhit==10){// Hat man Bowser 10x getroffen, endet das Spiel
            var youwonlabel = this.add.sprite(this.game.world.centerX, this.game.world.centerY, 'youwon');
            youwonlabel.anchor.set(0.5);
            youwonlabel.scale.setTo(0.7);
            youwonlabel.alpha = 0;
            this.add.tween(youwonlabel).to( { alpha: 1}, 10000, Phaser.Easing.Linear.None, true, 0, 0, false);
            
            var spacelabel = this.add.sprite(this.game.world.centerX, this.game.world.centerY+90, 'pressspace');
            spacelabel.anchor.set(0.5);
            spacelabel.scale.setTo(0.4);
            spacelabel.alpha = 0;
            this.add.tween(spacelabel).to( { alpha: 1 }, 2000, Phaser.Easing.Linear.None, true, 2000, 0, false);
            
            this.add.tween(bowser).to( { alpha: 0 }, 5000, Phaser.Easing.Linear.None, true, 0, 0, false);
            ball.kill();
            //Alles auf Anfang
            gameover=true;
            currentLevel=1;
            life = 3;
            heartdraw=0;
            score=0;
            bonuscount=0;
            bowserappeared=false;
        }else if(bowserhit<10){ // Counter für getroffenen Bowser
            bowserhit ++;
        }
    },
    
    //Funktion
    //Funktion zur Erfassung von Tastatureingaben
    mykeydownhandler:function( evt )
    {
        timeCheckCheat = this.game.time.now;
        // überspringe, falls nicht a-z
        if( evt.which < "A".charCodeAt(0) || evt.which > "Z".charCodeAt(0) )
        {
            
            return;
        }
        
        var letter = String.fromCharCode( evt.which );
        if( !evt.shiftKey ) letter = letter.toLowerCase();
        
        console.log( letter );
       
        cheat = cheat + letter;
        
        //Hier wird definiert was bei eingabe von Cheats passiert.
        switch(cheat){
            case 'givemelife': 
                                if(life<21){
                                life++;

                                this.createHearts();
                                cheat="";
                                }
                                break;
            case 'godmodeon':   godmode=true;
                                break;
            case 'godmodeoff':   godmode=false;
                                break;
                
                
            
        }
    }
    
};