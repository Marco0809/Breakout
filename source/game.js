Break.Game =function(game) {
   
};
    var cursor;
    var cursor2;
    var ball;
    var ballreleased;
    var powerup=[];
    var indexPowerArray = 0;
    var lifepowerup=[];
    var indexLifepowerArray = 0;
    var scoreText;
    var lifeText;
	var alreadyHittedStrongBricks = [];
    var alreadyHittedBricks = [];
	var arrayIndex = 0; // the current index of the alreadyHittedBricks array will be save here
    var arrayStrongIndex = 0; // the current index of the alreadyHittedBricks array will be save here
    var bowser;
    var bowserappeared=false;
    var bowserhit;
    var counterHitStrong =[];
    var heartcounter=[];
    var powerupsalife=0;
    var lifepowerupsalife=0;
    var gameover=false;
    var cursorspeed=20;
    var timeCheckFlake;
    var timeCheckInfinity;
    var cursorsize=1;
    var freezescreen;
    var fullbonus=false;
    var cheat ="";
    var timeCheckCheat;
    var godmode=false;
    var cursorsize2 =1;
    var botmultiplier=0;
    var newCursorX;
    var timeCheckBot;
   
    
   

    

Break.Game.prototype = {
    create: function() {
        

        //Variabeln
        ballreleased=false;
        gameover=false;
        

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
        
        this.game.input.keyboard.addCallbacks( this, this.mykeydownhandler );
        
        if(playercount ==0 && !ballreleased){
            
            this.game.time.events.add(1000, this.releaseBall, this);
             
            
          
        }
        

       
    },


    update: function() {
       
        //Falls Ball nicht released ist
        
            
            //Spiel Starten / linker Mausklick
            if ((this.input.activePointer.leftButton.isDown) || (this.input.keyboard.isDown(Phaser.Keyboard.SPACEBAR)) )
            {
                if(!gameover && !ballreleased){
                    this.releaseBall();
                }
                else if(gameover){
                    
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
            ///////////////////////////////BANANE///////////////////////////////////////////////////////////////////////////
            else
            {
                if (this.input.mousePointer.isDown)
                {
                    var xMovePosition = this.input.x;
                    var yMovePosition = cursor.y ;  
                    var cursorVelocity = 700;
                     cursor.body.bounce.set(100);  
                    this.physics.arcade.moveToXY(cursor, xMovePosition, yMovePosition, cursorVelocity);
                }
                else
                {
                     var xMovePosition = cursor.x;
                    var yMovePosition = cursor.y ;
                     var cursorVelocity = 0;
               
                    this.physics.arcade.moveToXY(cursor, xMovePosition, yMovePosition, cursorVelocity);
                }
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
        if(strongBricks.hash.length <1 && bricks.hash.length <1 && middleBricks.hash.length<1 && featurebricks.hash.length<1 && eggbricks.hash.length<1)
        {
           
            // Call next Level 
            switch(currentLevel)
            {
                case 1:currentLevel=2;
                    cursorsize=1;
                    this.game.state.start('Game');
                    break;

                case 2: currentLevel=3;
                    cursorsize=1;
                    this.game.state.start('Game');
                    break;

                case 3: 
                    if(!bowserappeared && !gameover){
                        this.createBowser();
                    }
                    break;
            }

          }
        
        if ((2980<= (this.game.time.now - timeCheckCheat)) && ((this.game.time.now - timeCheckCheat) <= 3200)){
             
             
            cheat="";
           
        }
        
        

        this.physics.arcade.collide(ball, bricks, this.ballHitBrick, null, this);
        this.physics.arcade.collide(ball, middleBricks, this.ballHitMiddleBrick, null, this);
		this.physics.arcade.collide(ball, strongBricks, this.ballHitStrongBrick, null, this);
        this.physics.arcade.collide(ball, impossibleBricks);
        this.physics.arcade.collide(ball, featurebricks, this.ballHitFeatureBlock, null, this);
        this.physics.arcade.collide(ball, eggbricks, this.ballHitEggBlock, null, this);
        this.physics.arcade.collide(ball, cursor2, this.ballHitCursor, null, this);
        this.physics.arcade.collide(ball, cursor, this.ballHitCursor, null, this);
        this.physics.arcade.collide(ball, bowser, this.ballHitBowser, null, this);
        for(var i=0; i<=powerupsalife; i++){
        this.physics.arcade.collide(powerup[indexPowerArray-i], cursor, this.powerupHitCursor, null, this);
        }
        
        for(var k=0; k<=lifepowerupsalife; k++){
        this.physics.arcade.collide(lifepowerup[indexLifepowerArray-k], cursor, this.powerupHitCursor, null, this);   
        }
        
        
        
    },
    

    
    timesUpInfinity: function()
    {
        
            var tempX = cursor.x;
            var tempY = cursor.y;
            cursor.kill();
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
    
    timesUpFlake: function()
    {
        
            freezescreen.visible=false;
            cursorspeed=20;
    },

    ballHitCursor: function(myBall, myCursor) {

        var diff = 0;

        if (myBall.x < myCursor.x)
        {
            //  Ball is on the left-hand side of the paddle
            diff = myCursor.x - myBall.x;
            myBall.body.velocity.x = (-8 * diff);
        }
        else if (myBall.x > myCursor.x)
        {
            //  Ball is on the right-hand side of the paddle
            diff = myBall.x - myCursor.x;
            myBall.body.velocity.x = (8 * diff);
        }
        else
        {
            //  Ball is perfectly in the middle
            myBall.body.velocity.x = 2 + Math.random() * 8;
        }
        
        //bonuscount=0;
        //fullbonus=false;
        if(playercount==0){
       this.game.time.events.add(1500, this.updateBotMultiplier, this);
        }

    },
    
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

    powerupHitCursor:function(myPowerup, myCursor){
        
        
        myPowerup.kill();
        
        
       
        switch(myPowerup.frameName){
            case 'images/infinity.png': 
                var tempX = cursor.x;
                var tempY = cursor.y;
                cursor.kill();
                this.createCursor1('maxcursor', tempX, tempY);
                
                //timeCheckInfinity = this.game.time.now;
                powerupsalife--;
                this.game.time.events.add(5000, this.timesUpInfinity, this);
        
                break;
            case 'images/snowflake.png': 
                 
                cursorspeed=5;
                freezescreen.visible=true;
                //timeCheckFlake = this.game.time.now;
                powerupsalife--;
                 this.game.time.events.add(5000, this.timesUpFlake, this);
        
                break;
            case 'images/leben.png': if(life<21){
                life++;
                 lifepowerupsalife--;               
                this.createHearts();
            }
                break;
            case 'images/cursorplus.png': 
                if(cursorsize>0 && cursorsize<4){
                    cursorsize++;
                }
               
                var tempX = cursor.x;
                var tempY = cursor.y;
                cursor.kill();
                powerupsalife--;
                switch(cursorsize){
                    case 2: this.createCursor1('cursorEins', tempX, tempY);
                       
                            break;
                    case 3: this.createCursor1('cursorZwei', tempX, tempY);
                            break;
                    case 4: this.createCursor1('cursorDrei', tempX, tempY);
                            break;
                }
                 
                break;
            case 'images/cursorminus.png': 
                if(cursorsize>1 && cursorsize<5){
                    cursorsize--;
                }
                var tempX = cursor.x;
                var tempY = cursor.y;
                cursor.kill();
                
                powerupsalife--;
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
    
     createFeatureBlock: function(brickX, brickY)
    {
        var rndd = this.game.rnd.integerInRange(1, 1);
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
    
     createPowerup: function(brickX, brickY)
    {
    

        var rnd = this.game.rnd.integerInRange(1, 4);
        switch(rnd){
            case 1: powerup[indexPowerArray]= this.add.sprite(brickX, brickY, 'infinity');
                    powerup[indexPowerArray].scale.setTo(0.1);
                    this.physics.arcade.enable(powerup[indexPowerArray]);
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
                    powerup[indexPowerArray].body.velocity.y= 450;
                    powerupsalife++;
                    indexPowerArray++;  
                    break;
                
            case 4: powerup[indexPowerArray]= this.add.sprite(brickX, brickY, 'cursorminus');
                    powerup[indexPowerArray].scale.setTo(0.2);
                    this.physics.arcade.enable(powerup[indexPowerArray]);
                    powerup[indexPowerArray].body.velocity.y= 450;
                    powerupsalife++;
                    indexPowerArray++;  
                    break;
            
        }
        
        
                
        
        
    },
    
    createEgglife: function(brickX, brickY)
    {
                    if(life<21){
                    lifepowerup[indexLifepowerArray]= this.add.sprite(brickX, brickY, 'leben');
                    lifepowerup[indexLifepowerArray].scale.setTo(0.05);
                    this.physics.arcade.enable(lifepowerup[indexLifepowerArray]);
                    lifepowerup[indexLifepowerArray].body.velocity.y= 450;
                    lifepowerupsalife++;
                    indexLifepowerArray++;
                    }
        
    },
    
    ballHitFeatureBlock: function(myBall, myFBrick) {
        featurebricks.removeFromHash(myFBrick);
        myFBrick.kill();
        this.createPowerup( myFBrick.x, myFBrick.y);
    },
    
    ballHitEggBlock: function(myBall, myEBrick) {
        eggbricks.removeFromHash(myEBrick);
        myEBrick.kill();
        this.createEgglife( myEBrick.x, myEBrick.y);
    },
        
    ballHitBrick: function(myBall, myBrick) {
        var points = 10;
        score = score +points;
        this.createFadeScore( myBrick.x, myBrick.y, points);
        scoreText.text = score;
        bricks.removeFromHash(myBrick);
        myBrick.kill();
        bonuscount++;
        
        this.createFadeBonus();
        
        
        this.createFeatureBlock( myBrick.x, myBrick.y);
        
            

    }, 

	
	ballHitMiddleBrick: function(myBall, myBrick) { //Function which handles what should happen when a Strong Brick has been hitted

		var middleBrickSound = this.add.audio('HitStrongBrickSound');
		var BrickSound = this.add.audio('HitBrickSound');
		if(alreadyHittedBricks.indexOf(myBrick) == -1){//Check if the Brick was already hitted once
			
			alreadyHittedBricks[arrayIndex] = myBrick;
			arrayIndex ++;
			myBrick.loadTexture('mittel2',0);
			
            if(soundon){
			middleBrickSound.play();
            }
		}
        
		else{
            var points = 30;
            score = score +points;
            this.createFadeScore( myBrick.x, myBrick.y, points);
			
			scoreText.text = score;
            middleBricks.removeFromHash(myBrick);
			myBrick.kill();
			BrickSound.play();
            bonuscount++;
            this.createFadeBonus();
            
            
            this.createFeatureBlock( myBrick.x, myBrick.y);
            
		}
			


    }, 	
    
    
    ballHitStrongBrick: function(myBall, myBrick) { //Function which handles what should happen when a Strong Brick has been hitted

		var strongBrickSound = this.add.audio('HitStrongBrickSound');
		var BrickSound = this.add.audio('HitBrickSound');
       
		if(alreadyHittedStrongBricks.indexOf(myBrick) == -1){//Check if the Brick was already hitted once
			
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
                
                    case 1: counterHitStrong[alreadyHittedStrongBricks.indexOf(myBrick)]++;
                        	myBrick.loadTexture('schwer3',0);
                            if(soundon){
                                    strongBrickSound.play();
                            }
                            break;
                        
                          case 2: counterHitStrong[alreadyHittedStrongBricks.indexOf(myBrick)]++;
                        	myBrick.loadTexture('schwer4',0);
                            if(soundon){
                                    strongBrickSound.play();
                            }
                            break;
                        
                          case 3: counterHitStrong[alreadyHittedStrongBricks.indexOf(myBrick)]++;
                        	
                            var points = 100;
                            score = score +points;
                            scoreText.text = score;
                            this.createFadeScore( myBrick.x, myBrick.y, points);
                           
                            strongBricks.removeFromHash(myBrick);
                            myBrick.kill();
                            if(soundon){
                            BrickSound.play();
                           
                            
                            this.createFeatureBlock( myBrick.x, myBrick.y);
                            bonuscount++;
                            this.createFadeBonus();
                            break;
                        
                    
                 }
               
            }
            
		}
			
       

    }, 	


    
    ballHitBottom: function(myBall, leben) {

        if((life != 0)&&(!gameover))
        {

	
            life--;
            heartdraw--;
            myBall.kill();
            ballreleased = false;
            this.createBall();
            heartcounter[life].kill();
            bonuscount=0;
            fullbonus=false;
            
             if(playercount ==0 && !ballreleased){
            
            this.game.time.events.add(1000, this.releaseBall, this);
             
            
          
        }
            
           
        
        }
        else
        {
            var gameoverlabel = this.add.sprite(this.game.world.centerX, this.game.world.centerY, 'gameover');
            gameoverlabel.anchor.set(0.5);
            gameoverlabel.scale.setTo(0.7);
            gameoverlabel.alpha = 0;
            this.add.tween(gameoverlabel).to( { alpha: 1}, 10000, Phaser.Easing.Linear.None, true, 0, 0, false);
            
            var spacelabel = this.add.sprite(this.game.world.centerX, this.game.world.centerY+90, 'pressspace');
            spacelabel.anchor.set(0.5);
            spacelabel.scale.setTo(0.4);
            spacelabel.alpha = 0;
            this.add.tween(spacelabel).to( { alpha: 1 }, 2000, Phaser.Easing.Linear.None, true, 2000, 0, false);
            
            ball.kill();
            gameover=true;
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

    createBall: function()
        {
        //Hinzufügen des Balls
        ball = this.add.sprite(cursor.x, cursor.y-32, 'ball');
        ball.anchor.set(0.5);
        ball.scale.setTo(0.025);

        this.physics.arcade.enable(ball);
        ball.body.angularVelocity = 0;
        ball.body.collideWorldBounds = true;
        ball.checkWorldBounds = true;
        ball.body.bounce.set(1);
        ball.body.immovable = true;
        ball.body.allowGravity = false;
        ball.body.gravity.y = 50;
        ball.body.angle.enable =true;
        ball.body.allowRotation=true;
    },
    
    createCursor1: function(cursorFrame, x, y)
    {
        
        cursor= this.add.sprite(x, y, cursorFrame);
        cursor.anchor.setTo(0.5, 0.5);
        this.physics.arcade.enable(cursor);
        cursor.body.immovable = true;
        cursor.body.collideWorldBounds = true;
        cursor.body.bounce.set(1);  
        
        
    },
    
    createHearts: function()
    {
        for (heartdraw ; heartdraw < life; heartdraw++)
            {
                    var  leben= this.add.sprite(16+(42*heartdraw), 16, 'leben');
                    leben.scale.setTo(0.05);
                    heartcounter[heartdraw]= leben;
                
            }
    },
    
    createCursor2: function(cursorFrame, x, y)
    {
        
        cursor2= this.add.sprite(x, y, 'cursor2');
        cursor2.anchor.setTo(0.5, 0.5);
        this.physics.arcade.enable(cursor2);
        cursor2.body.immovable = true;
        cursor2.body.collideWorldBounds = true;
        cursor2.body.bounce.set(1);  
        
    },
    
    createFadeScore: function(imageX, imageY, score)
    {
        switch(score)
        {
            case 10:    var scoreimg = this.add.sprite(imageX+10, imageY-15, '10');
                        break;
            case 30:    var scoreimg = this.add.sprite(imageX+5, imageY-15, '30');
                        break;
            case 100:   var scoreimg = this.add.sprite(imageX+5, imageY-15, '100');
                        break;
        }


        scoreimg.scale.setTo(0.05);
        this.add.tween(scoreimg).to( { alpha: 0 }, 1500, Phaser.Easing.Linear.None, true, 0, 0, false);
        this.physics.arcade.enable(scoreimg);
        scoreimg.body.velocity.y = -100;
    },
    
     createFadeBonus: function()
    {
        // Helfer um zu verhindern, dass die Eigenschaften des Bildes auch abgerufen werden, wenn es kein Bild gibt
        var helfer = false;
                            
        switch(bonuscount)
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
    
    updateBotMultiplier:function(){
            botmultiplier = this.game.rnd.integerInRange(-85, 85);
             
    },
    
    ballHitBowser: function(){
        
        if(bowserhit==10){
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
            gameover=true;
            currentLevel=1;
            life = 3;
            heartdraw=0;
            score=0;
            bonuscount=0;
            bowserappeared=false;
        }else if(bowserhit<10){
            bowserhit ++;
            bowser.alpha=10;
        }
    },
    
    mykeydownhandler:function( evt )
    {
        timeCheckCheat = this.game.time.now;
        // Skip it unless it's a-z.
        if( evt.which < "A".charCodeAt(0) || evt.which > "Z".charCodeAt(0) )
        {
            
            return;
        }
        
        var letter = String.fromCharCode( evt.which );
        if( !evt.shiftKey ) letter = letter.toLowerCase();
        
        console.log( letter );
       
        cheat = cheat + letter;
        
        
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