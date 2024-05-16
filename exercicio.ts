function multiplicar(numero1: number, numero2: number) {
    return (numero1 * numero2)
}
console.log(`Resultado: ${multiplicar(2, 3)}`)

const saudacao = (nome: string): string => (`Olá me chamo ${nome}`);

console.log(saudacao('Carlos'))