const nome = 'Rebeca'
const concatenacao = 'Olá' + nome + '!'
const template = `
    Olá
    ${nome}`
console.log(concatenacao, template)

// expressões
console.log(`1 +  1 = ${1 + 1}`) // ele não calcula o da string, apenas o interpolado.

const up = texto => texto.toUpperCase() // Fazer a string ficar em CapsLook
console.log(`Ei.. ${up('cuidado')}!`)