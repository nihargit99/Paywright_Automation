import { test, expect } from '@playwright/test';

//add smiley symbols
// const smiley = '😊';

test.beforeAll(async () => {
    console.log("^^^^^^^^^^^^😊Before All: Executing😊^^^^^^^^^^^^^^^^");
});

test.afterAll(async () => {
    console.log("vvvvvvvvvv After All: Executingvvvvvvvvvv");
});

test.beforeEach(async () => {
    console.log("@@@@@@@@@Before Each: Executing@@@@@@@@@@@");
});

test.afterEach(async () => {
    console.log("##########After Each: Executing##########");
});

test.describe('Group 1 Tests', async () => {

    test('Group 1- Test 1', async ({ page }) => {
        console.log("Group 1 - Test 1: Executing");
    });

    test('Group 1- Test 2', async ({ page }) => {
        console.log("Group 1 - Test 2: Executing");
    });

    test('Group 1- Test 3', async ({ page }) => {
        console.log("Group 1 - Test 3: Executing");
    });

});


test.describe('Group 2 Tests', async () => {

    test('Group 2- Test 1', async ({ page }) => {
        console.log("Group 2 - Test 1: Executing");
    });

    test('Group 2- Test 2', async ({ page }) => {
        console.log("Group 2 - Test 2: Executing");
    });

    test('Group 2- Test 3', async ({ page }) => {
        console.log("Group 2 - Test 3: Executing");
    });

});

// command --> npx playwright test tests/3-hooks/playwright-hooks2.spec.ts