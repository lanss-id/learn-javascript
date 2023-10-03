class Animal {
    constructor(name, age, isMammal) {
        this.name = name;
        this.age = age;
        this.isMammal = isMammal;
    }
    mammal = () => {
        if(this.isMammal){
            return `${this.name} termasuk hewan Mamalia`
        }else {
            return `${this.name} bukan termasuk hewan Mamalia`
        }
    }

    old = () => {
        return `${this.name} sudah berusia ${this.age} tahun`
    }
}

class Rabbit extends Animal{
    eat(){
        return `${this.name} sedang makan wortel!`
    }
}

class Eagle extends Animal{
    fly(){
        return `${this.name} sedang terbang tinggi!`
    }
}

const myRabbit = new Rabbit('Ilea', 1, true)
const myEagle = new Eagle('Kara', 5, false)

console.log(myRabbit.old() + ',', myRabbit.eat() + ',', myRabbit.mammal())
console.log(myEagle.old() + ',', myEagle.fly() + ',', myEagle.mammal())