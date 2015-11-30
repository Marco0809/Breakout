function LevelDrei (game)
	{
		 //Hintergrund
        land = game.add.tileSprite(0, 0, 1024, 768, 'hintergrund3');
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
        
        
        ///////////////// SIMPLE BLOCKS ////////////////////////////
        
        for (var x = 0; x < 6; x++)
                {
                for (var y = 0; y< 2; y++)
                {
                   
                     var brick;
                    brick = bricks.create(180 + (x * 120), 110 + (y * 38), 'leicht', 'leicht.png');
                    brick.scale.set(0.1);
                    brick.body.bounce.set(1);
                    brick.body.immovable = true;
                }
                }

       
        ///////////////////MIDDLE BLOCKS //////////////////
        var i = 0;
        
          
                for (var y = 0; y < 4; y++)
                {
                   
                     var brick;
                    brick = middleBricks.create((120+(y*120)), 224+(y*76), 'mittel1', 'mittel1.png');
                    brick.scale.set(0.1);
                    brick.body.bounce.set(1);
                    brick.body.immovable = true;
                    alreadyHittedBricks[i] = 0;
                    i++;
                }
            
        
        
                for (var y = 0; y < 3; y++)
                {
                   
                     var brick;
                    brick = middleBricks.create((840-(y*120)), 224+(y*76), 'mittel1', 'mittel1.png');
                    brick.scale.set(0.1);
                    brick.body.bounce.set(1);
                    brick.body.immovable = true;
                    alreadyHittedBricks[i] = 0;
                    i++;
                }
        
            for (var y = 0; y < 3; y++)
                {
                for (var x = 0; x < 3; x++)
                {
                   
                     var brick;
                    brick = middleBricks.create((540-(x*60)), 300+(y*38), 'mittel1', 'mittel1.png');
                    brick.scale.set(0.1);
                    brick.body.bounce.set(1);
                    brick.body.immovable = true;
                    alreadyHittedBricks[i] = 0;
                    i++;
                }
                }
            
        
        
            /////////////////// STRONG BLOCKS //////////////////
    
        var j=0;
         
                for (var y = 0; y < 4; y++)
                {
                    
                     var brick;
                    brick = strongBricks.create((60+(y*120)), 186+(y*76), 'schwer1', 'schwer1.png');
                    brick.scale.set(0.1);
                    brick.body.bounce.set(1);
                    brick.body.immovable = true;
                    alreadyHittedStrongBricks[j] = 0;
                    j++;
                }
            
        
        
        
                for (var y = 0; y < 4; y++)
                {
                    
                     var brick;
                    brick = strongBricks.create((900-(y*120)), 186+(y*76), 'schwer1', 'schwer1.png');
                    brick.scale.set(0.1);
                    brick.body.bounce.set(1);
                    brick.body.immovable = true;
                    alreadyHittedStrongBricks[j] = 0;
                    j++;
                }
        
        
        for (var x = 0; x < 2; x++)
                {
                for (var y = 0; y < 6; y++)
                {
                    
                     var brick;
                    brick = strongBricks.create((360+(x*240)), 110+(y*38), 'schwer1', 'schwer1.png');
                    brick.scale.set(0.1);
                    brick.body.bounce.set(1);
                    brick.body.immovable = true;
                    alreadyHittedStrongBricks[j] = 0;
                    j++;
                }
                }
        
        for (var y = 0; y< 9; y++)
                {
                   
                     var brick;
                    brick = strongBricks.create(240 + (y * 60), 72 , 'schwer1', 'schwer1.png');
                    brick.scale.set(0.1);
                    brick.body.bounce.set(1);
                    brick.body.immovable = true;
                    alreadyHittedStrongBricks[j] = 0;
                    j++;
                }
        
        for (var y = 0; y< 7; y++)
                {
                   
                     var brick;
                    brick = strongBricks.create(300 + (y * 60), 34 , 'schwer1', 'schwer1.png');
                    brick.scale.set(0.1);
                    brick.body.bounce.set(1);
                    brick.body.immovable = true;
                    alreadyHittedStrongBricks[j] = 0;
                    j++;
                }
            
                
          ///////////// IMPOSSIBLE BLOCKS /////////
        
        
        var i = 0;
       for (var x = 0; x < 3; x++)
            {
             for (var y = 0; y < 5; y++)
            {
                   
                    var brick;
                    brick = impossibleBricks.create(240+(x*240), 110+(y*38), 'unmoeglich', 'unmoeglich.png');
                    brick.scale.set(0.1);
                    brick.body.bounce.set(1);
                    brick.body.immovable = true;
                
                   
               
          }
            }
        
        
        for (var y = 0; y < 4; y++)
            {
                   
                    var brick;
                    brick = impossibleBricks.create(300+(y*120), 186, 'unmoeglich', 'unmoeglich.png');
                    brick.scale.set(0.1);
                    brick.body.bounce.set(1);
                    brick.body.immovable = true;
                
                   
               
          }
            
        

	}
    