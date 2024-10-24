// write cool JS hwere!!

// standard class i simpel form.. som et js objekt

class MyClass {
    myValue = 10;

    myMethod() {
        return this.myValue;
    }
}

let myClass = new MyClass();
console.log(myClass.myValue);



// standard class med constructor  den 'rigtige' måde at lave en class på
class Person {

    constructor (name, age, gender, origin) {
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.origin = origin;
    }
}

let person = new Person('John', 30, 'mand', 'Danmark');

console.log(person.name);
console.log(person.age);




// class med methods
class Person2 {


    constructor (name, age, gender, origin) {
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.origin = origin;
    }

    greet() {
        return `Hej! Jeg hedder ${this.name} og jeg er ${this.age} gammel. Jeg kommer fra ${this.origin} og indetificerer mig som ${this.gender}.`;
    }
}

let person2 = new Person2('John', 30, 'mand', 'Danmark');

person2.origin = 'uganda';


console.log(person2.greet());




// class med private props
class Person3 {
    #origin;

    constructor (name, age, gender, origin) {
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.#origin = origin;
    }

    greet() {
        return `Hej! Jeg hedder ${this.name} og jeg er ${this.age} gammel. Jeg kommer fra ${this.#origin} og indetificerer mig som ${this.gender}.`;
    }

    // setters og getters...
    /*   get origin() {
          return this.#origin;
      }
  
      set origin(value) {
          this.#origin = value;
      } */
}

let person3 = new Person3('John', 30, 'mand', 'Danmark');

person3.origin = 'uganda';


console.log(person3.greet());

