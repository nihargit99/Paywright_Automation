import { test, expect } from '@playwright/test';

test('This is an independent test case', async () => {
    test.slow(); //This test case is expected to take longer than the default timeout of 30 seconds (3*30)
    console.log('This is an independent test case');
});

//Grouping related test cases together using test.describe()
test.describe('Login feature', () => {
    test('Login Test', async () => {
        console.log('This is test case 1 for login feature');
    });

    test('Test case 2', async () => {
        console.log('This is test case 2 for login feature');
    });
});

test.describe('Signup feature', () => {
    test('Test case 1', async () => {
        console.log('This is test case 1 for Signup feature');
    });

    test('Test case 2', async () => {
        console.log('This is test case 2 for Signup feature');
    });
});