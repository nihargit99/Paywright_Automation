
import { test, expect } from '@playwright/test';

test('Assignment-1', async ({ page }) => {
    test.setTimeout(60000); // 60 seconds

    // 1. Launch application using url (https://parabank.parasoft.com/parabank/index.htm)
    await page.goto("https://parabank.parasoft.com/parabank/index.htm");

    // 2.verify application logo is displayed
    const logo = page.locator("//img[@class='logo']")
    await expect(logo).toBeVisible();

    // 3.Verify application caption displayed as "Experience the difference"
    const caption = page.locator("//p[text()='Experience the difference']");
    await expect(caption).toBeVisible();
    await expect(caption).toHaveText("Experience the difference");

    // 4.Enter invalid username
    await page.locator("//input[@name='username']").fill("4567bcNSKACN KXM")

    // 5.Enter empty Password
    await page.locator("//input[@name='password']").fill("")

    // 6.Click on login button
    await page.locator("//input[@value='Log In']").click()

    // 7.Verify the error message "Please enter a username and password."
    const errorTxt = await page.locator("//p[@class='error']").textContent()
    // console.log(errorTxt)
    const actualTxt: String = 'Please enter a username and password.';
    await expect(errorTxt).toBe(actualTxt);

    // 8.Click on admin page link
    await page.locator("//a[text()='Admin Page']").click();

    // 9.select the option "soap" from dba mode radio button
    await selectAccessMode(page, 'jdbc')

    // 10.Scroll to Loan Provider dropdown
    const loanProvider = page.locator("//select[@name='loanProvider']");
    await loanProvider.scrollIntoViewIfNeeded();

    // 11.Select the option web service from the dropdown
    await loanProvider.selectOption({ label: 'Web Service' });
    // await loanProvider.selectOption({ label: 'JMS' });
    // await page.pause()

    // 12.click on submit button
    await page.locator("//input[@value='Submit']").click()

    // 13.verify submission is successful by validating success message
    const submitTxt = await page.locator("//b[text()='Settings saved successfully.']").textContent()
    // console.log(submitTxt);
    const actualSubmitTxt = "Settings saved successfully.";
    expect(submitTxt).toBe(actualSubmitTxt);

    // 14.Click on services page link
    await page.locator("//div[@id='headerPanel']/child::ul/child::li//a[text()='Services']").click();

    // 15.wait for service page
    // const title = await page.title()
    // // console.log(title)
    // await expect(title).toBe("ParaBank | Services")
    await expect(page).toHaveTitle("ParaBank | Services");
    await expect(page).toHaveURL(/services\.htm/);

    // 16.Scroll down till bookstore services table
    // await page.locator("//span[text()='Bookstore services:']").scrollIntoViewIfNeeded();
    // 16. Wait for the Bookstore Services section to be visible and scroll to it
    const bookstoreServices = page.locator("//span[text()='Bookstore services:']");
    await expect(bookstoreServices).toBeVisible();
    await bookstoreServices.scrollIntoViewIfNeeded();

    // 17. Get the total number of rows in the Bookstore Services table
    const row = await page.locator("//span[text()='Bookstore services:']/following::table[1]//tr");
    const rowCount = await row.count()
    console.log(`Total rows: ${rowCount}`);

    // 18.get total columns of books store services table
    const col = await page.locator("//span[text()='Bookstore services:']/following::table[1]//tr[1]//td");
    const colCount = await col.count()
    console.log(`Total column: ${colCount}`);

    // 19.Print table data (row wise and column wise data)
    for (let r: number = 1; r <= rowCount; r++) {
        for (let c: number = 1; c <= colCount; c++) {
            const cell = await page.locator(`//span[text()="Bookstore services:"]/following-sibling::table[1]//tbody//tr[${r}]//td[${c}]`);
            const cellData = await cell.textContent();
            console.log(`Row ${r} Column ${c} data is : ${cellData}`);
        }

    }


})

async function selectAccessMode(page: any, option: String): Promise<void> {
    const dbMode = await page.locator(`//input[@value='${option}']`)
    await dbMode.click()
    console.log(`Seleted options from dba mode radio buttion is ${option} `)
}