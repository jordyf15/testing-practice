const calculator= require('./calculator');

test('add 1 and 2 equals 3',()=>{
    expect(calculator.add(1,2)).toBe(3);
});

test('subtract 2 and 1 equals 1', ()=>{
    expect(calculator.subtract(2,1)).toBe(1);
});

test('divide 4 and 2 equals 2',()=>{
    expect(calculator.divide(4,2)).toBe(2);
});

test('multiply 2 and 2 equals 4', ()=>{
    expect(calculator.multiply(2,2)).toBe(4);
});