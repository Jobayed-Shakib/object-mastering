const normalPerson ={
    firstName: 'rahim',
    lastName: 'uddin',
    salary: 12000,
    getfullName: function(){
        console.log(this.firstName, this.lastName)
    },
    chargeBill: function(amount, tax, tips){
        console.log(this);
        this.salary = this.salary - amount - tax - tips;
        return this.salary;
    }

}

const heroPerson ={
    firstName: 'anonto',
    lastName: 'jolil',
    salary: 20000,

}

const inovetivePerson ={
    firstName: 'shakib',
    lastName: 'al hasan',
    salary: 16000,

}

// const heroChargeBil = normalPerson.chargeBill.bind(heroPerson);
// heroChargeBil(2000);
// console.log(heroPerson.salary);

// normalPerson.chargeBill.call(heroPerson, 2000, 100, 10);
// console.log(heroPerson.salary);

normalPerson.chargeBill.apply(heroPerson, [2000, 100, 10]);
console.log(heroPerson.salary);

