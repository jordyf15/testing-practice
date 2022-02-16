const capitalize = require('./capitalize');

test('capitalize \'jordy\'', ()=>{
    expect(capitalize('jordy')).toBe('Jordy');
});

test('capitalize \'the cat stole the fish\'', ()=>{
    expect(capitalize('the cat stole the fish')).toBe('The cat stole the fish');
});