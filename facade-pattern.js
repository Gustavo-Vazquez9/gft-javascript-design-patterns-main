/**
 * Patrón fachada
 * Abstrae otras funcionalidades o clases
 */

class Persona {

    constructor() {
        this.nombre = null;
        this.apellidos = null;
        this.edad = 0;
    }

}

class Direccion {

    constructor() {
        this.estado = null;
        this.alcaldia = null;
        this.colonia = null;
        this.calle = null;
        this.codigoPostal = 0;
    }

}

class Empleo {

    constructor() {
        this.empresa = null;
        this.anios = 0;
    }

}

/* Banco */
class Cliente {

    constructor() {
        this.persona = new Persona();
        this.direccion = new Direccion();
        this.empleo = new Empleo();
    }

    getCliente() {
        return this.persona;
    }

    setCliente(nombre, apellidos, edad) {
        this.persona.nombre = nombre;
        this.persona.apellidos = apellidos;
        this.persona.edad = edad;
    }

    getDireccion() {
        return this.direccion;
    }

    getEmpleo() {
        return this.empleo;
    }

}

const cliente = new Cliente();
cliente.setCliente('Abril', 'Ocampo', 15);
console.log(cliente.getCliente());
