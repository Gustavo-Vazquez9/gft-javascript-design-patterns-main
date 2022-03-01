/**
 * Patrón prototipo:
 * Permite crear objetos que pueden ser usas como modelos en objetos
 */

function Persona(name, lastName) {

    this.name = name;
    this.lastName = lastName;

};

Persona.prototype.fullName = function() {
    return `${this.name} ${this.lastName}`;
};

const persona = new Persona('Rosalba', 'Galicia');
console.log(persona);

console.log(persona.fullName());