
module.exports = {
    async listOddPair(request, response) {
        let numeros = []
        for (let i = 1; i < 101; i++) {
            numeros.push({ "numero": i, "ParOuImpar": (i % 2) ? "Impar" : "Par" })
        }
        let resposta = {
            "exercicio": "Crie um programa que imprima uma lista de 1 a 100, dizendo se o numero é par ou impar.",
            numeros
        }
        return response.json(resposta)
    }
}