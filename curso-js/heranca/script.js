class Person{
    
    // Variáveis comuns
    age = 0;

    // Construtor
    constructor(name){
        this.name = name;
    }
}

class Student extends Person {
    constructor(name, id) {
        super(name);
        this.id = id;
    }
}

let p1 = new Student("Yuri", 1);
p1.age = 27;
console.log(` Nome: ${p1.name}\n Idade: ${p1.age}\n Id: #${p1.id}`);