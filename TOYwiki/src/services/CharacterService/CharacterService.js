const Player = require('./charModels/playerModel.js');
//const NPCs = require('./charModels/');
const characters =[];
function createCharacter(data){

    if (!data){
        return { error: "nome é obrigatorio"};
    }
        
    switch (data.type ){
        case 'Player':
            const character = new Player(data);
            characters.push(character);
            return character;
        default:
            return { error: "Tipo de personagem desconhecido"};
    }
}

module.exports = {
    createCharacter
};