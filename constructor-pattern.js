/**
 * Patrón constructor:
 * Permite crear objetos, inicializar atributos
 */

class Trainee {

    constructor(name, lastName, age, email) {
        this.name = name || null;
        this.lastName = lastName || null;
        this.age = age || 0;
        this.email = email || null;
    }

    setName(name) {
        if (name && String(name).trim().length) {
            this.name = name;

            return this;
        } else {
            console.error('Debe ingresar un nombre');
        }
    }

    setLastName(lastName) {
        this.lastName = lastName;

        return this;
    }

    setAge(age) {
        this.age = age;

        return this;
    }

    setEmail(email) {
        this.email = email;

        return this;
    }

    setTraine(name, lastName, email, age = 20) {
        this.name = name || null;
        this.lastName = lastName || null;
        this.age = age || 0;
        this.email = email || null;
    }

    me() {
        return {
            name: this.name,
            lastName: this.lastName,
            age: this.age,
            email: this.email,
        };
    }

}

const frida = new Trainee()
    .setName('Frida')
    .setLastName('Rodríguez')
    .setAge(15)
    .setEmail('frida.rodrguez@gft.com');
console.log(frida.me());

const victor = new Trainee();
victor.name = 'Víctor';
victor.lastName = 'Izquierdo';
console.log(victor.me());

const daniela = new Trainee('Daniela', 'Lara', 15);
console.log(daniela.me());

const gerardo = new Trainee();
gerardo.setTraine('Gerardo', null, 'gerardo.martinez@gft.com');
console.log(gerardo.me());