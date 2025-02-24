
export const locators = {
    ordersTable: "tbody",
    rows: "tbody tr",
    tableData: '.MuiTableCell-root.MuiTableCell-body.MuiTableCell-sizeSmall.css-bn1r9u',
    TimeTracking: 'svg[data-testid="KeyboardArrowDownIcon"]',
    AdminTab: 'li.MuiMenuItem-root:has-text("Admin/Approve")',
    dropdownArrow:'label[for="mui-31"]',
    addBreak:'//button[text()= "Add"]',
    estimateDropdownButton:"//label[text()='Estimate']/following-sibling::div//button[@aria-label='Open']",
    saveAndApproveButton: 'button:has-text("Save & Approve")',
    dateTimeIn:'input[name="timeIn"]',
    dateTimeOut: 'input[name="timeOut"]',
    txtNote:"//label[text()='Field Worker Notes']/following-sibling::div//textarea[not(@readonly)]",
    changeCostCode:"//label[text()='Cost Code']/following-sibling::div//button[@aria-label='Open']",
    breakStartTime:"//label[contains(text(), 'Break started')]/following::input[@name='timeIn']",
    breakOutTime:"//label[contains(text(), 'Break ended')]/following::input[@name='timeOut']",
    estimateRadioButton:'input[type="radio"][value="li"]',
    timeInOutRange:'label:has-text("Time In/Out range:") + div div[role="combobox"]',
    dropdownOption:'li[role="option"]',
    projectManagerDropdown:'label:has-text("Project Manager") + div input[role="combobox"]',
    statusDropdown:'div div[role="combobox"]',
    projectDropdown:'div button[aria-label="Open"]',
    workersDropdown:'div button[aria-label="Open"]',
    costCodeInput:'[data-testid="select-cost-code"]',
    estimateInput:'[data-testid="select-estimate"]',

}



