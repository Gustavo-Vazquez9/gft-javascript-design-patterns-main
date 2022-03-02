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
        this.subscriptores.forEach((subscriptor,id) => {
            if(subscriptor.nombre !== autor){
                subscriptor.mensaje.call(subscriptor, notificacion, autor);
                subscriptor.creacion(autor,id);
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
    creacion(nombre,id){
        var user = document.getElementById(`contusuario-${id}`);
        var noti = document.createElement('div');
            noti.className = 'notify';
            noti.id = 'notify';
        var num = document.createElement('h4');
        num.innerHTML = nombre;
        noti.appendChild(num);
        user.appendChild(noti);
    }

}
const observador = new Observador();
var cont=0;
const Mostrar=()=>{
    var contenedor = document.getElementById("contactos");
    
            observador.subscriptores.forEach((nombre,b)=>{
                var contenedor_usuario = document.createElement('div');
                    contenedor_usuario.id= `contusuario-${cont}`;
                    contenedor_usuario.className= 'contusuario';
                var nombre_usuario = document.createElement('h3');
                contenedor_usuario.innerHTML=`<button onclick="Escribir(${cont})">Escribir</button>`;
                nombre_usuario.innerHTML= nombre.nombre;
                nombre_usuario.id=`nu-${cont}`;
                contenedor_usuario.appendChild(nombre_usuario);
                contenedor.appendChild(contenedor_usuario);
                cont++;
            });
}


const Agregar= () =>{
    var contenedor = document.getElementById("contactos");
    const nombres = document.getElementById('input-subscriptores').value;
    observador.subscribir(new Subscriptor(nombres));
                    var contenedor_usuario = document.createElement('div');
                        contenedor_usuario.id= `contusuario-${cont}`;
                        contenedor_usuario.className= 'contusuario';
                    var nombre_usuario = document.createElement('h3');
                    contenedor_usuario.innerHTML=`<button onclick="Escribir(${cont})">Escribir</button>`;
                    nombre_usuario.innerHTML= nombres;
                    nombre_usuario.id=`nu-${cont}`;
                    contenedor_usuario.appendChild(nombre_usuario);
                    contenedor.appendChild(contenedor_usuario);
                    cont++;
}

const Escribir=(identificador)=>{
    var nombre_contacto_escribir = document.getElementById(`nu-${identificador}`).innerHTML;
    nombre_contacto.innerHTML=nombre_contacto_escribir;
}


const Enviar=()=>{
    // Esto se envía al observador 
    var autor = document.getElementById('nombre_contacto').innerHTML;
    var mensaje = document.getElementById('mensaje').value;
    observador.ubicar(mensaje,autor);

    // Esto se muestra en el index
    var abuelo = document.getElementById('chat');
    var papa = document.getElementById('papa');
    var div = document.createElement('div');
        div.className='hijo';
    var muestra_mensaje= document.createElement('h4');
        muestra_mensaje.innerHTML= autor +" : "+mensaje;
        div.appendChild(muestra_mensaje);
        papa.appendChild(div);
        abuelo.appendChild(papa);

    /*/ Se muestran las notificaciones
    var user = document.getElementById('contusuario');
    var noti = document.createElement('div');
    noti.className = 'notify';
    noti.id = 'notify';
    var num = document.createElement('h4');
    num.innerHTML = 2;

    noti.appendChild(num);
    user.appendChild(noti);*/
    
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