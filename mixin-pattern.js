/**
 * Patrón mixin:
 * Permite añadir mas funciones a una clase existente
 */

const mixinEmpleado = {

    nombreCompleto() {
        return `${this.nombre} ${this.apellidos}`;
    },
    nomina() {
        return this.salario * 30;
    }

};

class Programador {

    constructor(nombre, apellidos, salario) {
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.salario = salario;
    }

}

class Reclutador {

    constructor(nombre, apellidos, salario, edad) {
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.salario = salario;
        this.edad = edad;
    }

}

Object.assign(Programador.prototype, mixinEmpleado);
Object.assign(Reclutador.prototype, mixinEmpleado);

const programador = new Programador('Pamela', 'Chávez', 1000);
console.log(programador);
console.log(programador.nombreCompleto());
console.log(programador.nomina());


const reclutador = new Reclutador('Yolatl', 'Valadéz', 1500, 15);
console.log(reclutador);
console.log(reclutador.nombreCompleto());
console.log(reclutador.nomina());