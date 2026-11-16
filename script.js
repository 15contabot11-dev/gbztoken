document.getElementById("formulario").addEventListener("submit", function(event) {
    event.preventDefault();

    let quantidade = Number(document.getElementById("bau").value);
    let nickname = document.getElementById("nickname").value;
    let chance = 1 / 137500;

    if (quantidade < 0 || !Number.isFinite(quantidade)) {
        document.getElementById("resultado").innerText = "Digite uma quantidade válida.";
        return;
    }

    let resultado = (1 - Math.pow(1 - chance, quantidade)) * 100;

    document.getElementById("resultado").innerHTML =
        "<strong>" + (nickname ? nickname + ", sua estimativa é:" : "Sua estimativa é:") +
        "</strong><br>" + resultado.toFixed(6).replace(".", ",") +
        "% de chance acumulada. Isso não garante que você vai conseguir o token.";
});
