var sexo = "Masculino";
var idade = 20;
var ternario = (sexo == "Masculino" || sexo == "Feminino" ? `O sexo é: ${sexo}` : "Você não se enquadra nisso kisses s2" );

var ternario01 = (sexo == "Masculino" && idade == 20 ? `O gênero é ${sexo} e a idade é ${idade}  e você está no enquadramento` : " O seu gênero e a sua idade não se enquadram");

var ternario02 = (sexo != "Masculino" && idade == 20 ?  ` O gênero ${sexo} está correto` : "troque seu gênero seu porra" )

console.log(ternario);
console.log(ternario01);
console.log(ternario02);