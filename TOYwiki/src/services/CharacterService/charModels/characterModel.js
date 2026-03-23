class Character {
    constructor({name, level=1, race='', background='', type='Unknown', image=null} = {}, Class = '') {
        this.id = Date.now();
        this.type = type;

        this.name = name || `Character_${this.id}`;
        this.race = race || 'Unknown';
        this.Class = Class || 'Unclassified';
        this.level = parseInt(level) || 1;
        this.background = background || 'Unknown';
        this.image = image || null;
        
    }
}
module.exports = Character;