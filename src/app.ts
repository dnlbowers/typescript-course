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
        // this.id = 'd2'
        this.employees.push(employee);
    }

    printEmployeeInformation() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}
class ITDepartment extends Department {

    admins: string[];

    constructor(id: string, admins: string[]) {
        super(id, 'IT');
        this.admins = admins;

    }

}

class AccountingDepartment extends Department {
    constructor(id: string, private reports: string[]) {
        super(id, 'Accounting');

    }

    addReport(text: string) {
        this.reports.push(text);
    }

    printReports() {
        console.log(this.reports);
    }
}


const it = new ITDepartment('d1', ['David'])

it.addEmployee('Max')
it.addEmployee('Manu')

// accounting.employees[2] = 'Anna';// this is not allowed because employees is private

console.log(it)

it.describe();
it.printEmployeeInformation();

const accounting = new AccountingDepartment('d2', []);
accounting.addReport('Something went wrong...');
console.log(accounting);
accounting.printReports()


// const accountingCopy = {name: 'COE', describe: accounting.describe };

// accountingCopy.describe();