let cachorro = {
    patas: 4,
    nome: 'Shark',
    latir: function () {
        console.log("AU AU");
    },
    raca: (raca = "RND", nome = "não declarado", patas = cachorro.patas) => {
        if (raca == null) {
            console.log(`Teu cachorro é um ${raca} com o nome ${nome} e com ${patas} patas`);
        } else {
            console.log(` Teu cachorro é um ${raca} com o nome ${nome} e com ${patas} patas`);
        }
    }
}

/* console.log(cachorro.patas);
console.log(cachorro.nome);
cachorro.latir(); */

cachorro.raca()