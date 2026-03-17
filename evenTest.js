function esPar(numero) {
    return numero % 2 === 0;
}
let resultado = esPar(4);
if (resultado === true) {
    console.log("TEST PASSED");
} else {
    console.log("TEST FAILED");
}