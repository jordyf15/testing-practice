const caesarCipher = require('./caesarcipher');

test('zyxwvutsrqponmlkjihgfedcba -> cbazyxwvutsrqponmlkjihgfed', ()=>{
    expect(caesarCipher('zyxwvutsrqponmlkjihgfedcba')).toBe('cbazyxwvutsrqponmlkjihgfed');
});

test('ZYXWVUTSRQPONMLKJIHGEFEDCBA -> CBAZYXWVUTSRQPONMLKJHIHGFED',()=>{
    expect(caesarCipher('ZYXWVUTSRQPONMLKJIHGEFEDCBA')).toBe('CBAZYXWVUTSRQPONMLKJHIHGFED');
});

test('kyubey is evil -> nbxehb lv hylo', ()=>{
    expect(caesarCipher('kyubey is evil')).toBe('nbxehb lv hylo');
});