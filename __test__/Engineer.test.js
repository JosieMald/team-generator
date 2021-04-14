const Engineer = require('../library/Engineer.js');

test('Can create employee object', () => {
    const e = new Engineer();
    expect(typeof(e)).toBe('object');
})
test('Can set name', () => {
    const name = 'James';
    const e = new Engineer(name);
    expect(e.name).toBe(name);
})
test('Can set id', () => {
    const id = 56;
    const e = new Engineer('bob', id);
    expect(e.id).toBe(id);
})
test('Can set email', () => {
    const email = 'j@gmail.com';
    const e = new Engineer('something', 3, email);
    expect(e.email).toBe(email);
})
test('Can set gitHub', () => {
    const gitHub = 'site';
    const e = new Engineer('sometthing', 3, 'email', gitHub);
    expect(e.gitHub).toBe(gitHub);
})