import fs from 'fs';
import xlsx from 'xlsx';

export class excelUtils {

    static readExcelFiles(filepath: string, sheetName: string): any {

        //verify wheather the file exist or not
        if (!fs.existsSync(filepath)) {
            throw new Error(` File not found at : ${filepath}`)
        }
        //Read the workbook form excel file 
        const workbook = xlsx.readFile(filepath);

        //get the specific sheet from the workbook
        const sheet = workbook.Sheets[sheetName]

        //Verify whether the sheet exists in the workbook.
        if (!sheet) {
            throw new Error(`Sheet not found: ${sheetName}`);
        }

        return xlsx.utils.sheet_to_json(sheet);

    }
}

//as its a static method we are directly using without creating object
let data = excelUtils.readExcelFiles("./files/TestData.xlsx", "Sheet1"); 

console.log(data[1]["Email"]);