function LevelZwei (game)
	{
		 //Hintergrund
        land = game.add.tileSprite(0, 0, 1024, 768, 'hintergrund2');
        heartdraw=0;
		
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

        
        /////////////// SIMPLE BLOCKS /////////////////
            for (var y = 0; y < 9; y++)
            {
                for (var x = 0; x < 2; x++)
                {
                    var brick;
                    brick = bricks.create(20 + (x * 65), 100 + (y * 38), 'leicht', 'leicht.png');
                    brick.scale.set(0.1);
                    brick.body.bounce.set(1);
                    brick.body.immovable = true;               
                }
            }
        
            for (var y = 0; y < 9; y++)
            {
                for (var x = 0; x < 2; x++)
                {
                    var brick;
                    brick = bricks.create(892 + (x * 65), 100 + (y *38), 'leicht', 'leicht.png');
                    brick.scale.set(0.1);
                    brick.body.bounce.set(1);
                    brick.body.immovable = true;
                }
            }
        
            for (var x = 0; x < 3; x++)
                {
                    var brick;
                    brick = bricks.create(440 + (x * 60), 150, 'leicht', 'leicht.png');
                    brick.scale.set(0.1);
                    brick.body.bounce.set(1);
                    brick.body.immovable = true;
                }
        
        
        
        
        var i =0;
        
        //////////// MIDDLE BLOCKS
            for (var y = 2; y < 3; y++)
            {
                for (var x = 0; x < 7; x++)
                {
                    var brick;
                    brick = middleBricks.create(305 + (x * 65), 130 + (y * 38), 'mittel1', 'mittel1.png');
                    brick.scale.set(0.1);
                    brick.body.bounce.set(1);
                    brick.body.immovable = true;
                    alreadyHittedBricks[i] = 0;
                    i++;
                }
            }
        
            for (var y = 0; y < 3; y++)
            {
                for (var x = 0; x < 7; x++)
                {
                    var brick;
                    brick = middleBricks.create(305 + (x * 65), 290 + (y * 38), 'mittel1', 'mittel1.png');
                    brick.scale.set(0.1);
                    brick.body.bounce.set(1);
                    brick.body.immovable = true;
                    alreadyHittedBricks[i] = 0;
                    i++;
                }
            }

        
       
        
            /////////////////// STRONG BLOCKS //////////////////
        
        
            var j = 0;
             for (var y = 0; y < 12; y++)
            {
                
                    var brick;
                    brick = strongBricks.create(160+(y*60), 250, 'schwer1', 'schwer1.png');
                    brick.scale.set(0.1);
                    brick.body.bounce.set(1);
                    brick.body.immovable = true;
					alreadyHittedStrongBricks[j] = 0;
                    j++;
               
          }
        
            
             for (var y = 0; y < 6; y++)
            {
                
                    var brick;
                    brick = strongBricks.create(200+(y*60), 190-(y*38), 'schwer1', 'schwer1.png');
                    brick.scale.set(0.1);
                    brick.body.bounce.set(1);
                    brick.body.immovable = true;
					alreadyHittedStrongBricks[j] = 0;
                    j++;
               
          }
        
         for (var y = 0; y < 5; y++)
            {
                
                    var brick;
                    brick = strongBricks.create(800-(y*60), 190-(y*38), 'schwer1', 'schwer1.png');
                    brick.scale.set(0.1);
                    brick.body.bounce.set(1);
                    brick.body.immovable = true;
					alreadyHittedStrongBricks[j] = 0;
                    j++;
               
          }
        

	}