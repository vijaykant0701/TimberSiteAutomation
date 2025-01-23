
export const locators = {
    ordersTable: "tbody",
    rows: "tbody tr",
    tableData: '.MuiTableCell-root.MuiTableCell-body.MuiTableCell-sizeSmall.css-bn1r9u',
    TimeTracking: 'svg[data-testid="KeyboardArrowDownIcon"]',
    AdminTab: 'li.MuiMenuItem-root:has-text("Admin/Approve")',
    dropdownArrow:'label[for="mui-31"]',
    addBreak:'//button[text()= "Add"]',
    estimateDropdownButton:'(//div[contains(@class, "MuiAutocomplete-inputRoot")]//button[@aria-label="Open"])[4]',
    saveAndApproveButton: '//button[text()= "Save & Approve"]',
    dateTimeIn:'input[name="timeIn"]',
    dateTimeOut: 'input[name="timeOut"]',
    txtNote:"//*[normalize-space(text())='Field Worker Notes']//following::textarea[1]",
    changeCostCode:'(//div[contains(@class, "MuiAutocomplete-inputRoot")]//button[@aria-label="Open"])[4]',
    breakStartTime:"//label[contains(text(), 'Break started')]/following::input[@name='timeIn']",
    breakOutTime:"//label[contains(text(), 'Break ended')]/following::input[@name='timeOut']",
    estimateRadioButton:'input[type="radio"][value="li"]'

}



