const empresa = {
    nome: 'Rocketseat',
    cor: 'Roxo',
    foco: 'Programação',
    endereço : {
        rua: 'Rua Guilherme Gembala',
        numero: 260
    }
}
console.log(` A empresa ${empresa.nome} está localizada em ${empresa.endereço.rua}  n°${empresa.endereço.numero}`);

const usuarios = {
    nome: 'Gustavo',
    idade: 20,
    tecnologias:[
    {
        nome:'Javascript',
        especialidade:'Web'
    }]
}
console.log(`O usuário ${usuarios.nome} tem ${usuarios.idade} anos e usa a tecnologia ${usuarios.tecnologias[0].nome} com especialidade em ${usuarios.tecnologias[0].especialidade}`)