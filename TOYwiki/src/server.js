const express = require('express');
const app = express();
app.use(express.json());




const RollDiceRoute = require('./routes/rolldice.js');//importa a rota para rolar os dados
app.use('/roll', RollDiceRoute);//usa a rota para rolar os dados

app.get('/', (req, res) => {
    res.send('TOYwiki on!');
});


app.listen(3000, () => {
    console.log('TOYwiki server is running on port 3000');
});
