
var a;
beforeEach(() => {
     a = 2;       
   
});

afterEach(() => {
    a = null;
});

test.only('math is true', () => {
   expect(a + 2).toBe(4) 
   expect(a + 3).toBe(5);
});

test('test will fail', () => {
    expect (a + 2).toBeGreaterThan(4);
});