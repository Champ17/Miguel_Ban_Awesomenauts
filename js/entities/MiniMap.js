game.Minimap = me.Entity.extend({
   init: function(x, y, settings){
       this._super(me.Entity, "init", [x, y, {
           image: "minimap",
           width: 272,
           height: 79,
           spritewidth: "272",
           spriteheight: "79",
        getShape: function(){
            return (new me.Rect(0, 0, 272, 79)).toPolygon();
        }
       }]);
     this.floating = true;
   } 
});