const escola = "Cod3r" // C0 O1 D2 33 R4

console.log(escola.charAt(4)) // r
console.log(escola.charAt(5)) // não irá exebir nada
console.log(escola.charCodeAt(3)) // 51 valor unicode 3
console.log(escola.indexOf('3')) // 3, No caso da string "Cod3r", o caractere '3' está na posição de índice 3. Os índices das strings em JavaScript começam a partir de 0
console.log(escola.substring(1)) // ode3r, Aqui ele foi do indice 1 ao ao 4  incluindo o 1.
console.log(escola.substring(0, 3)) // Cod,  Vai do indice 0 a até o 3 sem inclluir o indice 3.