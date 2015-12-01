Break.Editor =function(game) {
   
};

var brick;
var middleBrick;
var strongBrick;
var brickType = '';
var bricks;
var MiddleBricks;
var StrongBricks;
var bricksArray = new Array ();
var brickTypeArray = new Array();
var line;
var land;

Break.Editor.prototype = {



create: function() {
    
	

    this.scale.pageAlignHorizontally = true;
        this.scale.pageAlignVertically = true;
		 //Hintergrund
        land = this.game.add.tileSprite(0, 0, 1024, 768, 'hintergrund1');
		
	//To be able to use the keyboard
	cursors = this.game.input.keyboard.createCursorKeys();
	bricks = this.game.add.group();
	MiddleBricks = this.game.add.group();
	StrongBricks = this.game.add.group();
	impossibleBricks = this.game.add.group();
	
	for (var j = 0; j<=50; j++)
	{
		bricksArray[j] = new Array (50);
		brickTypeArray[j] = new Array (50);
	}
	
	
	bricks.enableBody = true;

	

	MiddleBricks.enableBody = true;
	
	StrongBricks.enableBody = true;

	
	//Create Default Brick
	normalBrick = bricks.create(50, 550, 'leicht');
	normalBrick.scale.set(0.1);
	
	
	
	// CReate Default Middle Brick
	middleBrick = bricks.create(200, 550, 'mittel1');
	middleBrick.scale.set(0.1);
	
	//Create default StrongBricks
	strongBrick = bricks.create(350, 550, 'schwer1');
	strongBrick.scale.set(0.1);
   
   	//Create default impossibleBricks

	impossibleBrick = impossibleBricks.create(500, 550, 'unmoeglich');
	impossibleBrick.scale.set(0.1);
	
	deleteBrick = bricks.create(650, 550, 'delete');
	deleteBrick.scale.set(0.1);
	
	saveButton = bricks.create(900, 550, 'speichern');
	saveButton.scale.set(0.1);
    
    menueButton = bricks.create(900, 615, 'menue');
	menueButton.scale.set(0.1);
    
    resetButton = bricks.create(900, 680, 'reset');
	resetButton.scale.set(0.1);
    
    bg1Button = bricks.create(50, 650, 'hintergrund1');
	bg1Button.scale.set(0.05);
    
    bg2Button = bricks.create(200, 650, 'hintergrund2');
	bg2Button.scale.set(0.05);
    
    bg3Button = bricks.create(350, 650, 'hintergrund3');
	bg3Button.scale.set(0.05);

	line = new Phaser.Line(0, 520, 1024, 520);

	
	this.game.input.mouse.capture = true;

	
    
},

update: function(){
 
	if (this.game.input.mousePointer.isDown)
    {
	
		if(this.game.input.y > 500)
	
        {
			if ( this.game.input.x>=normalBrick.x && this.game.input.x<(normalBrick.x+60) && this.game.input.y>=normalBrick.y && this.game.input.y<(normalBrick.y+38))
			{
						brickType = 'normal';
						
			}
			else if ( this.game.input.x>=middleBrick.x && this.game.input.x<(middleBrick.x+60) && this.game.input.y>=middleBrick.y && this.game.input.y<(middleBrick.y+38))
			{
						brickType = 'middle';
			}
			
			else  if ( this.game.input.x>=strongBrick.x && this.game.input.x<(strongBrick.x+60) && this.game.input.y>=strongBrick.y && this.game.input.y<(strongBrick.y+38))
			{
						brickType = 'strong';
			}
			
			else  if ( this.game.input.x>=impossibleBrick.x && this.game.input.x<(impossibleBrick.x+60) && this.game.input.y>=impossibleBrick.y && this.game.input.y<(impossibleBrick.y+38))
			{
						brickType = 'impossible';
			}
			
			else  if ( this.game.input.x>=saveButton.x && this.game.input.x<(saveButton.x+114) && this.game.input.y>=saveButton.y && this.game.input.y<(saveButton.y+61))
			{
                        switch(choseEditedLevel){
                            case 1:     
                                localStorage["OwnLevel1"] = JSON.stringify(brickTypeArray);		
                                var myArray = JSON.parse(localStorage["OwnLevel1"]);
                                alert(myArray[1]);
                            case 2:     
                                localStorage["OwnLevel2"] = JSON.stringify(brickTypeArray);		
                                var myArray = JSON.parse(localStorage["OwnLevel2"]);
                                alert(myArray[1]);
                            case 3:     
                                localStorage["OwnLevel3"] = JSON.stringify(brickTypeArray);		
                                var myArray = JSON.parse(localStorage["OwnLevel3"]);
                                alert(myArray[1]);
                        }
						
			}
			
			
			else  if ( this.game.input.x>=deleteBrick.x && this.game.input.x<(deleteBrick.x+60) && this.game.input.y>=deleteBrick.y && this.game.input.y<(deleteBrick.y+38))
			{
				brickType = 'delete';
				
			}
            
            else  if ( this.game.input.x>=menueButton.x && this.game.input.x<(menueButton.x+114) && this.game.input.y>=menueButton.y && this.game.input.y<(menueButton.y+61))
			{
				this.game.state.start('MainMenu');
                editorstate=0;
                soundstate=0;
                startstate=0;
				
			}
            
            //if the deleteAll Button
			else  if ( this.game.input.x>=resetButton.x && this.game.input.x<(resetButton.x+114) && this.game.input.y>=resetButton.y && this.game.input.y<(resetButton.y+61))
			{
			
				for(var i = 0; i<=50; i++){
						
						for(var j = 0; j<=30; j++){
							if(   bricksArray[i][j]  != null)
							{
						
								bricksArray[i][j].kill();
								bricksArray[i][j]= null;
								brickTypeArray [i][j] = null;
							}
						}
					}
			}
            
            else  if ( this.game.input.x>=bg1Button.x && this.game.input.x<(bg1Button.x+114) && this.game.input.y>=bg1Button.y && this.game.input.y<(bg1Button.y+61))
			{
				land.loadTexture('hintergrund1',0);
				
			}
            
            else  if ( this.game.input.x>=bg2Button.x && this.game.input.x<(bg2Button.x+114) && this.game.input.y>=bg2Button.y && this.game.input.y<(bg2Button.y+61))
			{
				land.loadTexture('hintergrund2',0);
				
			}
            
            else  if ( this.game.input.x>=bg3Button.x && this.game.input.x<(bg3Button.x+114) && this.game.input.y>=bg3Button.y && this.game.input.y<(bg3Button.y+61))
			{
				land.loadTexture('hintergrund3',0);
				
			}
		}
		
		else if(this.game.input.x < 1020)
		{
	
			if(brickType == 'normal')
			{
				var posX;
				var posY;
				
				// Find the correspondant indexes in the bricksarray
				var indexY =Math.ceil(this.game.input.x/60) - 1;
				var indexX = Math.ceil(this.game.input.y/37)  -1;
				
					if(indexX>=0 &&  bricksArray[indexX][indexY]  == null)
				{
					
                    //define the correct position of th brick
                    posX = indexY * 60;
                    posY = indexX * 37;

                    var brick1;
                    brick1 = bricks.create(posX, posY, 'leicht');
                    brick1.scale.set(0.1);
                    brick1.body.bounce.set(1);
                    brick1.body.immovable = true;
                    bricksArray[indexX][indexY] = brick1;
                    brickTypeArray [indexX][indexY]  = 'N';
                }
			}
			
			else if(brickType == 'middle'){
				var posX;
				var posY;
				
				// Find the correspondant indexes in the bricksarray
				var indexY =Math.ceil(this.game.input.x/60)  - 1;
				var indexX = Math.ceil(this.game.input.y/37)  -1;
				
				
					if( indexX>=0 && bricksArray[indexX][indexY]  == null )
				{
					
                    //define the correct position of th brick
                    posX = indexY * 60;
                    posY = indexX * 37;

                    var brick2;
                    brick2 = MiddleBricks.create(posX, posY, 'mittel1');
                    brick2.scale.set(0.1);
                    brick2.body.bounce.set(1);
                    brick2.body.immovable = true;

                    bricksArray[indexX][indexY]  = brick2;
                    brickTypeArray [indexX][indexY]  = 'M';
                }
			}
			
			
			
			else if (brickType == 'strong'){
			
				
				var posX;
				var posY;
				
				// Find the correspondant indexes in the bricksarray
				var indexY =Math.ceil(this.game.input.x/60)  - 1;
				var indexX = Math.ceil(this.game.input.y/37)  -1;
				
			
					if( indexX>=0 &&  bricksArray[indexX][indexY]  == null)
				{
					
                    posX = indexY * 60;
                    posY = indexX * 37;

                    var brick3;
                    brick3 = StrongBricks.create(posX, posY, 'schwer1');
                    brick3.scale.set(0.1);
                    brick3.body.bounce.set(1);
                    brick3.body.immovable = true;
                    bricksArray[indexX][indexY]  = brick3;
                    brickTypeArray [indexX][indexY]  = 'S';
				
                }
			}
			
			else if (brickType == 'impossible'){
			
				
				var posX;
				var posY;
				
				// Find the correspondant indexes in the bricksarray
				var indexY =Math.ceil(this.game.input.x/60)  - 1;
				var indexX = Math.ceil(this.game.input.y/37)  -1;
				
			
					if( indexX>=0 &&  bricksArray[indexX][indexY]  == null)
				{
					
                    posX = indexY * 60;
                    posY = indexX * 37;

                    var brick4;
                    brick4 = StrongBricks.create(posX, posY, 'unmoeglich');
                    brick4.scale.set(0.1);
                    brick4.body.bounce.set(1);
                    brick4.body.immovable = true;
                    bricksArray[indexX][indexY]  = brick4;
                    brickTypeArray [indexX][indexY]  = 'I';
				
                }
			}
			else if (brickType == 'delete')  {
			
				
				
				// Find the correspondant indexes in the bricksarray
				var indexY =Math.ceil(this.game.input.x/60)  - 1;
				var indexX = Math.ceil(this.game.input.y/37)  -1;
				
				if( indexX>=0 &&  bricksArray[indexX][indexY]  != null)
				{
					
					//alert(' brick found IndexX = '+ indexX +' indexY = ' + indexY);
					bricksArray[indexX][indexY].kill();
                    bricksArray[indexX][indexY] = null;
					brickTypeArray [indexX][indexY] = null;
					
					
					
				
				}
				
			}
		
	
		}
    }
    
},
render: function() {

    this.game.debug.geom(line);

}
}

