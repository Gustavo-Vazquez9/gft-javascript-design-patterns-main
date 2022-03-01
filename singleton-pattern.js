/**
 * Patrón singleton
 * Administra las instancias de una clase o función. Patrón
 * de instancia única.
 */

class Equipo {

    constructor(nombreEquipo, totalIntegrantes) {
        this.equipo = nombreEquipo;
        this.integrantes = totalIntegrantes;

        if (typeof Equipo.instancia !== 'object') {
            console.log('Creando nueva instancia');
            Equipo.instancia = this;
        }

        return Equipo.instancia;
    }

}

const equipo1 = new Equipo('Frontend', 5);
console.log(equipo1);
const equipo2 = new Equipo('Backend', 10);
console.log(equipo2);



function ConexionBaseDeDatos() {

    let instancia = null;
    let contador = 1;

    function iniciar() {
        return `Conexión a la Base de datos #${contador++}`;
    }

    function crearInstancia() {
        if (!instancia) {
            instancia = iniciar();
        }

        console.log(instancia);
        return instancia;
    }

    function cerrarConexion() {
        instancia = null;
        console.log(`Conexión cerrada`);
    }

    return {
        conectar: crearInstancia,
        cerrar: cerrarConexion,
    };

}

const conexion = ConexionBaseDeDatos();
conexion.conectar();
conexion.conectar();
conexion.conectar();
conexion.cerrar();