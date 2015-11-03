Break.Preloader = function(game){};

Break.Preloader.prototype = {
    
    preload: function() {
        
        
        
    this.load.image('cursor', 'images/cursor.png');
    this.load.image('ball', 'images/ball.png');
        
        //Bloecke
    this.load.image('leicht', 'images/bloecke/blockleicht/leicht.png');
    this.load.image('Schwer1', 'images/bloecke/blockschwer/StufeEins.png');
    this.load.image('Schwer2', 'images/bloecke/blockschwer/StufeZwei.png');
    this.load.image('Schwer3', 'images/bloecke/blockschwer/StufeDrei.png');
    this.load.image('Schwer4', 'images/bloecke/blockschwer/StufeVier.png');
    
        
        //Hintergruende
    this.load.image('mario1','images/hintergruende/hintergrund.png');
    this.load.image('mario0','images/hintergruende/startbackground.png');
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
        
    this.load.image('musicofflabel','images/labels/musicofflabel.png');
    this.load.image('musiconlabel','images/labels/musiconlabel.png');
    this.load.image('soundofflabel','images/labels/soundofflabel.png');
    this.load.image('soundonlabel','images/labels/soundonlabel.png'); 
        
        //Menü
    this.load.spritesheet('supermario','images/supermario.png',170,250,12);
    this.load.image('boden','images/boden.png'); 
    this.load.image('test1','images/test1.png');  
    this.load.image('test2','images/test2.png');
    this.load.image('menuebutton','images/startbutton1.png');
        
        



    },
    
    
    create: function() {
    this.state.start('MainMenu');
    }
};