class Observador {

    subscriptores

    constructor() {
        this.subscriptores = [];
    }

    subscribir(subscriptor) {
        this.subscriptores.push(subscriptor);
    }

    desuscribir(subscriptor) {
        this.subscriptores = this.subscriptores.filter(s => s !== subscriptor);
    }

    notificar(evento) {
        this.subscriptores.forEach(subscriptor => subscriptor.mensaje.call(subscriptor, evento));
    }
}

class Subscriptor {

    constructor(nombre) {
        this.nombre = nombre;
        console.log('Creando al subscriptor:', this.nombre);
    }

    mensaje(evento) {
        console.log(`El subscriptor ${this.nombre} ha sido invitado al evento: ${evento}`);
    }

}


const observador = new Observador();

const gerardo = new Subscriptor('Gerardo');
const daniela = new Subscriptor('Daniela');
const carlos = new Subscriptor('Carlos');

console.log('>>>>> Primera invitación');
observador.subscribir(gerardo);
observador.subscribir(daniela);
observador.subscribir(carlos);

console.log('Subscriptores:', observador.subscriptores);
observador.notificar('Fiesta XV años de Yolatl');


const citlalli = new Subscriptor('Citlalli');
const nora = new Subscriptor('Nora');
console.log('>>>>> Segunda invitación');
observador.subscribir(citlalli);
observador.subscribir(nora);

console.log('Subscriptores:', observador.subscriptores);
observador.notificar('Fiesta Graduación');

observador.desuscribir(daniela);
console.log('>>>>> Tercera invitación');
console.log('Subscriptores:', observador.subscriptores);
observador.notificar('Fin del curso Trainee');
