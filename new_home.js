let empPayrollList;
window.addEventListener('DOMContentLoaded', (event) => {
    empPayrollList = getEmployeePayrollDataFromStorage(); 
    document.querySelector(".emp-count").textContent = empPayrollList.length;
    createInnerHtml();
    localStorage.removeItem('editEmp');

});

    const name = document.querySelector("#name");
    const textError = document.querySelector(".text-error");
    name.addEventListener("input", function () {
        if (name.value.length == 0) {
            textError.textContent = "";
            return;
        }
        try {
            new PersonInfo().name = name.value;
            textError.textContent = "";
        } catch (e) {
            textError.textContent = e;
        }
});