



var generadores =  Array.from({length:4},(v,k)=>k+1);
var generadores2 = Array.from({length:15},(v,k)=>k+5);
var i=0;
var mw=0;
var string="";
var encender = "pares";
//var encender = "impares";
//var encender = "ambos";
var paridad='';



const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Ingrese si desea pares, impares o ambos? ', (value) => {
    paridad = value;
    console.log("Ingresaste " + paridad);
    rl.close();
    generadores3(paridad)

});


function generadores3(paridad) {

switch (paridad){
    case "pares":
        while (generadores[i]<5 ) {
            if(generadores[i]%2 == 0) {
                mw+=62;
                console.log("Generador #" + (i + 1) + " está prendido, añadiendo 62 MW para un total de " + mw + " MW.")

            }else{
                console.log("Generador #" + (i + 1) + " está apagado.")
            }
            i++;

        }i=0;


        for (i;i<generadores2.length;i++) {
            if (generadores2[i]%2 == 0) {
                mw+=124;
                console.log("Generador #" + generadores2[i] + " está prendido, añadiendo 124 MW para un total de " + mw + " MW")

            }else{
                console.log("Generador #" + generadores2[i] + " está apagado.")
            }

        }
        i=0;

        break;
    case "impares":

        while (generadores[i]<5 ) {
            if(generadores[i]%2 == 0) {
                console.log("Generador #" + (i + 1) + " está apagado.")
            }else{
                mw+=62;
                console.log("Generador #" + (i + 1) + " está prendido, añadiendo 62 MW para un total de " + mw + " MW.")
            }
            i++;

        }i=0;


        for (i;i<generadores2.length;i++) {
            if (generadores2[i]%2 == 0) {
                console.log("Generador #" + generadores2[i] + " está apagado.")

            }else{
                mw+=124;
                console.log("Generador #" + generadores2[i] + " está prendido, añadiendo 124 MW para un total de " + mw + " MW")
            }

        }
        i=0;

        break;
    case "ambos":

        while (generadores[i]<5) {
            mw+=62;
            console.log("Generador #"+ (i+1) +" está prendido, añadiendo 62 MW para un total de "+ mw +" MW")
            i++;
        }i=0;

        for (i;i<generadores2.length;i++) {
            mw+=124;
            console.log("Generador #"+ generadores2[i] +" está prendido, añadiendo 124 MW para un total de "+ mw +" MW")
        }
        i=0;


        break;
}
}