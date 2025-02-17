const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());
app.get('/' , (req,res) => {
    res.json('Bem vindo a lista de exercícios! ');
});
app.post('/desconto', (req, res) => {
    const { preco } = req.body;
    let desconto = 0;
    if (preco > 1000) {
        desconto = preco * 0.08;
    }
    let precoComDesconto = preco - desconto;
    res.json({ preco, desconto, precoComDesconto });
});
//inss
app.post('/reajuste', (req, res) => {
    const {salario} = req.body;
    let reajuste = 0;
    if (salario > 1212) {
        reajuste = salario - (0.075 * salario);
        res.json({reajuste});
    }else if ( salario <= 2427.35){
        reajuste = salario - (0.09* salario);
        res.json({reajuste});
    }else if ( salario <= 3641.03){
        reajuste = salario - (0.12*salario);
        res.json({reajuste});
    } else {
        reajuste = salario - (0.14*salario);
        res.json({reajuste});
    }
 
});

app.post('/triangulo', (req, res) => {
    const { ladoA, ladoB, ladoC } = req.body;

    if (
        !ladoA || !ladoB || !ladoC ||
        typeof ladoA !== 'number' ||
        typeof ladoB !== 'number' ||
        typeof ladoC !== 'number' ||
        ladoA <= 0 || ladoB <= 0 || ladoC <= 0
    ) {
        return res.status(400).json({ error: 'Informe valores válidos e positivos para os lados do triângulo.' });
    }

    let tipoTriangulo = '';

    if (ladoA === ladoB && ladoB === ladoC) {
        tipoTriangulo = 'Equilátero: Todos os lados são iguais.';
    } else if (ladoA !== ladoB && ladoB !== ladoC && ladoA !== ladoC) {
        tipoTriangulo = 'Escaleno: Todos os lados são diferentes.';
    } else {
        tipoTriangulo = 'Isósceles: Dois lados são iguais.';
    }

    res.json({ tipoTriangulo });
});

app.listen(4000, () => {
    console.log('Servidor rodando em http://localhost:4000');
});