import { test, expect } from '@playwright/test';

test("handling frames", async ({page})=>{

// 1. Enter URL and Launch the application (https://demoqa.com/frames)
await page.goto("https://demoqa.com/frames");

// 2. Locate Main window element
const mainWindow= await page.locator('//h1[@class="text-center"]')

// Locate the frame and store in the variable
const frameWindow= await page.frameLocator("iframe#frame1")

// 3. Locate Frame Element
const frameElement= await frameWindow.locator("//h1[@id='sampleHeading']");

// 4. Copy and Print text from frame element
console.log(await frameElement.textContent())

// 5. Copy and Print text from main window element
console.log(await mainWindow.textContent())
})