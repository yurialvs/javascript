class Person{
    
    // Variáveis comuns
    money = 10;
    steps = 0;

    // Construtor
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    // Actions
    takeAStep()
}

// Instância
let p1 = new Person("João", 20);
let p2 = new Person("Maria", 30);
let p3 = new Person("Pedro", 40);

console.log(p2.money);