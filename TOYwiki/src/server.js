const express = require('express');
const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3000;

// Importa as rotas

//importa as rotas para rolar os dados
const RollDiceRoute = require('./routes/rolldice.js');
app.use('/roll', RollDiceRoute);

//importa as rotas para a criação de personagens
const CharacterRoute = require('./routes/character.js');
app.use('/character', CharacterRoute);

//
app.get('/', (req, res) => {
    res.send('TOYwiki on!');
    console.log('TOYwiki on! Running on port 3000. http://localhost:3000/');
});


//
app.listen(PORT, () => {
    console.log(`TOYwiki server is running on port ${PORT}`);
});
