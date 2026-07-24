import { test, expect } from '@playwright/test';

// test.only('Test Case 1', async () => {
//     console.log('This is test case 1');
//     expect(1).toBe(1); 
// });
test('Test Case 1', async () => {
    // test.skip()
    // test.slow()
    console.log('This is test case 1');
});

test('Test Case 2', async () => {
    test.fixme()
    console.log('This is test case 2');
    expect(1).toBe(2);
});

test('Test Case 3', async () => {
    console.log('This is test case 3');
});