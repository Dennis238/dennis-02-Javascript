console.log("Hola mundo");
//let hola:string ='Hola'; //es una mala practica darle el tipo de variable, por que es redundante
let hola: number | string = 'Hola'; //puede ser 2 tipos de variables al mismo tiempo
const adios = 'Adios';
hola = 'Adios';
hola = 1;
//adios = 'Hola';
//Duck typing

let nombre: string = 'Dennis'
let edad: number = 28;
let casado: boolean = false;
let fechaNacimiento: Date = new Date();

class Usuario {
    public nombre: string; //por defecto es public
    private casado: boolean;
    protected edad: number;

    constructor(nombre: string, casado: boolean

    edad: number
) {
    this.nombre = nombre; //todo lo que este dentro de la clase debe tener antecedido el this.
    this.casado = casado;
    this.edad = edad;
    }//

}
let dennis: Usuario = new Usuario('Dennis', false, 21);

console.log(dennis); //imprime un jason

let fernando = {
    nombre: 'Fernando';
    casado: false;
    edad: 21;
}
console.log(fernando);

class UsuarioDos{
    constructor(public nombre:string, //se declaran los tipos de acceso directamente en el constructor
                private casado:boolean, //cuando se tenga un acceso privado o protegido se debe escribir un guion bajo antes del nombre la variable
                protected edad:number) {
    }


/*get casado(){
    return this._casado;
}
set casado(casado:boolean){
    this._casado = casado;

}
let dennisDos = new UsuarioDos('Dennis', false, 21);
console.log(dennisDos.casado);*/

imprimirUsuario(saludo:string):string{
    //Template Strings
    return `${saludo}. Mi nombre es ${this.nombre}, estoy casado ${this.casado}, mi edad es ${this.edad}`;

}}
console.log(dennis.imprimirUsuario(saludo:'Hola soy Goku'));

let carla: UsuarioTres = {
    nombre: 'Dennis',
    edad = 21};
interface UsuarioTres {
    nombre: string;
    casado?: boolean;
    edad: number;
}