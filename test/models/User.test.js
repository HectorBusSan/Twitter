const User = require('../../app/models/User');

describe('Test to User',()=>{
    test('Creación de Usuario',()=>{
        const user= new User(1,"HéctorBusSan","Héctor","Bio","dateCreated","lastUpdate");
        expect(user.id).toBe(1);
        expect(user.username).toBe('HéctorBusSan');
        expect(user.name).toBe('Héctor');
        expect(user.bio).toBe('Bio');
        expect(user.dateCreated).toBe('dateCreated');
        expect(user.lasUpdate).toBe('lastUpdate');
    })
})