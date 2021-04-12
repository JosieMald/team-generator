const { TestScheduler } = require('@jest/core');
const Employee = require('../library/Employee.js');
// const Manager = require('../library/Manager.js');

test('Can create employee object', () => {
    const e = new Employee();
    expect(typeof(e)).toBe('object');
})
test('Can set name', () => {
    const name = 'James';
    const e = new Employee(name);
    expect(e.name).toBe(name);
})
test('Can set id', () => {
    const id = 56;
    const e = new Employee('bob', id);
    expect(e.id).toBe(id);
})
test('Can set email', () => {
    const email = 'j@gmail.com';
    const e = new Employee('something', 3, email);
    expect(e.email).toBe(email);
})

// const manager = new Manager(1, 2, 3, 4);
