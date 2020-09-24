let cadastro = [
    {
        name: "Sotuwya",
        dataNascimento: "20/05/1999",
        cpf: "757.498.870-65"
    },
    {
        name: "Pinxoy",
        dataNascimento: "27/10/1999",
        cpf: null

    },
    {
        name: "Mofan",
        dataNascimento: "20/05/1999",
        cpf: null
    }
]

now = new Date

for (let index = 0; index < cadastro.length; index++) {
    cadastro[index].dataCadastro = now.getDate() + "/" + `${now.getMonth() + 1}` + "/" + now.getFullYear()

}
for (let index = 0; index < cadastro.length; index++) {
    const element = cadastro[index];
    if (element.cpf == null) {
        console.log(`O seu nome é ${element.name} nasceu ${element.dataNascimento} data de cadastro: ${element.dataCadastro}`);
        console.log(`Por favor ${element.name} adicione o seu CPF na próxima atualização!`);
    } else {
        console.log(`O seu nome é ${element.name} com o CPF: ${element.cpf} e nasceu ${element.dataNascimento}`);
        console.log(`Obrigado Sr(a) ${element.name} pelo o seu ingresso ao nosso cadastro! data de cadastro: ${element.dataCadastro}`);
    }
}


