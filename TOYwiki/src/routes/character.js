const express = require('express');
const router = express.Router();  

const { createCharacter } = require('../services/CharacterService/CharacterService.js');

router.get('/', (req, res) => {
    res.send('Character route is working!');
    console.log('Received request to /character');
});

router.post('/', (req, res) => {
    const result = createCharacter(req.body);

    if (!result){
        return res.status(400).json({ error: 'Dados de personagem inválidos' });
    }
    if (result.error){
        return res.status(400).json(result);
    }
    res.status(201).json(result); // Retorna o personagem criado
});

module.exports = router;