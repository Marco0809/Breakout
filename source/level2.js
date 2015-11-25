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
                    brick = bricks.create(20 + (x * 60), 100 + (y * 60), 'leicht', 'leicht.png');
                    brick.scale.set(0.08);
                    brick.body.bounce.set(1);
                    brick.body.immovable = true;               
                }
            }
        
            for (var y = 0; y < 9; y++)
            {
                for (var x = 0; x < 2; x++)
                {
                    var brick;
                    brick = bricks.create(892 + (x * 60), 100 + (y *60), 'leicht', 'leicht.png');
                    brick.scale.set(0.08);
                    brick.body.bounce.set(1);
                    brick.body.immovable = true;
                }
            }
        
        
        
        
        var i =0;
        
        //////////// MIDDLE BLOCKS
            for (var y = 0; y < 3; y++)
            {
                for (var x = 0; x < 7; x++)
                {
                    var brick;
                    brick = middleBricks.create(335 + (x * 50), 157 + (y * 31), 'mittel1', 'mittel1.png');
                    brick.scale.set(0.08);
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
                    brick = middleBricks.create(335 + (x * 50), 281 + (y * 31), 'mittel1', 'mittel1.png');
                    brick.scale.set(0.08);
                    brick.body.bounce.set(1);
                    brick.body.immovable = true;
                    alreadyHittedBricks[i] = 0;
                    i++;
                }
            }

        
       
        
            /////////////////// STRONG BLOCKS //////////////////
        
        
            var j = 0;
             for (var y = 0; y < 20; y++)
            {
                
                    var brick;
                    brick = strongBricks.create(20+(y*50), 250, 'schwer1', 'schwer1.png');
                    brick.scale.set(0.08);
                    brick.body.bounce.set(1);
                    brick.body.immovable = true;
					alreadyHittedStrongBricks[j] = 0;
                    j++;
               
          }
        
          
             for (var y = 0; y < 7; y++)
            {
                
                    var brick;
                    brick = strongBricks.create(185+(y*50), 219-(y*31), 'schwer1', 'schwer1.png');
                    brick.scale.set(0.08);
                    brick.body.bounce.set(1);
                    brick.body.immovable = true;
                    alreadyHittedStrongBricks[j] = 0;
                    j++;
               
          }
        
     
             for (var y = 0; y < 7; y++)
            {
                
                    var brick;
                    brick = strongBricks.create(185+(y*50), 281+(y*31), 'schwer1', 'schwer1.png');
                    brick.scale.set(0.08);
                    brick.body.bounce.set(1);
                    brick.body.immovable = true;
					
               alreadyHittedStrongBricks[j] = 0;
                    j++;
          }
        
           
             for (var y = 0; y < 6; y++)
            {
                
                    var brick;
                    brick = strongBricks.create(785-(y*50), 219-(y*31), 'schwer1', 'schwer1.png');
                    brick.scale.set(0.08);
                    brick.body.bounce.set(1);
                    brick.body.immovable = true;
					alreadyHittedStrongBricks[j] = 0;
                    j++;
               
          }
        
        
             for (var y = 0; y < 6; y++)
            {
                
                    var brick;
                    brick = strongBricks.create(785-(y*50), 281+(y*31), 'schwer1', 'schwer1.png');
                    brick.scale.set(0.08);
                    brick.body.bounce.set(1);
                    brick.body.immovable = true;
					alreadyHittedStrongBricks[j] = 0;
                    j++;
               
          }
            
        
        
        
        
        
        
        
        bottom = game.add.group();
        bottom.enableBody = true;
        var bot = bottom.create(1024, 500, 'bottom', 'StufeEins.png');

	}