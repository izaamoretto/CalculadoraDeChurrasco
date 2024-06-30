document.getElementById('calcular').addEventListener('click', function() {
    var homens = parseInt(document.getElementById('homens').value);
    var mulheres = parseInt(document.getElementById('mulheres').value);
    var criancas = parseInt(document.getElementById('criancas').value);

    var carneBovina = 500 * homens + 300 * mulheres + 200 * criancas;
    var frango = 200 * homens + 200 * mulheres + 100 * criancas;
    var linguica = 200 * homens + 200 * mulheres + 200 * criancas;
    var refrigerante = 300 * homens + 400 * mulheres + 200 * criancas;
    var cerveja = 800 * homens + 500 * mulheres;

    var resultado = `
        <p>Quantidade de carne bovina: ${carneBovina}g</p>
        <p>Quantidade de frango: ${frango}g</p>
        <p>Quantidade de linguiça: ${linguica}g</p>
        <p>Quantidade de refrigerante: ${refrigerante}ml</p>
        <p>Quantidade de cerveja: ${cerveja}ml</p>
    `;

    document.getElementById('resultado').innerHTML = resultado;
});