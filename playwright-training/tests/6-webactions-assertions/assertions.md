

Assertions : Assertions are nothing but the default methods provided by Playwright to compare expected result vs actual result.

In Playwright, there are two different types of assertions available. 

    1. Hard Assertions : If an assertion fails, the test will stop executing immediately. 
    2. Soft Assertions : If an assertion fails, the test will continue execution and fail at the end of the test.


* Syntax of Hard Assertions :
    expect(actual).toBe(expected); 

* Syntax of Soft Assertions :
    expect.soft(actual).toBe(expected); 

1. expect(element).toBeVisible() : This assertion is used to verify whether the element is visible on the page or not.
2. expect(element).toBeEnabled() : This assertion is used to verify whether the element is enabled on the page or not.
3. expect(element).toBeHidden() : This assertion is used to verify whether the element is hidden on the page or not.
4. expect(element).toBeDisabled() : This assertion is used to verify whether the element is disabled on the page or not.
5. expect(element).toBeChecked() : This assertion is used to verify whether the checkbox or radio button is checked on the page or not.
6. expect(element).toHaveText() : This assertion is used to verify whether the element has the expected text or not.
7. expect(element).toContainText() : This assertion is used to verify whether the element contains the expected text or not.
8. expect(element).toHaveAttribute("placeholder") : This assertion is used to verify whether the element has the expected attribute or not.
9. expect(element).toHaveAttribute("placeholder", "Enter your name") : This assertion is used to verify whether the element has the expected attribute with the expected value or not.
10. expect(element).toHaveValue() : This assertion is used to verify whether the textbox element has the expected value or not.
11. expect(page).toHaveTitle() : This assertion is used to verify whether the page has the expected title or not.
12. expect(page).toHaveURL() : This assertion is used to verify whether the page has the expected URL or not.
13. expect(actual).toBe() : This assertion is used to verify whether the element is equal to the expected value or not.
14. expect(actual).toInclude() : This assertion is used to verify whether the element includes the expected value or not.