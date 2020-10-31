const Cachoro = {
    raca: 'SRD',
    getRaca: function () {
        return this.raca
    },
    setRaca: function (raca) {
        this.raca = raca;
    },
    uivar: function () {
        console.log("AUUUUUUUUUU");
    },
    rosnar: function () {
        console.log("grrrrr");
    }
}


Cachoro.uivar();
Cachoro.rosnar();
Cachoro.setRaca("Pug");
console.log(Cachoro.getRaca());

