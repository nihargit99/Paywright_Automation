Annotaitions are the set of keywords and default methods taht will help us to run all our testcase 

1. test() => It represents an independent test method to be executed by Playwright. 

2. test.describe() => It is used to group related test cases together
grep--> when we need to run any specific testcase group, we have to use grep. e.g.: --grep="Login Feature"

3. test.only() => It is used to run only a specific test case or group of test cases.

4. test.skip() => It is used to skip a specific test case or group of test cases.

5. test.fixme() => It is used to mark a specific test case or group of test cases as "to be fixed" and will be skipped during execution.
It might be same as Skip. but here we say that its a valid testcase we just need to fix this.

6. test.slow() => It is used to mark a test case as slow, which increases the timeout by 3x (tripling the default timeout).

7. test.fail() => It is used to mark a test case as expected to fail. If the test fails, it's reported as an expected failure. 
If it passes, it's reported as an unexpected pass.

