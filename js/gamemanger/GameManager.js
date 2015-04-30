
game.GainExpTimer = Object.extend({
    init: function(x, y, settings) {
        this.alwaysUpdate = true;
        this.gameover = false;
    },
    update: function() {
        if (game.data.win === true && !this.gameover) {
            this.gameOver(true);
        } else if (game.data.win === false && !this.gameover) {
            this.gameOver(false);
        }
    },
    gameOver: function(win) {
        if (win) {
            game.data.exp += 10;
            console.log(game.data.exp);
        } else {
            game.data.exp += 1;
        }


        this.gameover = true;
        me.save.exp = game.data.exp;

        $.ajax({
            type: "POST",
            url: "php/controller/save-user.php",
            data: {
                exp: game.data.exp,
                exp1: game.data.exp1,
                exp2: game.data.exp2,
                exp3: game.data.exp3,
                exp4: game.data.exp4
            },
            dataType: "text"
        })
                .success(function(response) {
                    if (response === "true") {
                        alert("saved!");
                    } else {
                        alert(response);
                    }
                })
                .fail(function(response) {
                    alert("Fail");
                });
                
                if(game.data.win){
                    game.data.win = '',
                    me.state.change(me.state.WINZ);
                     
                }else if(!game.data.win){
                    game.data.win = '',
                    me.state.change(me.state.GAMEOVER);
                }
                
                
    }
}); 


