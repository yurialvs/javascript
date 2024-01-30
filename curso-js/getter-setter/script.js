class Person{
    
    // Variáveis comuns
    _money = 10;

    // Construtor
    constructor(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }

    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }

    get money() {
        return this._money;
    }

    set money(x) {
        if(typeof x == "number") {
            this._money = x;
        }
    }
}

// Instância
let p1 = new Person("João", "Silva");
let p2 = new Person("Maria", "Alves");
let p3 = new Person("Pedro", "Duarte");

p1.money = 30;
console.log(`${p1.fullName} tem ${p1.money} reais.`);