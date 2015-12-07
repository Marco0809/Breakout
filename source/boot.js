var Break = {};
Break.Boot = function(game) {};
Break.Boot.prototype = {
    preload: function() {
        
    },
    create: function() {
       //Anpassung der Seitengröße
        this.scale.pageAlignHorizontally = true;
        this.scale.pageAlignVertically = true;
        //STarten des Preloaders
        this.state.start('Preloader');
    }
}