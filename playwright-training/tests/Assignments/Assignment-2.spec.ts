
import { test, expect } from '@playwright/test';

test("Demo QA Form Filling", async ({ page }) => {
    // 1. Enter URL and Launch the application (https://demoqa.com/automation-practice-form)
    await page.goto("https://demoqa.com/automation-practice-form");

    // 2. Wait for Page-load
    const pageHeader = await page.locator("//h1[text()='Practice Form']")
    await expect(pageHeader).toBeVisible();

    // 3. Enter First name and Last name
    const firstName = await page.locator("input#firstName")
    const lastName = await page.locator("input#lastName")

    await firstName.fill("Nihar")
    await lastName.fill("Ranjan")

    // 4. Enter Email
    const email = await page.locator("input#userEmail")
    await email.fill("test@playwright.com")

    // 5. Select Gender (Male)
    await selectGender(page, "Male");

    // 6. Enter mobile number
    const mobile = await page.locator("input#userNumber")
    await mobile.fill("9876543210")

    // 7.Select DOB (1-Feb-1991)
    await selectDOB(page, "1", "February", "1991")

    // 8.Search and Select Computer Science and English
    const Subjects: string[]=["Computer Science", "English"];
    await selectSubject(page,Subjects)

    // 9.Select Hobbies as Sports and Reading
    const hobbies:string[]= ["Sports", "Reading"];
    await selectHobbies(page,hobbies)

    // 10.Upload photo
    const photo= await page.locator("//input[@label='Select picture']")
    const filePath= "files/photo.jpeg"
    await photo.setInputFiles(filePath)

    // 11.Submit Details
    const submitBtn= page.locator("button#submit")
    submitBtn.click();

})

async function selectHobbies(page: any, options: string[]): Promise<void> {
    for (const option of options) {
        const hobby = await page.locator(`//label[text()="${option}"]`);
        await hobby.click();
    }
}


async function selectSubject(page: any, options: string[] ): Promise<void> {

    // locate the subject input field
    const subjectFiled = await page.locator("div[class*='subjects-auto-complete__input']")
    subjectFiled.click();

    //Locate the subject input suggestion box. 
    const subject = await page.locator('//input[@id="subjectsInput"]');

    //Select a subject provided in the array.
    for (const option of options) {

        // fill the subject
        await subject.fill(option)

        // press enter to select the value
        await subject.press('Enter')
    }
}

async function selectGender(page: any, options: string): Promise<void> {

    const gender = await page.locator(`//label[text()='${options}']`)
    await gender.click();
}

async function selectDOB(page: any, date: string, month: string, year: string): Promise<void> {

    // Click on the DOB field to open the calender
    const dobField = await page.locator("input#dateOfBirthInput")
    await dobField.click();

    // Select the year
    const yearDropdown = await page.locator("select.react-datepicker__year-select")
    await yearDropdown.selectOption(year);

    // select the month
    const monthDropdown = await page.locator("select.react-datepicker__month-select")
    await monthDropdown.selectOption(month);

    // select the date
    const dateValue = await page.locator(`//div[contains(@aria-label,"${month}") and text()='${date}']`)
    dateValue.click();
}