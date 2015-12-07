Break.Easteregg =function(game) {
   
};
    var cursor;
    var bowser;
    var timeCheck;
Break.Easteregg.prototype = {
    create: function() {
        
        
        
       

        //Diese Variable speichert die Spielzeit beim aktivieren des Eastereggs
        timeCheck = this.game.time.now;
        
         land = this.add.tileSprite(0, 0, 1024, 768, 'hintergrund1');

        //Hinzufügen des Cursors
        supermario= this.add.sprite(this.world.centerX, 643, 'supermario');
        supermario.anchor.setTo(0.5, 0.5);
        supermario.scale.set(0.5);
        
        //Bodenund Bowser werden hinzugefügt
        boden= this.add.sprite(0, 705, 'boden');
        bowser=this.add.sprite(50,10, 'bowseranim');
        bowser.animations.add('laugh', [0,1,2,1], 10, true);
        bowser.animations.play('laugh');
        bowser.scale.setTo(0.7);
        this.physics.arcade.enable(bowser);
        bowser.body.velocity.x=450;
        //Osterei wird wieder auf 0 gestellt
        eggtrigger=false;
        //Audiodatei beim erscheinen von Bowser
        var BowserLaugh = this.add.audio('BowserLaugh');
        if(soundon){
        BowserLaugh.play();
        }

        
       


       
    },
    
     update: function() {
        //Nach 3 Sekunden soll wieder das Menü aufgerufen werden
        if (this.game.time.now - timeCheck > 3000){
            this.game.state.start('MainMenu');
        }
    }
    
};