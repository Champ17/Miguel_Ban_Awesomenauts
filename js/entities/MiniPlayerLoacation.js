game.MiniPlayerLocation = me.Entity.extend({
   init: function(x, y, settings){
       this.settings = settings;
       this.r = 5;
       this.diameter = (this.r + 2)*2;
       this.anchorPoint = new me.Vector2d(0, 0);
       this.settings.width = this.diameter;
       this.settings.height = this.diameter;
       this.settings.spritewidth = this.diameter;
       this.settings.spriteheight = this.diameter;
       this.floating = true;
   },
   
   draw: function(){
       
   },
   
   update: function(){
       
   }

});