
module.exports = {
    async listOddPair(request, response) {
        const list = []
        for (var i = 1; i < 101; i++) {
            list.push({ "numero": i, oddOrPair: (i % 2 == 0) ? "Par" : "Impar" })
        }
        resposta = {
            "Exércicio": "Crie um programa que imprima uma lista de 1 a 100, dizendo se o numero é par ou impar.",
            list
        }
        return response.json(resposta)
    }
}