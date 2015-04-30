game.Paused = Object.extend({
init: function(x, y, settings) {
    this.now = new Date().getTime();
    this.paused = false;
    this.alwaysUpdate = true;
    this.updateWhenPaused = true;
},
        update: function() {
            this.now = new Date().getTime();
            if (me.input.isKeyPressed("paused") && this.now - this.lastBuy >= 1000) {
                this.lastBuy = this.now;
                this.pausedGame();

              if (!this.pause) {
                this.pausedGame();
            } else {
                this.stopPause();
            }
            }


            return true;

        },
        pausedGame: function() {
            this.buying = true;
            me.state.pause(me.state.PLAY);
            game.data.pausePos = me.game.viewport.localToWorld(0, 0);
            game.data.pausedscreen = new me.Sprite(game.data.pausePos.x, game.data.pausePos.y, me.loader.getImage("paused"));
            game.data.pausedscreen.updateWhenPaused = true;
            game.data.pausedscreen.setOpacity(0.8);
            me.game.world.addChild(game.data.pausedscreen, 34);
            game.data.player.body.setVelocity(0, 0);
            this.pausedText();
        },
        pausedText: function() {
            game.data.pausedtext = new (me.Renderable.extend({
                init: function() {
                    this._super(me.Renderable, "init", [game.data.pausePos.x, game.data.pausePos.y, 350, 550]);
                    this.font = new me.Font("Comic Sans MS", 26, "white");
                    this.updateWhenPaused = true;
                    this.alwaysUpdate = true;


                },
                draw: function(renderer) {
                    //this.font.draw(renderer.getContext(), "Awesomenaunts", 450, 130 );
                    this.font.draw(renderer.getContext(), "PAUSE, P TO EXIT ", this.pos.x, this.pos.y);

                },
                update: function() {
                    return true;
                }

            }));
            me.game.world.addChild(game.data.pausedtext, 35);
        },
        
        stopPause: function() {
            this.buying = false;
            me.state.resume(me.state.PLAY);
            game.data.player.body.setVelocity(game.data.playerMoveSpeed, 20);
            me.game.world.removeChild(game.data.buyscreen);
            me.game.world.removeChild(game.data.pausedtext);
        }

        });