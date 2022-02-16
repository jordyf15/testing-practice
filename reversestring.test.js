const reverseString = require('./reversestring');

test('reverse \'jordy\'', ()=>{
    expect(reverseString('jordy')).toBe('ydroj');
});

test('reverse \'the cat stole the fish\'', ()=>{
    expect(reverseString('the cat stole the fish')).toBe('hsif eht elots tac eht')
});