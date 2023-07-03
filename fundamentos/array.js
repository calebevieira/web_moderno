const valores = [7.7, 8.9, 6.3, 9.2]
console.log(valores[0], valores[3])
console.log(valores[4])

valores[4]= 10 // adicionado o valor 10 para posição 4
console.log(valores)
console.log(valores.length) // irá dizer quantos elementos temos no array

valores.push({id: 3}, false, null, 'teste') // adiciona valores no array, um importante separar arrays por tipo
console.log(valores)

console.log(valores.pop()) // tira o último valor do array
delete valores[0] // retira o array da posição deejada
console.log(valores)

console.log(typeof valores)

