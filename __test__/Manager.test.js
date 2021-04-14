const Manager = require('../library/Manager.js');

test('Can create employee object', () => {
    const e = new Manager();
    expect(typeof(e)).toBe('object');
})
test('Can set name', () => {
    const name = 'James';
    const e = new Manager(name);
    expect(e.name).toBe(name);
})
test('Can set id', () => {
    const id = 56;
    const e = new Manager('bob', id);
    expect(e.id).toBe(id);
})
test('Can set email', () => {
    const email = 'j@gmail.com';
    const e = new Manager('something', 3, email);
    expect(e.email).toBe(email);
})
test('Can set office number', () => {
    const officeNumber = 123;
    const e = new Manager('sometthing', 3, 'email', officeNumber);
    expect(e.officeNumber).toBe(officeNumber);
})