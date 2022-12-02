const Engineer = require("../lib/Engineer");


test("Can create a github.", () => {
    const testGithub = "wevexOP";
    const employeeInstance = new Engineer("Dominic", 2, "dompaulazzo@gmail.com", testGithub);
    expect(employeeInstance.github).toBe(testGithub);
});

test("Testing getGithub will return github.", () => {
    const testGithub = "wevexOP";
    const employeeInstance = new Engineer("Dominic", 2, "dompaulazzo@gmail.com", testGithub);
    expect(employeeInstance.getGithub()).toBe(testGithub);
});

test("Testing role.", () => {
    const returnValue = "Engineer";
    const employeeInstance = new Engineer("Dominic", 2, "dompaulazzo@gmail.com", "Dominic");
    expect(employeeInstance.getRole()).toBe(returnValue);
});