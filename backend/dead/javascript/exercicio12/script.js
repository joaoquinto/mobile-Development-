let i = 0, result;
while (i <= 10) {
    console.log(i);
    result = i % 2 == 0;
    console.log(`Esse número ${result} é par `);
    i++;
}