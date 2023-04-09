class Department {

    // private name: string;
    private employees: string[] = [];

    constructor(private readonly id: string, public name: string) {
        // this.name = n;
    }
    //methods
    describe(this: Department) {
        console.log(`Department (${this.id}): ${this.name}`)
    }

    addEmployee(employee: string) {
        this.employees.push(employee);
    }

    printEmployeeInformation() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}

const accounting = new Department('d1', 'Accounting')

accounting.addEmployee('Max')
accounting.addEmployee('Manu')

// accounting.employees[2] = 'Anna';// this is not allowed because employees is private

// console.log(accounting)

accounting.describe();
accounting.printEmployeeInformation();

// const accountingCopy = {name: 'COE', describe: accounting.describe };

// accountingCopy.describe();