const User = require('../../app/models/User');

describe('Test to User',()=>{
    test('Requerimiento 1) Creación de Usuario',()=>{
        const user= new User(1,"HéctorBusSan","Héctor","Bio","dateCreated","lastUpdate");
        expect(user.id).toBe(1);
        expect(user.username).toBe('HéctorBusSan');
        expect(user.name).toBe('Héctor');
        expect(user.bio).toBe('Bio');
        // expect(user.dateCreated).toBe(day);
        // expect(user.lasUpdate).toBe('lastUpdate');
    })
    test("Requeimeinto 2) Fechas en atributos de User",()=>{
        const user= new User(1,"Héctor1","Héctor","Bio")
        // checar documentación de jest
        expect(user.dateCreated).not.toBeUndefined();
        expect(user.lasUpdate).not.toBeUndefined();
    })
    test('Requerimiento 3) Agregando getters',()=>{
        const user = new User(1,"HéctorBusSan","Héctor","Bio","dateCreated","lastUpdate");
        expect(user.getUsername).toBe('HéctorBusSan')
    })
    test('Requerimeinto 4) Agregado setters',()=>{
        const user = new User(1,"HéctorBusSan","Héctor","Bio","dateCreated","lastUpdate")
        user.setUsername= 'HéctorBussan';
        expect(user.username).toBe('HéctorBussan')
    })
})