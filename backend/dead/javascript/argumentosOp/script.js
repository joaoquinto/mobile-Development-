function opcionalParameters(s,d) {
    if (s === undefined && d === undefined ) {
        console.log("Por favor escreva os dois parâmetros");
    } else if(s === undefined){
        console.log(`Você precisa digitar os dois parâmetros e você só digitou um que foi ${d}`);
    }else if (d === undefined) {
        console.log(`Você precisa digitar os dois parâmetros e você só digitou um que foi ${s}`);
    }else{
        console.log(`Os dos parâmetros S e D somados são ${s + d}`);
    }
}

opcionalParameters(5,32);

// Default Arguments
function repetirFrase(frase,n =2) {
    for(let x = 1; x <= n; x++){
        console.log(frase+" "+x);
    }
}
repetirFrase("BB" );