console.log('Hola mundo');
var nombre = 'Dennis';
var edad = 21;
var peso = 65;
var casado = false;
var fechaNacimiento = new Date();
var noExisto = null; //soporte de papel sin papel
var noEstoyDefinido = undefined; //no existe soporte para el papel

var numNegativo = -1//true
var numNeutro = 0 //false
var numPositivo = 1//true

//para identar: cmd + a y cmd + alt + a

if (noExisto) {
    console.log('Verdadero')
} else {
    console.log('Falso');
}


if (numNegativo = true) {
    console.log('es verdadero')
}
else {
    console.log('es negativo')
}

//no hay casting porque no hay tipos de datos
//no hay herencia porque no hay clases

//Json

//los datos de una variable son objetos
var usuario = {
    "nombre": "Dennis",//clave y valor
    apellido: "Veintimilla",
    cedula: '1718973777',
    edad: 28,
    imprimir: function () {
        console.log(this.nombre+' '+ this.apellido+ ' '+ this.edad);
    }

};
console.log(usuario.nombre);
console.log(usuario); //Todo lo que está en javascript puede ser impreso
//delete usuario.edad; //para borrar un objeto
console.log(usuario);
usuario.fechaNacimiento = new Date();//añadir
console.log(usuario);
usuario.mascotas = {};
usuario.mascotas.nombre = "Leo";
console.log(usuario);

var arreglo = [1, "Dennis", true, undefined, null, new Date(), {nombre: "Dennis"}, [1, 2, 3, true]]
console.log(arreglo);

//funciones
function sumarNumeros(numeroUno, numeroDos) {
    return numeroUno + numeroDos;
}

console.log(sumarNumeros(1, 2));
console.log(sumarNumeros(1, 2.223));

//funciones anonimas

var potenciaDeDosDeUnNumero = function
    noEsNecesarioPonerElNombre(numero){
    return numero * numero;

    };

    var potenciaDeDosDeUnNumeroDos = function (numero) {
        return numero * numero;
};
    console.log(potenciaDeDosDeUnNumero(2))
console.log(potenciaDeDosDeUnNumeroDos(5))


usuario.imprimir();
