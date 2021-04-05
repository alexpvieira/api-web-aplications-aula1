const form_imc = document.querySelector("#imc")
const peso = document.querySelector("#peso")
const altura = document.querySelector("#altura")
const resultado = document.querySelector("#resultado")

form_imc.addEventListener("submit", function(e) {
    e.preventDefault()
    
    let imc_calculado = parseFloat(peso.value) / (parseFloat(altura.value) * 2)
    let descricao_resultado = null

    if (imc_calculado < 18.5) {
        descricao_resultado = "Magreza"
    }
    else if (imc_calculado >= 18.5 && imc_calculado < 24.9) {
        descricao_resultado = "Normal"
    }
    else if (imc_calculado >= 24.9 && imc_calculado < 30) {
        descricao_resultado = "Sobrepeso"
    }
    else {
        descricao_resultado = "Obesidade"
    }

    resultado.innerHTML = `Seu IMC é ${imc_calculado.toFixed(2)} e isso significa ${descricao_resultado}`
})