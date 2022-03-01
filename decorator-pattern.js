/**
 * Patrón decorador:
 * Permite añadir mas funciones a la instancia de una clase
 */

class Programador {

    constructor(nombre, apellidos) {
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.salario = 0;
    }

}

const programador = new Programador('Nora', 'Sánchez');
console.log(programador);

programador.setSalario = function(salario) {
    this.salario = salario;
};

programador.setSalario(2300);
console.log(programador);
