Break.Preloader = function(game){};

Break.Preloader.prototype = {
    
    preload: function() {
        
        
        
    this.load.image('cursor', 'images/cursor.png');
    this.load.image('leicht', 'images/bloecke/blockleicht/leicht.png');
    this.load.image('Schwer1', 'images/bloecke/blockschwer/StufeEins.png');
    this.load.image('Schwer2', 'images/bloecke/blockschwer/StufeZwei.png');
    this.load.image('Schwer3', 'images/bloecke/blockschwer/StufeDrei.png');
    this.load.image('Schwer4', 'images/bloecke/blockschwer/StufeVier.png');
    this.load.image('ball', 'images/ball.png');
    this.load.image('mario1','images/hintergrund.png');
    this.load.image('mario0','images/startbackground.png');
    this.load.image('startfont','images/startfont.png'); 
    this.load.image('soundfont','images/soundfont.png');
        this.load.image('editorfont','images/editorfont.png');
    this.load.image('weicheifont','images/weicheifont.png');
        this.load.image('heldfont','images/heldfont.png');
        this.load.image('psychofont','images/psychofont.png');  
    this.load.image('supermario','images/supermario.png');  
    this.load.image('boden','images/boden.png'); 
    this.load.image('test1','images/test1.png');  
    this.load.image('test2','images/test2.png');
    this.load.image('menuebutton','images/startbutton1.png');




    },
    
    
    create: function() {
    this.state.start('MainMenu');
    }
};