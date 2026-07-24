

hooks in playwright :Hooks are nothing but the preconditions and postconditions used during the execution process within the Playwright. 

There are four different types of hooks available within the Playwright. 

1. beforeAll() : This hook is used to execute the code before the execution of all the test cases.

2. afterAll() : This hook is used to execute the code after the execution of all the test cases.

3. beforeEach() : This hook is used to execute the code before the execution of each test case.

4. afterEach() : This hook is used to execute the code after the execution of each test case.


NOTE:

* If you impliment hooks inside a desctibe block, then it will effective only within the describe block. the testcase present
outside the block will not be affected.

* If you impliment hooks outside the group, it called as global hooks

* If you impliment hooks inside the group, it called as local hooks

