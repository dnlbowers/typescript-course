class Department {

    // private name: string;
    protected employees: string[] = [];

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

    private lastReport: string;

    get mostRecentReport() {
        if (this.lastReport){
            return this.lastReport;
        }
        throw new Error('No report found.');
    }

    set mostRecentReport(value: string) {
        if (!value) {
            throw new Error ("please pass in a valid value")
        }
        this.addReport(value)
    }

    constructor(id: string, private reports: string[]) {
        super(id, 'Accounting');
        this.lastReport = reports[0];
    }

    addEmployee(name: string) {
        if (name === 'Max') {
            return;
        }
        this.employees.push(name)
    }

    addReport(text: string) {
        this.reports.push(text);
        this.lastReport = text;
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

accounting.mostRecentReport = 'Year End Report';
// console.log(accounting.mostRecentReport);

accounting.addReport('Something went wrong...');
console.log("this one " + accounting.mostRecentReport);
console.log(accounting);
accounting.printReports()

accounting.addEmployee('Manu')
accounting.addEmployee('Max')

accounting.printEmployeeInformation();

// const accountingCopy = {name: 'COE', describe: accounting.describe };

// accountingCopy.describe();