game.spendExp = me.ScreenObject.extend({
    /**	
     *  action to perform on state change
     */
    onResetEvent: function() {
        me.game.world.addChild(new me.Sprite(0, 0, me.loader.getImage("Exp-screen")), -10); // TODO


        me.input.bindKey(me.input.KEY.F1, "F1");
        me.input.bindKey(me.input.KEY.F2, "F2");
        me.input.bindKey(me.input.KEY.F3, "F3");
        me.input.bindKey(me.input.KEY.F4, "F4");
        me.input.bindKey(me.input.KEY.F5, "F5");
        var exp1cost = ((Number(game.data.exp1) + 1) * 10);
        var exp2cost = ((Number(game.data.exp2) + 1) * 10);
        var exp3cost = ((Number(game.data.exp3) + 1) * 10);
        
        me.game.world.addChild(new (me.Renderable.extend({
            init: function() {
                this._super(me.Renderable, "init", [10, 10, 350, 550]);
                this.font = new me.Font("Arial", 26, "white");


            },
            draw: function(renderer) {
                //this.font.draw(renderer.getContext(), "Awesomenaunts", 450, 130 );
                this.font.draw(renderer.getContext(), "PRESS F1-F4 TO BUY, F5 TO SKIP", this.pos.x, this.pos.y);
                this.font.draw(renderer.getContext(), "CURRENT EXP: " + game.data.exp.toString(), this.pos.x, this.pos.y + 50);
                this.font.draw(renderer.getContext(), "F1: INCREASE GOLD PRODUCTION CURRENT LEVEL : " + game.data.exp1.toString() + " COSTS: " + exp1cost, this.pos.x, this.pos.y + 100);
                this.font.draw(renderer.getContext(), "F2: ADD STARTING GOLD  CURRENT LEVEL : " + game.data.exp2.toString() + " COST: " + exp2cost, this.pos.x, this.pos.y + 150);
                this.font.draw(renderer.getContext(), "F3: INCREASE ATTACK DAMAGE  CURRENT LEVEL: " + game.data.exp3.toString() + " COST: " + exp3cost, this.pos.x, this.pos.y + 200);
                this.font.draw(renderer.getContext(), "F4: INCREASE STARTING HEALTH ", this.pos.x, this.pos.y + 250);
            },
            update: function() {
                return true;
            }

        })));

        this.handler = me.event.subscribe(me.event.KEYDOWN, function(action, keyCode, edge) {
            if (action === "F1") {
                if (game.data.exp >= exp1cost) {
                    game.data.exp1 += 1;
                    game.data.exp -= exp1cost;
                    exp1cost = ((game.data.exp1 + 1) * 10);
                }
            } else if (action === "F2") {
                if (game.data.exp >= exp2cost) {
                    game.data.exp2 += 1;
                    game.data.exp -= exp2cost;
                    exp2cost = ((game.data.exp2 + 1) * 10);
                }
            } else if (action === "F3") {
                if (game.data.exp >= exp3cost) {
                    game.data.exp3 += 1;
                    game.data.exp -= exp3cost;
                    exp3cost = ((game.data.exp3 + 1) * 10);
                }
            } else if (action === "F4") {

            } else if (action === "F5") {
                me.state.change(me.state.PLAY);
            }
        });

    },
    /**	
     *  action to perform when leaving this screen (state change)
     */
    onDestroyEvent: function() {
        me.input.unbindKey(me.input.KEY.F1, "F1");
        me.input.unbindKey(me.input.KEY.F2, "F2");
        me.input.unbindKey(me.input.KEY.F3, "F3");
        me.input.unbindKey(me.input.KEY.F4, "F4");
        me.input.unbindKey(me.input.KEY.F5, "F5");
        me.event.unsubscribe(this.handler);
    }
});