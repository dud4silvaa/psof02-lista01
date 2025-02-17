const titulo = document.getElementById('titulo');
fetch('http://localhost:4000/')
    .then(resp => resp.json())
    .then(resp => titulo.innerHTML = resp);

function exemplo(){
    let resultado = document.getElementById('resultado0');
    let dados = {
        preco : Number(document.getElementById('preco').value)
    }
    fetch('http://localhost:4000/desconto',
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(dados)
        })
    .then(resp => resp.json())
    .then(resp => {
        resultado.innerHTML = `Preço com desconto: R$ ${resp.precoComDesconto.toFixed(2)}`;
    });
}


function calcularINSS() {
    let salario = Number(document.getElementById('salario').value);
    fetch('http://localhost:4000/inss', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ salario })
    })
    .then(resp => resp.json())
    .then(resp => {
        document.getElementById('resultadoINSS').innerHTML = `Desconto: R$ ${resp.desconto.toFixed(2)}, Salário Final: R$ ${resp.salarioFinal.toFixed(2)}`;
    });
}


function verificarTriangulo() {
    let a = Number(document.getElementById('ladoA').value);
    let b = Number(document.getElementById('ladoB').value);
    let c = Number(document.getElementById('ladoC').value);
    fetch('http://localhost:4000/triangulo', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ a, b, c })
    })
    .then(resp => resp.json())
    .then(resp => {
        document.getElementById('resultadoTriangulo').innerHTML = `Tipo: ${resp.tipo}`;
    });
}


function ajustarPreco() {
    let nome = document.getElementById('nomeMercadoria').value;
    let preco = Number(document.getElementById('precoMercadoria').value);
    fetch('http://localhost:4000/mercadoria', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ nome, preco })
    })
    .then(resp => resp.json())
    .then(resp => {
        document.getElementById('resultadoMercadoria').innerHTML = `Nome: ${resp.nome}, Novo Preço: R$ ${resp.novoPreco.toFixed(2)}`;
    });
}


function encontrarMaiorNumero() {
    let numeros = Array.from(document.querySelectorAll('.numero')).map(input => Number(input.value));
    fetch('http://localhost:4000/maior-numero', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ numeros })
    })
    .then(resp => resp.json())
    .then(resp => {
        document.getElementById('resultadoMaiorNumero').innerHTML = `Maior Número: ${resp.maiorNumero}`;
    });
}


function ordenarNumeros() {
    let numeros = Array.from(document.querySelectorAll('.numeroOrdenar')).map(input => Number(input.value));
    fetch('http://localhost:4000/ordenar-numeros', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ numeros })
    })
    .then(resp => resp.json())
    .then(resp => {
        document.getElementById('resultadoOrdenarNumeros').innerHTML = `Números Ordenados: ${resp.numerosOrdenados.join(', ')}`;
    });
}


function determinarMaiorMenor() {
    let num1 = Number(document.getElementById('num1').value);
    let num2 = Number(document.getElementById('num2').value);
    fetch('http://localhost:4000/maior-menor', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ num1, num2 })
    })
    .then(resp => resp.json())
    .then(resp => {
        document.getElementById('resultadoMaiorMenor').innerHTML = `Maior: ${resp.maior}, Menor: ${resp.menor}`;
    });
}


function reajustarSalario() {
    let salarioAtual = Number(document.getElementById('salarioAtual').value);
    fetch('http://localhost:4000/reajuste-salarial', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ salarioAtual })
    })
    .then(resp => resp.json())
    .then(resp => {
        document.getElementById('resultadoReajuste').innerHTML = `Novo Salário: R$ ${resp.novoSalario.toFixed(2)}`;
    });
}


function calcularMedia() {
    let notas = Array.from(document.querySelectorAll('.nota')).map(input => Number(input.value));
    fetch('http://localhost:4000/media-notas', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ notas })
    })
    .then(resp => resp.json())
    .then(resp => {
        document.getElementById('resultadoMedia').innerHTML = `Média: ${resp.media.toFixed(2)}, Situação: ${resp.situacao}`;
    });
}

function calcularDescontoLoja() {
    let peca = document.getElementById('peca').value;
    let preco = Number(document.getElementById('precoPeca').value);
    fetch('http://localhost:4000/desconto-loja', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ peca, preco })
    })
    .then(resp => resp.json())
    .then(resp => {
        document.getElementById('resultadoDescontoLoja').innerHTML = `Desconto: R$ ${resp.desconto.toFixed(2)}, Preço Final: R$ ${resp.precoFinal.toFixed(2)}`;
    });
}