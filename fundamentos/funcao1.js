function imprimirSoma(a, b) {
    console.log(a + b)
}
imprimirSoma(2, 3) // irá somar 
imprimirSoma(3) // NaN
imprimirSoma(2, 3, 4, 5, 6, 7, 8) // Ignora o restante
imprimirSoma()

// Função com retorno
function soma (a, b = 1){
    return a + b
}
console.log(soma(2,3))
console.log(soma(2))
