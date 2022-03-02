class Observador {

    constructor() {
        this.subscriptores = [];
        this.subscriptoresSinAutor = [];
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
    ubicar(notificacion,autor){
        this.subscriptores.forEach(subscriptor => {
            if(subscriptor.nombre !== autor){
                subscriptor.mensaje.call(subscriptor, notificacion, autor)
            }
        });
    }
}

class Subscriptor {

    constructor(nombre) {
        this.nombre = nombre;
        console.log('Creando al subscriptor:', this.nombre);
    }

    mensaje(evento,autor) {
        console.log(`${this.nombre}, ${autor} ha enviado: ${evento}` );
    }

}
const observador = new Observador();
var cont=0;
const Mostrar=()=>{
    var contenedor = document.getElementById("contactos");
    
            observador.subscriptores.forEach((nombre,b)=>{
                var contenedor_usuario = document.createElement('div');
                    contenedor_usuario.id= 'contusuario';
                var nombre_usuario = document.createElement('h3');
                contenedor_usuario.innerHTML=`<button onclick="Escribir(${cont})">Escribir</button>`;
                nombre_usuario.innerHTML= nombre.nombre;
                nombre_usuario.id=`nu-${cont}`;
                contenedor_usuario.appendChild(nombre_usuario);
                contenedor.appendChild(contenedor_usuario);
                cont++;
            });
    
    console.log(contenedor);
}


const Agregar= () =>{
    var contenedor = document.getElementById("contactos");
    const nombres = document.getElementById('input-subscriptores').value;
    observador.subscribir(new Subscriptor(nombres));
    console.log(observador.subscriptores);
                    var contenedor_usuario = document.createElement('div');
                        contenedor_usuario.id= 'contusuario';
                    var nombre_usuario = document.createElement('h3');
                    contenedor_usuario.innerHTML=`<button onclick="Escribir(${cont})">Escribir</button>`;
                    nombre_usuario.innerHTML= nombres;
                    nombre_usuario.id=`nu-${cont}`;
                    contenedor_usuario.appendChild(nombre_usuario);
                    contenedor.appendChild(contenedor_usuario);
}

const Escribir=(identificador)=>{
    console.log('yaaa');
    var nombre_contacto_escribir = document.getElementById(`nu-${identificador}`).innerHTML;
    nombre_contacto.innerHTML=nombre_contacto_escribir;
}


const Enviar=()=>{
    var autor = document.getElementById('nombre_contacto').innerHTML;
    var mensaje = document.getElementById('mensaje').value;
    observador.ubicar(mensaje,autor);
}
















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

observador.ubicar(daniela);