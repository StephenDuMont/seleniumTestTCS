'use strict'
describe.each([
    [1, 2, 3], 
  //  [1, 2, 2]
])('%i + %i = %i', 
    (a, b, c) => {
        
        beforeEach(() => {
              
        });

        afterEach(() => {
           
        });

        test.only('math is true', () => {
            expect(a + b).toBe(c)
        });

        test('test will fail', () => {
            expect (a + b).toBeGreaterThan(c);
        });
    }
)
