function LevelDrei (game)
	{
		 //Hintergrund
        land = game.add.tileSprite(0, 0, 1024, 768, 'hintergrund3');
		
		var music = game.add.audio('SoundLevel1');
        if(musicon){
		music.play();
        }
		 //Hinzufügen der Blöcke 
        bricks = game.add.group();
        bricks.enableBody = true;
        
        middleBricks = game.add.group();
		middleBricks.enableBody = true;
        
        
		strongBricks = game.add.group();
		strongBricks.enableBody = true;
        
        impossibleBricks = game.add.group();
		impossibleBricks.enableBody = true;

       
        ///////////////////MIDDLE BLOCKS //////////////////
        var i = 0;
        for (var x = 0; x < 2; x++)
            {
                for (var y = 0; y < 10; y++)
                {
                    z= x*900;
                     var brick;
                    brick = middleBricks.create(50+z, 70+(y*31), 'mittel1', 'mittel1.png');
                    brick.scale.set(0.08);
                    brick.body.bounce.set(1);
                    brick.body.immovable = true;
                    alreadyHittedBricks[i] = 0;
                    i++;
                }
            }
        
        
        
        
       
        
            /////////////////// STRONG BLOCKS //////////////////
     
        var j=0;
          for (var x = 0; x < 3; x++)
            {
                for (var y = 0; y < 6; y++)
                {
                    z= x*31;
                     var brick;
                    brick = strongBricks.create((100+(y*50)), 70+(y*31)+z, 'schwer1', 'schwer1.png');
                    brick.scale.set(0.08);
                    brick.body.bounce.set(1);
                    brick.body.immovable = true;
                    alreadyHittedStrongBricks[j] = 0;
                    j++;
                }
            }
        
         for (var x = 0; x < 2; x++)
            {
                for (var y = 0; y < 6; y++)
                {
                    z= x*31;
                     var brick;
                    brick = strongBricks.create((20+(y*50)), 525-(y*31)-z, 'schwer1', 'schwer1.png');
                    brick.scale.set(0.08);
                    brick.body.bounce.set(1);
                    brick.body.immovable = true;
                    alreadyHittedStrongBricks[j] = 0;
                    j++;
                }
            }
        
        
        
         for (var x = 0; x < 2; x++)
            {
                for (var y = 0; y < 6; y++)
                {
                    z= x*31;
                     var brick;
                    brick = strongBricks.create((970-(y*50)), 525-(y*31)-z, 'schwer1', 'schwer1.png');
                    brick.scale.set(0.08);
                    brick.body.bounce.set(1);
                    brick.body.immovable = true;
                }
            }
        
        
        
        
          for (var x = 0; x < 3; x++)
            {
                for (var y = 0; y < 6; y++)
                {
                    z= x*31;
                     var brick;
                    brick = strongBricks.create((900-(y*50)), 70+(y*31)+z, 'schwer1', 'schwer1.png');
                    brick.scale.set(0.08);
                    brick.body.bounce.set(1);
                    brick.body.immovable = true;
                    alreadyHittedStrongBricks[j] = 0;
                    j++;
                }
            }
          
        for (var z = 0; z < 2; z++)
            {
        for (var y = 0; y < 4; y++)
            {
                for (var x = 0; x < 4; x++)
                {
                   // z=y*250;
                    var brick;
                    brick = strongBricks.create((420+(50*x)), 60+(y*31)+(z*300), 'schwer1', 'schwer1.png');
                    brick.scale.set(0.08);
                    brick.body.bounce.set(1);
                    brick.body.immovable = true;
                    alreadyHittedStrongBricks[j] = 0;
                    j++;
                }
            }
            }
        
          ///////////// IMPOSSIBLE BLOCKS /////////
        var i = 0;
        
             for (var y = 0; y < 13; y++)
            {
                   
                    var brick;
                    brick = impossibleBricks.create((170+(y*50)), 60+(y*31), 'unmoeglich', 'unmoeglich.png');
                    brick.scale.set(0.08);
                    brick.body.bounce.set(1);
                    brick.body.immovable = true;
                
                   
               
          }
        
        
        var i = 0;
        
             for (var y = 0; y < 13; y++)
            {
                   
                    var brick;
                    brick = impossibleBricks.create((170+(y*50)), 463-(y*31), 'unmoeglich', 'unmoeglich.png');
                    brick.scale.set(0.08);
                    brick.body.bounce.set(1);
                    brick.body.immovable = true;
               
          }
        
        for (var x = 0; x < 2; x++)
            {
                for (var y = 0; y < 4; y++)
                {
                    z= x*250;
                    var brick;
                    brick = impossibleBricks.create(370+z, 60+(y*31), 'unmoeglich', 'unmoeglich.png');
                    brick.scale.set(0.08);
                    brick.body.bounce.set(1);
                    brick.body.immovable = true;
                }
            }
        
        for (var x = 0; x < 2; x++)
            {
                for (var y = 0; y < 4; y++)
                {
                    z= x*660;
                    var brick;
                    brick = impossibleBricks.create(160+z, 250+(y*31), 'unmoeglich', 'unmoeglich.png');
                    brick.scale.set(0.08);
                    brick.body.bounce.set(1);
                    brick.body.immovable = true;
                }
            }
        
        
        
        
        
        
       
        
        bottom = game.add.group();
        bottom.enableBody = true;
        var bot = bottom.create(1024, 500, 'bottom', 'StufeEins.png');

	}
    