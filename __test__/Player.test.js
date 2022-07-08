
const Player = require("../lib/Player.js");
const Potion = require('../lib/Potion.js');

jest.mock('../lib/Potion.js');
console.log(new Potion())

test('creates a player object', () =>{
    const player = new Player('Dave');

    expect(player.name).toBe('Dave');
    expect(player.health).toEqual(expect.any(Number));
    expect(player.strength).toEqual(expect.any(Number))
    expect(player.agility).toEqual(expect.any(Number));
    expect(player.inventory).toEqual(
        expect.arrayContaining([expect.any(Object)])
    );
})

test("gets players stats as an object", () => {
    const player = new Player('Dave');

    expect(player.getStats()).toHavePorperty('potions')
    expect(player.getStats()).toHavePorperty('health')
    expect(player.getStats()).toHavePorperty('strength')
    expect(player.getStats()).toHavePorperty('agility');
});
test('gets inventory from player or returns false', () => {
    const player = new Player('Dave')

    expect(player.getInventory()).toEqual(expect.any(Array))
    
    player.inventory = []

    expect(player.getInventory()).toEqual(false);
})