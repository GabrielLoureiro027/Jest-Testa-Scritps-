const criarUsuario = require("./usuario");
test('Deve criar um usuario com nome e idade',()=>{

    const usuario = criarUsuario('Joao',30);

    expect(usuario).toEqual({
        nome: 'Joao',
        idade: 30
    })
})