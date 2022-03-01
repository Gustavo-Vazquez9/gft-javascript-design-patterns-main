/**
 * Patrón módulo:
 * permite encapsular la lógica para solucionar un problema
 */

const Equipo = () => {

    const integrantes = [];

    function _agregarIntegrante(nombre) {
        integrantes.push(nombre);
    }

    function _eliminarIntegrante(nombre) {
        integrantes = integrantes.filter(integrante => integrante !== nombre);
    }

    function _mostrarEquipo() {
        return integrantes;
    }

    return {
        agregar: _agregarIntegrante,
        eliminar: _eliminarIntegrante,
        mostrar: _mostrarEquipo
    };

};

const equipo = Equipo();
equipo.agregar('Emma');
equipo.agregar('Carlos');

console.log(equipo.mostrar());



const ServicioUsuario = () => {
    const url = 'https://jsonplaceholder.typicode.com/users';

    return {
        obtieneUsuarios: async () => {
            return await fetch(new URL(url))
        },
    };

};

const usuario = ServicioUsuario();

usuario.obtieneUsuarios()
    .then((usuarios) => usuarios.json())
    .then(usuarios => console.log(usuarios));