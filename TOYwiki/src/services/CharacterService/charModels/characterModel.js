class Character {
    constructor({name, level=1, race='', background='', type='Unknown', image=null} = {}) {
        this.id = Date.now();
        this.type = type;
        this.name = name;
        this.level = level;
        this.atributes = {};
        this.race = race;
        this.background = background;
        this.image = image;
        this.bag = [];
        this.equipament = [];

    }
}
module.exports = Character;