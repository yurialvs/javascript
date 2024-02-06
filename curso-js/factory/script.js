class Person{
    
    // Variáveis estáticas
    static hands = 2;

    // Variáveis comuns
    age = 0;

    // Construtor
    constructor(name){
        this.name = name;
    }

    sayHello(){
        console.log(`Oi, eu sou ${this.name} e tenho ${Person.hands} mãos.`);
    }
}

// Altera variáveis estáticas
// Person.hands = 10;

let p1 = new Person("Yuri");
p1.sayHello();