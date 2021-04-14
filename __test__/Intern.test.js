const Intern = require('../library/Intern.js');

test('Can create employee object', () => {
    const e = new Intern();
    expect(typeof(e)).toBe('object');
})
test('Can set name', () => {
    const name = 'James';
    const e = new Intern(name);
    expect(e.name).toBe(name);
})
test('Can set id', () => {
    const id = 56;
    const e = new Intern('bob', id);
    expect(e.id).toBe(id);
})
test('Can set email', () => {
    const email = 'j@gmail.com';
    const e = new Intern('something', 3, email);
    expect(e.email).toBe(email);
})
test('Can set school', () => {
    const school = 'gaTech';
    const e = new Intern('sometthing', 3, 'email', school);
    expect(e.school).toBe(school);
})