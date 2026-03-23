const Character = require('./characterModel.js');

class Player extends Character {
    constructor(data, nature, talents, skills, equipment, background, attributes, modifiers, Class, expertise){
        super({...data});
        this.nature = nature || 'Neutral';
        this.talents = talents  || [];
        this.skills = skills || [];
        this.equipment = equipment || [];
        this.attributes = attributes || {};
        this.modifiers = modifiers || {};
        this.expertise = expertise || [];

        this.healthpoints = this.calculate('healthpoints');
        this.magicpoints = this.calculate('magicpoints');
        this.resistance = this.calculate('resistance');
        this.threat = this.calculate('threat');
        this.initiative = this.calculate('initiative');
        this.HitClass = this.calculate('HitClass');

    }
}

module.exports = Player;