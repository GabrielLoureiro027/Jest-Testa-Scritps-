const calculadora = require('./calculadora')

test('A multiplicação deve da 25', () => {
    expect(calculadora('*', [5,5])).toBeNull
    expect(calculadora('*', [5,5])).toBeUndefined
    expect(calculadora('*', [5,5])).not.toBe(25)
    expect(calculadora('*', [5,5])).not.toBe(35)
    expect(calculadora('*', [5,5])).toBe(35)
    expect(calculadora('*', [5,5])).toBe(25)
});