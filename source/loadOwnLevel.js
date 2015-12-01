function ownLevel (game, myLevel)
	{
		
		 //Hintergrund
        land = game.add.tileSprite(0, 0, 1024, 768, 'hintergrund1');
		
		var music = game.add.audio('SoundLevel1');
        if(musicon){
		music.play();
        }
        
        bricks = game.add.group();
        bricks.enableBody = true;
		bricks.exists = true;
		
		middleBricks = game.add.group();
        middleBricks.enableBody = true;
		middleBricks.exists = true;
		
		strongBricks = game.add.group();
		strongBricks.enableBody = true;
		strongBricks.exists = true;
		
		impossibleBricks = game.add.group();
		impossibleBricks.enableBody = true;
		impossibleBricks.exists = true;
		
        switch(myLevel){
            case 1: var myArray = JSON.parse(localStorage["OwnLevel1"]);
                    break;
            case 2: var myArray = JSON.parse(localStorage["OwnLevel2"]);
                    break;
            case 3: var myArray = JSON.parse(localStorage["OwnLevel3"]);
                    break;
        }
		
            for (var y = 0; y < 50; y++)
            {
                for (var x = 0; x < 30; x++)
                {
					if(myArray[y][x])
					{
						switch (myArray[y][x])
						{
							case 'N':
										var brick;
										brick = bricks.create((x * 60), (y * 38), 'leicht');
										brick.scale.set(0.1);
										brick.body.bounce.set(1);
										brick.body.immovable = true;
										break;
										
							case 'M':
										var brick;
										brick = middleBricks.create((x * 60), (y * 38), 'mittel1');
										brick.scale.set(0.1);
										brick.body.bounce.set(1);
										brick.body.immovable = true;
										break;
										
							case 'S':
										var brick;
										brick = strongBricks.create((x * 60),(y * 38), 'schwer1');
										brick.scale.set(0.1);
										brick.body.bounce.set(1);
										brick.body.immovable = true;
										break;
										
							case 'I':
										var brick;
										brick = impossibleBricks.create( (x * 60), (y * 38), 'unmoeglich');
										brick.scale.set(0.1);
										brick.body.bounce.set(1);
										brick.body.immovable = true;
										break;
							default:    alert('An error attempt while creating the level');
										break;
						}
					}
                }
            }
    }
    