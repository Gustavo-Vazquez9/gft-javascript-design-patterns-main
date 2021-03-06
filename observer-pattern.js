var bandera = 0;
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
            }else{
                subscriptor.eliminacion(autor,id);
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
        if(user.childElementCount < 3)
        {
            var noti = document.createElement('div');
            noti.className = 'notify';
            noti.id = 'notify';
            var num = document.createElement('h4');
            num.id = `text-${id}`;
            num.innerHTML = nombre;
            noti.appendChild(num);
            user.appendChild(noti);
        }else{
            var texto = document.getElementById(`text-${id}`);
            texto.innerHTML = nombre;
        }
    }
    eliminacion(nombre,id){
        var user = document.getElementById(`contusuario-${id}`);
        if(user.childElementCount == 3)
        {
            user.removeChild(user.childNodes[2]);
        }
    }

}
const observador = new Observador();
var cont=0;
var a=4;
var m=0;
const talacha = (nombre,contenedor) => {
    
    var contenedor_usuario = document.createElement('div');
    contenedor_usuario.id= `contusuario-${cont}`;
    contenedor_usuario.className= 'contusuario';
    var nombre_usuario = document.createElement('h3');
    contenedor_usuario.innerHTML=`<button onclick="Escribir(${cont})"><i class="fas fa-edit"></i></button>`;
    nombre_usuario.innerHTML= nombre;
    nombre_usuario.id=`nu-${cont}`;
    contenedor_usuario.appendChild(nombre_usuario);
    contenedor.appendChild(contenedor_usuario);
    cont++;
}
const Mostrar=()=>{
    var contenedor = document.getElementById("contactos");
        observador.subscriptores.forEach((nombre,b)=>{
            talacha(nombre.nombre, contenedor);
        });
}


const Agregar= () =>{
    var contenedor = document.getElementById("contactos");
    const nombres = document.getElementById('input-subscriptores').value;
    observador.subscribir(new Subscriptor(nombres));
    talacha(nombres, contenedor);
}

const Escribir=(identificador)=>{
    var nombre_contacto_escribir = document.getElementById(`nu-${identificador}`).innerHTML;
        nombre_contacto.innerHTML=nombre_contacto_escribir;
}


const Enviar=()=>{
    // Esto se env??a al observador 
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
    
}





const gerardo = new Subscriptor('Gerardo');
const daniela = new Subscriptor('Daniela');
const carlos = new Subscriptor('Carlos');

console.log('>>>>> Primera invitaci??n');
observador.subscribir(gerardo);
observador.subscribir(daniela);
observador.subscribir(carlos);

console.log('Subscriptores:', observador.subscriptores);
observador.notificar('Fiesta XV a??os de Yolatl');


const citlalli = new Subscriptor('Citlalli');
const nora = new Subscriptor('Nora');
console.log('>>>>> Segunda invitaci??n');
observador.subscribir(citlalli);
observador.subscribir(nora);

console.log('Subscriptores:', observador.subscriptores);
observador.notificar('Fiesta Graduaci??n');

observador.desuscribir(daniela);
console.log('>>>>> Tercera invitaci??n');
console.log('Subscriptores:', observador.subscriptores);
observador.notificar('Fin del curso Trainee');