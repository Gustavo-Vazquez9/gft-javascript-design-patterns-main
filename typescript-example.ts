interface IPerson {
    name: string;
    lastName: string;
    age?: number;
}

class Person implements IPerson {

    name: string | null;
    lastName: string | null;
    age: number;
    fullName?: string;

    constructor(person = { name: null, lastName: null, age: 0 }) {
        this.name = person.name;
        this.lastName = person.lastName;
        this.age = person.age;
        this.fullName = `${this.lastName}, ${this.name}`;
    }

}

class Address {

    state: string | null;
    city: string | null;
    town: string | null;
    street: string | null;
    postalCode: number;

    constructor(address = { state: null, city: null, town: null, street: null, postalCode: 0 }) {
        this.state = address.state;
        this.city = address.city;
        this.town = address.town;
        this.street = address.street;
        this.postalCode = address.postalCode;
    }

}

class Client {

    person: Person;
    addressC: Address;

    constructor() {
        this.person = new Person();
        this.addressC = new Address();
    }

    get client(): Person {
        return this.person;
    }

    set client(client: Person) {
        this.person = new Person(client);
    }

    set address(address: Address) {
        this.addressC = new Address(address);
    }

}

const client = new Client();
client.client = { name: '', lastName: '', age: 11 };