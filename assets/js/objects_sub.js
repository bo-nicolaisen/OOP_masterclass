
// class med private props
class BasePerson {
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

class Programmer extends BasePerson {

    constructor (name, age, gender, origin, language) {
        // kald til super skal være det første i constructor
        super(name, age, gender, origin)

        this.language = language;

    }

    greet() {
        let myBaseInfo = super.greet();
        return `${myBaseInfo} Jeg kan programmere i ${this.language}`;
    }

}




let myPerson = new BasePerson('John', 30, 'mand', 'Danmark');
console.log(myPerson.greet());

let myProgrammer = new Programmer('John', 30, 'mand', 'Danmark', 'javascript');

myProgrammer.language = 'python';
console.log(myProgrammer.greet());


