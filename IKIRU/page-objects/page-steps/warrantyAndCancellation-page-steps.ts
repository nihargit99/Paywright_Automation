import { Page } from "@playwright/test";
import warrantyAndCancellationPage from '../page-locators/WarrantyAndCancellation-page-locators.json' with{type: 'json'};
import { WebCommons } from "../../commons/ui/web-commons.js";


export class WarrantyAndCancellationPageSteps {
    page: Page
    web: WebCommons

    constructor(page: Page) {
        this.page = page;
        this.web = new WebCommons(page);
        this.web = new WebCommons(page);
    }

     //Method to verify Warranty Text is displyed
    async verifyWarrantyText(expectedText: string){
        const actualText= await this.web.getText(warrantyAndCancellationPage.warrantyAndCancellationText);
        console.log(`actual ${actualText}`);
        console.log(`expected ${expectedText}`);
        await this.web.verifyValueContains(actualText,expectedText);
        await this.web.takeScreenshot('screenshots/verifyWarrantyText.png');

    }

    //Method to go back to Home Screen
    async goBackToHomeScreen(){
        await this.web.goBack();
    }




}