game.NewProfile = me.ScreenObject.extend({
    /**	
     *  action to perform on state change
     */
    onResetEvent: function() {
        me.game.world.addChild(new me.Sprite(0, 0, me.loader.getImage("New-screen")), -10); // TODO
        document.getElementById("input").style.visibility = "visible";
        document.getElementById("register").style.visibility = "visible";
        me.audio.playTrack("link");

        me.input.unbindKey(me.input.KEY.B);
        me.input.unbindKey(me.input.KEY.Q);
        me.input.unbindKey(me.input.KEY.E);
        me.input.unbindKey(me.input.KEY.W);
        me.input.unbindKey(me.input.KEY.A);

        me.game.world.addChild(new (me.Renderable.extend({
            init: function() {
                this._super(me.Renderable, "init", [10, 10, 350, 550]);
                this.font = new me.Font("Arial", 26, "white");


            },
            draw: function(renderer) {
                //this.font.draw(renderer.getContext(), "Awesomenaunts", 450, 130 );
                this.font.draw(renderer.getContext(), "START YOUR NEW JOURNEY", this.pos.x, this.pos.y);  
            },
            update: function() {
                return true;
            }

        })));

    },
    /**	
     *  action to perform when leaving this screen (state change)
     */
    onDestroyEvent: function() {
        me.audio.stopTrack();
        document.getElementById("input").style.visibility = "hidden";
        document.getElementById("register").style.visibility = "hidden";
    }
});