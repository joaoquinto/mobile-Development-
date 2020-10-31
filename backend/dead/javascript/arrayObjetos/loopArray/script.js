let cadastro = [
    {
        name: "Sotuwya",
        dataNascimento: "20/05/1999",
        cpf: "757.498.870-65"
    },
    {
        name: "Pinxoy",
        dataNascimento: "27/10/1999",
        cpf: "056.066.555-08"

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
    cadastro[index].horaCadastro = now.getHours() + ":" + now.getMinutes()
    cadastro[index].numeroCadastro = index

}

let showCadastrado = () => {
    for (let index = 0; index < cadastro.length; index++) {
        const element = cadastro[index];
        if (element.cpf == null) {
            console.log(`Nome:${element.name}\nNasceu ${element.dataNascimento}\nHora do cadastro:${element.horaCadastro} \nData de cadastro: ${element.dataCadastro} `);
            console.log(`Por favor ${element.name} adicione o seu CPF na próxima atualização!\n`);
        } else {
            console.log(`Nome:${element.name}\nCPF:${element.cpf}\nData de nascimento: ${element.dataNascimento}`);
            console.log(`Obrigado Sr(a) ${element.name} pelo o seu ingresso ao nosso cadastro!\nHora do cadastro:${element.horaCadastro}\nData de cadastro: ${element.dataCadastro}! \n`);
        }
    }
}

showCadastrado()

// Update
cadastro[2].cpf = "015.086.038-03"

//delete
delete cadastro[2].cpf
// create
cadastro[2].cpf = "111.111.111-03"
console.log("-------------------------------------------------");
showCadastrado()
