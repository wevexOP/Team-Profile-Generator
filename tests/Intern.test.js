const Intern = require("../lib/Intern");

test("Can create school.", () => {
    const testSchool = "Cal Berkeley";
    const employeeInstance = new Intern("Dominic", 2, "dompaulazzo@gmail.com", testSchool);
    expect(employeeInstance.school).toBe(testSchool);
});

test("Testing officeNumber will return office number.", () => {
    const testSchool = "Cal Berkeley";
    const employeeInstance = new Intern("Dominic", 2, "dompaulazzo@gmail.com", testSchool);
    expect(employeeInstance.getSchool()).toBe(testSchool);
});

test("Testing role.", () => {
    const returnValue = "Intern";
    const employeeInstance = new Intern("Dominic", 2, "dompaulazzo@gmail.com", "Cal Berkeley");
    expect(employeeInstance.getRole()).toBe(returnValue);
});