const express = require('express');
const router = express.Router();


const parse = require('../services/DiceService.js');//importa a função parse para processar o input dos dados


router.get('/', (req, res) => {
    console.log('Received request to roll dice with query:', req.query);

    const input = req.query.roll;// Recebe o input da query string, por exemplo: ?input=2d6+3
    const result = parse(input)// Chama a função parse para processar o input e obter o resultado da rolagem dos dados
   
    if (result.error){
        return res.status(400).json(result);
    }
    res.json(result);
});

module.exports = router;