
module.exports = {
    async listOddPair(request, response) {
        const list = []
        for (var i = 0; i < 100; i++) {
            list.push({ "numero": i, oddOrPair: (i % 2 == 0) ? "Odd" : "Pair" })
        }
        return response.json(list)
    }
}