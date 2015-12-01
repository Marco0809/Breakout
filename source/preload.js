Break.Preloader = function(game){};

Break.Preloader.prototype = {
    
    preload: function() {
        
        
        
    this.load.image('cursor', 'images/cursor.png');
    this.load.image('maxcursor', 'images/maxcursor.png');
    this.load.image('cursorEins', 'images/cursorPlusEins.png');
        this.load.image('cursorZwei', 'images/cursorPlusZwei.png');
        this.load.image('cursorDrei', 'images/cursorPlusDrei.png');
    this.load.image('cursor2', 'images/cursor2.png');
    this.load.image('ball', 'images/ball.png');
    this.load.image('bowser', 'images/bowser.png');
    this.load.spritesheet('bowseranim','images/bowseranim.png',655,374,3);

        //Powerups
    this.load.image('leben', 'images/leben.png');

    this.load.image('infinity','images/infinity.png');
    this.load.image('snowflake','images/snowflake.png'); 
    this.load.image('cursorplus','images/cursorplus.png');
    this.load.image('cursorminus','images/cursorminus.png'); 
        
        //Bloecke
    this.load.image('leicht', 'images/bloecke/blockleicht/leicht.png');
        
    this.load.image('mittel1', 'images/bloecke/blockmittel/mittel1.png');
    this.load.image('mittel2', 'images/bloecke/blockmittel/mittel2.png');
        
    this.load.image('schwer1', 'images/bloecke/blockschwer/schwer1.png');
    this.load.image('schwer2', 'images/bloecke/blockschwer/schwer2.png');
    this.load.image('schwer3', 'images/bloecke/blockschwer/schwer3.png');
    this.load.image('schwer4', 'images/bloecke/blockschwer/schwer4.png');
        
    this.load.image('unmoeglich', 'images/bloecke/blockunmoeglich/unmoeglich.png');
        
    this.load.image('featureblock', 'images/bloecke/featureblock.png');
    this.load.image('eiblock', 'images/bloecke/eiblock.png');
        
        this.load.image('delete', 'images/bloecke/delete.png');
    this.load.image('speichern', 'images/speichern.png');
        this.load.image('menue', 'images/menue.png');
        
        this.load.image('reset', 'images/reset.png');
    
        
        
    
        
        //Hintergruende
    this.load.image('hintergrund1','images/hintergruende/hintergrund.png');
        this.load.image('hintergrund2','images/hintergruende/hintergrund2.png');
    this.load.image('hintergrund3','images/hintergruende/hintergrund3.png');
    this.load.image('hintergrund0','images/hintergruende/startbackground.png');
        
    this.load.image('startlabel','images/labels/startlabel.png'); 
    this.load.image('soundlabel','images/labels/soundlabel.png');
        
        //Menü-Labels
    this.load.image('editorlabel','images/labels/editorlabel.png');
    this.load.image('weicheilabel','images/labels/weicheilabel.png');
    this.load.image('heldlabel','images/labels/heldlabel.png');
    this.load.image('psycholabel','images/labels/psycholabel.png');
        
    this.load.image('multilabel','images/labels/multilabel.png');
    this.load.image('botlabel','images/labels/botlabel.png');
    this.load.image('singlelabel','images/labels/singlelabel.png');
    this.load.image('zuruecklabel','images/labels/zuruecklabel.png');
        
    this.load.image('level1label','images/labels/level1label.png');
    this.load.image('level2label','images/labels/level2label.png');
    this.load.image('level3label','images/labels/level3label.png');
    this.load.image('eigenelabel','images/labels/eigenelabel.png');
        
    this.load.image('gameover','images/labels/gameover.png');    
    this.load.image('pressspace','images/labels/pressspace.png'); 
        
    this.load.image('musicofflabel','images/labels/musicofflabel.png');
    this.load.image('musiconlabel','images/labels/musiconlabel.png');
    this.load.image('soundofflabel','images/labels/soundofflabel.png');
    this.load.image('soundonlabel','images/labels/soundonlabel.png'); 
        
        //Punktlabels
        
    this.load.image('10','images/10.png');
    this.load.image('30','images/30.png');
    this.load.image('100','images/100.png');
        
    this.load.image('5hit','images/5hit.png');
    this.load.image('10hit','images/10hit.png');
    this.load.image('15hit','images/15hit.png');
        
        //Menü
    this.load.spritesheet('supermario','images/supermario.png',170,250,12);
    this.load.image('boden','images/boden.png'); 
    this.load.image('menuebutton','images/startbutton1.png');
    this.load.image('pipe','images/pipe.png');
    this.load.image('helfer','images/helfer.png');    
    

	
	// Musik
	this.load.audio('SoundLevel1', 'sounds/SoundLevel1.mp3');
	this.load.audio('HitBrickSound', 'sounds/HitBrickSound.mp3');
	this.load.audio('HitStrongBrickSound', 'sounds/HitStrongBrickSound.wav');
    this.load.audio('BowserLaugh', 'sounds/Bowser_Laugh.mp3');



    },
    
    
    create: function() {
    this.state.start('MainMenu');
    }
};