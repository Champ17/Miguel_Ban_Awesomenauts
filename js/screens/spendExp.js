game.spendExp = me.ScreenObject.extend({
	/**	
	 *  action to perform on state change
	 */
	onResetEvent: function() {	
		me.game.world.addChild(new me.Sprite(0,0, me.loader.getImage("Exp-screen")), -10); // TODO
                                
                
                me.game.world.addChild(new(me.Renderable.extend({
                    init: function(){
                      this._super(me.Renderable, "init", [320, 400, 350, 550]);  
                      this.font = new me.Font("Arial", 46, "white");
                  
                        
                    },
                    draw: function(renderer){
                       //this.font.draw(renderer.getContext(), "Awesomenaunts", 450, 130 );
                       this.font.draw(renderer.getContext(), "Spend", this.pos.x, this.pos.y);                                           
                    }                    
                    
                })));
                
	},
        
        
	
	
	/**	
	 *  action to perform when leaving this screen (state change)
	 */
	onDestroyEvent: function() {
                  
	}
});