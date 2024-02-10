class Person{

    // Variáveis comuns
    age = 0;

    // Construtor
    constructor(name){
        this.name = name;
    }
}

function createPerson(name, age) {
    let p = new Person(name);
    p.age = age;
    return p;
}

let p1 = createPerson("Yuri", 90);

console.log(`${p1.name} tem ${p1.age} anos.`);