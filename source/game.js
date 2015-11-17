Break.Game =function(game) {
   
};
    var cursor;
    var cursor2;
    var ball;
    var ballreleased;
    var score = 0;
    var scoreText;
    var life = 3;
    var lifeText;
	var alreadyHittedStrongBricks = [];
    var alreadyHittedBricks = [];
	var arrayIndex = 0; // the current index of the alreadyHittedBricks array will be save here
    var arrayStrongIndex = 0; // the current index of the alreadyHittedBricks array will be save here
    var hitcount=2;
    var bowser;
    var counterHitStrong =[];

Break.Game.prototype = {
    create: function() {
        

        //Variabeln
        ballreleased=false;

       
        switch(currentLevel){
            case 1: LevelEins(this);
                break;
                case 2: LevelZwei(this);
                break;
                case 3: LevelDrei(this);
                break;
        }

        //Hinzufügen des Cursors
        
        this.createCursor1();
        if(playercount==2){
            this.createCursor2();
        }
        

        this.createBall();

       
        //Hinzufügen von Score
        scoreText = this.add.text(16, 16, 'score: 0', { fontSize: '32px', fill: '#000' });

        //Hinzufügen von Leben
        
        lifeText = this.add.text(900, 16, 'lifes: 3', { fontSize: '32px', fill: '#000'});

        //Maus aktivieren
        this.input.mouse.capture = true;


       
    },


    update: function() {
        
        //Falls Ball nicht released ist
        if(!ballreleased)
        {
            
            //Spiel Starten / linker Mausklick
            if ((this.input.activePointer.leftButton.isDown) || (this.input.keyboard.isDown(Phaser.Keyboard.SPACEBAR)) )
            {
                ball.body.allowGravity = true;
                ballreleased = true;
                ball.body.immovable = false;
                if(difficulty==1){
                ball.body.velocity.y=-450;}
                else{
                  ball.body.velocity.y=-900;  
                }
            }
            else {}
        }

        
        
        //////SPIELER 1
        if (this.input.keyboard.isDown(Phaser.Keyboard.LEFT))
        {

            cursor.x -= 20;
            if(!ballreleased){ 
            ball.x = cursor.x ;}

        }
        else if (this.input.keyboard.isDown(Phaser.Keyboard.RIGHT))
        {


            cursor.x += 20;
            if(!ballreleased){ 
            ball.x = cursor.x ;}

        }
        
        if(playercount==2) {
         //////SPIELER 2
            if (this.input.keyboard.isDown(Phaser.Keyboard.A))
            {

                cursor2.x -= 20;

            }
            else if (this.input.keyboard.isDown(Phaser.Keyboard.D))
            {


                cursor2.x += 20;

            }


        }
        
        if(ball.body.onFloor() || ball.body.touching.down)
        {
            this.ballHitBottom(ball);
        }

       
        if(strongBricks.hash.length <1 && bricks.hash.length <1 && middleBricks.hash.length<1)
        {
           
            // Call next Level 
            switch(currentLevel)
            {
                case 1:currentLevel=2;
                    this.game.state.start('Game');
                    break;

                case 2: currentLevel=3;
                    this.game.state.start('Game');
                    break;

                case 3: //You won, Return to main Menu 
                    break;
            }

          }

        this.physics.arcade.collide(ball, bricks, this.ballHitBrick, null, this);
        this.physics.arcade.collide(ball, middleBricks, this.ballHitMiddleBrick, null, this);
		this.physics.arcade.collide(ball, strongBricks, this.ballHitStrongBrick, null, this);
        
        this.physics.arcade.collide(ball, impossibleBricks);
        this.physics.arcade.collide(ball, cursor2, this.ballHitCursor, null, this);
        this.physics.arcade.collide(ball, cursor, this.ballHitCursor, null, this);
        this.physics.arcade.collide(ball, bowser);
        
        
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

    },


        ballHitBrick: function(myBall, myBrick) {

        score = score +10;
        scoreText.text = 'Score: ' + score;
        bricks.removeFromHash(myBrick);
        myBrick.kill();
            hitcount++;


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
			score = score +30;
			scoreText.text = 'Score: ' + score;
            middleBricks.removeFromHash(myBrick);
			myBrick.kill();
			BrickSound.play();
            hitcount++;
		}
			


    }, 	
    
    
    ballHitStrongBrick: function(myBall, myBrick) { //Function which handles what should happen when a Strong Brick has been hitted

		var strongBrickSound = this.add.audio('HitStrongBrickSound');
		var BrickSound = this.add.audio('HitBrickSound');
        /*
        
        switch(alreadyHittedBricks.indexOf(myBrick)) {
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

                }*/
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
                        	
                            score = score +100;
                            scoreText.text = 'Score: ' + score;
                            strongBricks.removeFromHash(myBrick);
                            myBrick.kill();
                            if(soundon){
                            BrickSound.play();
                            break;
                        
                    
                 }
               
            }
            hitcount++;
		}
			
       

    }, 	


	
    
    
    
    
    
    
    ballHitBottom: function(myBall) {

        if(life > 0)
        {

	
            life--;
            lifeText.text = 'lifes: ' + life;
            myBall.kill();
            ballreleased = false;
            this.createBall();
        }
        else
        {
            this.add.text(500, 500, 'YOU SUCK!!!', { fontSize: '32px', fill: '#000'});
            this.game.paused = true;
            
        }
    },

    createBall: function()
    {
        //Hinzufügen des Balls
        ball = this.add.sprite(cursor.x, cursor.y-32, 'ball');
        ball.anchor.set(0.5);
        ball.scale.setTo(0.025);

        this.physics.arcade.enable(ball);

        ball.body.collideWorldBounds = true;
        ball.checkWorldBounds = true;
        ball.body.bounce.set(1);
        ball.body.immovable = true;
        ball.body.allowGravity = false;
        ball.body.gravity.y = 50;
    },
    
    createCursor1: function()
    {
        
        cursor= this.add.sprite(this.world.centerX, 715, 'cursor');
        cursor.anchor.setTo(0.5, 0.5);
        this.physics.arcade.enable(cursor);
        cursor.body.immovable = true;
        cursor.body.collideWorldBounds = true;
        cursor.body.bounce.set(1);  
        
    },
    
    createCursor2: function()
    {
        
        cursor2= this.add.sprite(this.world.centerX+250, 715, 'cursor2');
        cursor2.anchor.setTo(0.5, 0.5);
        this.physics.arcade.enable(cursor2);
        cursor2.body.immovable = true;
        cursor2.body.collideWorldBounds = true;
        cursor2.body.bounce.set(1);  
        
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
        
        strongBricks.visible=false;
        strongBricks.enableBody=false;
        middleBricks.visible=false;
        middleBricks.enableBody=false;
        impossibleBricks.visible=false;
        impossibleBricks.enableBody=false;
        middleBricks.exists = false;
        strongBricks.exists = false;
        impossibleBricks.exists = false;
        
    }
    
};