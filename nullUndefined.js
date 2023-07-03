let valor // não inicializada.
console.log(valor)

valor = null// Ausência de valor, mais foi definida .
console.log(valor)
//console.log(valor.toString()) Vai dar erro, pois não tem como acessar algo nullo

const produto = {}
console.log(produto.preco)
console.log(produto)

produto.preco = 3.50
console.log(produto)

produto.preco = undefined // evite atribuir undefined
console.log(!!produto.preco)
// delete produto.preco
console.log(produto)

produto.preco = null // sem preco
console.log(!!produto.preco)
console.log(produto)