

//
function validate(input){
    return /^(\d+)d(\d+)([+-]\d+)?$/.test(input);
}

function rollDice(diceCount, diceSides){
    let rolls = []; let total = 0;

    for (let _ = 0; _ <diceCount; _++){
        const roll = Math.floor(Math.random() *diceSides) +1;
        rolls.push(roll); total += roll;

    }
    return { rolls, total };
}

function parse(input){

    if (!validate(input)){
        return { error: 'Invalid input format. Use XdY+Z, e.g., 2d6+3' };
    }

    const match = input.match(/^(\d+)d(\d+)([+-]\d+)?$/);// Extrai o número de dados, lados e modificador do input usando regex

    const quantity = Number(match[1]);// Converte o número de dados para um número
    const sides = Number(match[2]);// Converte o número de lados para um número
    const modifier = match[3] ? Number(match[3]) : 0;// Converte o modificador para um número, ou usa 0 se não houver modificador

    // Valida os valores de quantidade e lados
    if (quantity <= 0 || sides <= 0){
        return { error: 'Quantity and sides must be positive integers.' };
    }

    // Valida os tipos de dados suportados
    const DICES = [4, 6, 8, 10, 12, 20, 100];
    if (!DICES.includes(sides)){
        return { error: `Invalid dice type. Supported dice: ${DICES.join(', ')}.` };
    }

    const rollResult = rollDice(quantity, sides);

    return {
        roll: input,
        rolls: rollResult.rolls,
        modifier: modifier,
        total: rollResult.total + modifier,
    };
}

module.exports = parse;