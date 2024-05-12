const alunos = []

const alunos2 = alunos.map(function (nome, nota) {
    return {
        nome: nome,
        nota: nota
    }
})

alunos.push({
    nome: 'Paulo',
    nota: 7
})

alunos.push({
    nome: 'José',
    nota: 3
})

alunos.push({
    nome: 'Maria',
    nota: 10
})

alunos.push({
    nome: 'Julia',
    nota: 6
})

alunos.push({
    nome: 'Diego',
    nota: 5
})

const filtraAlunos = (aluno) => 6 <= aluno.nota;

const aprovadoOuNao = alunos.filter(filtraAlunos);

console.log(aprovadoOuNao)