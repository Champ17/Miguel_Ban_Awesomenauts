game.GameOverScreen = me.ScreenObject.extend({
	/**	
	 *  action to perform on state change
	 */
	onResetEvent: function() {	
		me.game.world.addChild(new me.Sprite(0,0, me.loader.getImage("Death-screen")), -10); // TODO
                
                me.input.bindKey(me.input.KEY.ENTER, "start");
                
                me.game.world.addChild(new(me.Renderable.extend({
                    init: function(){
                      this._super(me.Renderable, "init", [510, 30, me.game.viewport.width, me.game.viewport.height]);  
                      this.font = new me.Font("Arial", 46, "white");  
                        
                    },
                    draw: function(renderer){
                       this.font.draw(renderer.getContext(), "Press Enter to reset", 350, 550);                                           
                    }
                })));
          this.handler = me.event.subscribe(me.event.KEYDOWN, function (action, keyCode, edge){
             if(action === "start"){
                 me.state.change(me.state.SPENDEXP);
             } 
          });
          
            me.game.world.addChild(new(me.Renderable.extend({
                    init: function(){
                      this._super(me.Renderable, "init", [480, 470, 350, 550]);  
                      this.font = new me.Font("Arial", 46, "white");
                      me.input.registerPointerEvent('pointerdown', this, this.newGame.bind(this), true);
                        
                    },
                    draw: function(renderer){
                       //this.font.draw(renderer.getContext(), "Awesomenaunts", 450, 130 );
                       this.font.draw(renderer.getContext(), "Exit", this.pos.x, this.pos.y);                                           
                    },
                    
                    update: function(dt){
                        return true;
                    },
                    
                    newGame: function(){
                        me.input.releasePointerEvent('pointerdown', this);
                        me.state.change(me.state.MENU);
                    }
                    
                })));
                
                
	},
	
	
	/**	
	 *  action to perform when leaving this screen (state change)
	 */
	onDestroyEvent: function() {
                    me.input.unbindKey(me.input.KEY.ENTER);
                    me.event.unsubscribe(this.handler); // TODO
	}
});
