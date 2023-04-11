abstract class Department {
    static fiscalYear = 2020;
    // private name: string;
    protected employees: string[] = [];

    constructor(protected readonly id: string, public name: string) {
        // this.name = n;
    }
    //methods

    static createEmployee(name: string) {
        return { name: name };
    }

    abstract describe(this: Department): void ;

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

    describe() {
        console.log('IT Department - ID: ' + this.id)
    }

}

class AccountingDepartment extends Department {

    private lastReport: string;
    private static instance: AccountingDepartment;

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

    private constructor(id: string, private reports: string[]) {
        super(id, 'Accounting');
        this.lastReport = reports[0];
    }

    static getInstance() {
        if (AccountingDepartment.instance) {
            return this.instance;
        }
        return this.instance = new AccountingDepartment('d2', [])
    }

    describe() {
        console.log('Accounting Department - ID: ' + this.id);
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

const employee1 = Department.createEmployee('Max');

console.log(employee1, Department.fiscalYear)

const it = new ITDepartment('d1', ['David'])



it.addEmployee('Max')
it.addEmployee('Manu')

// accounting.employees[2] = 'Anna';// this is not allowed because employees is private

console.log(it)

it.describe();
it.printEmployeeInformation();

// const accounting = new AccountingDepartment('d2', []);
const accounting  = AccountingDepartment.getInstance();
const accounting2  = AccountingDepartment.getInstance();

console.log(accounting, accounting2);

accounting.mostRecentReport = 'Year End Report';
// console.log(accounting.mostRecentReport);

accounting.addReport('Something went wrong...');
console.log("this one " + accounting.mostRecentReport);
console.log(accounting);
// accounting.printReports()

accounting.addEmployee('Manu')
accounting.addEmployee('Max')

// accounting.printEmployeeInformation();

accounting.describe();

// const accountingCopy = {name: 'COE', describe: accounting.describe };

// accountingCopy.describe();