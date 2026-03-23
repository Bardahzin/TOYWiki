const Player = require('./charModels/playerModel.js');
//const NPCs = require('./charModels/');

const characters =[];// Simples array para armazenar os personagens criados (pode ser substituído por um banco de dados no futuro)


function createCharacter(data){
    console.log('Creating character with data:', data.name);

    if (!data){
        return { error: "nome é obrigatorio"};
    }
        
    switch (data.type ){
        case 'Player':
            const character = new Player(data);
            characters.push(character);
            console.log('Character created');
            return characters;
        default:
            return { error: "Tipo de personagem desconhecido"};
    }
}

module.exports = {
    createCharacter
};