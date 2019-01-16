
var a;
beforeEach(() => {
     a = 2;       
   
});

afterEach(() => {
    a = null;
});

test.only('math is true', () => {
   expect(a + 2).toBe(4)
});

test('test will fail', () => {
    expect (a + 2).toBeGreaterThan(4);
});