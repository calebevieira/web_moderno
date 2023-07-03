const prod1 = {} // Objeto, coleção de chaves e valores, podemos ter um objeto dentro do outro como exemplo subcategorias.
prod1.nome = 'Celular Ultra Mega'
prod1.preco = 4998.90
prod1 ['Desconto Legal'] = 0.40 // Evitar atributos com espaço
 
console.log(prod1)

const prod2 = { // 
    nome: 'Camisa Polo', // Chave - identificador
    preco: 79.90,
    /*obj:{
        exemplo: 1,
        obj:{
            exemplo: 2
        }
    }*/
}
console.log(prod2)
