const Character = require('./characterModel.js');

class Player extends Character {
    constructor(data){
        super({...data, type: 'Player'});
    }
}
module.exports = Player;