const alunosDaTurmaA = [
    {
        nome: 'Gustavo',
        nota: 10.0
    },
    {
        nome: 'Marta',
        nota: 8.0
    },
    {
        nome: 'Helena',
        nota: 10.0
    },
    {
        nome: 'Aluno novo',
        nota: 7.0
    }
]
const alunosDaTurmaB = [
    {
        nome: 'Elton',
        nota: 1.0
    },
    {
        nome: 'Fabio',
        nota: 8.0
    },
    {
        nome: 'Beatriz',
        nota: 8.0
    },
    {
        nome: 'Aluno novo',
        nota: 7.0
    }
]
function calculaMedia(alunos) {
    let soma = 0

    for (let i = 0; i < alunos.length; i++) {
        soma = soma + alunos[i].nota
    }
    const media = soma / alunos.length
    return media
}

const media1 = calculaMedia(alunosDaTurmaA)
const media2 = calculaMedia(alunosDaTurmaB)


function enviaMensagem(media, turma) {
    
    if (media > 5) {
        console.log(`A media da turma ${turma} foi de ${media1}. Parabéns`)
    } else {
        console.log(`A media da turma ${turma} é menor que 5`)
    }
}

enviaMensagem(media1, 'turma A')
enviaMensagem(media2, 'turma B')

// Marcar aluno como reprovado
// se a nota for menor que 5
//e, também, enviar uma mensagem


function marcarComoReprovado(aluno){
        aluno.reprovado = false;
        if(aluno.nota < 5) {
            aluno.reprovado = true;
        }
    
}

function enviarMensagemReprovado(aluno) {
    if(aluno.reprovado){
        console.log(`o Aluno ${aluno.nome} está reprovado`)
    }
}
function alunoReprovado(alunos) {
    for(let aluno of alunos) {
        marcarComoReprovado(aluno);
        enviarMensagemReprovado(aluno);
    }
}

alunoReprovado(alunosDaTurmaA)
alunoReprovado(alunosDaTurmaB)
