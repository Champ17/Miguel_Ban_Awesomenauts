game.HeroDeathManager = Object.extend({
    init: function(x, y, settings) {
        this.alwaysUpdate = true;
    },
    update: function() {
        if (game.data.player.dead) {
            console.log("removing");
            me.game.world.removeChild(game.data.player);
            me.game.world.removeChild(game.data.miniplayer);
            me.state.current().resetPlayer(10, 0);
        }
        return true;
    }
});