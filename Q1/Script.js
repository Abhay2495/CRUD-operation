var selectedRow = null;

const onFormSubmit = () =>{
    var formData =readFormData();
    if(selectedRow == null)
    insertNewRecord(formData);
    else
    updateRecord(formData);
    restForm();
}

const readFormData = () =>{
    var formData = {};
    formData["fullName"]=document.getElementById("fullName").value;
    formData["employCode"]=document.getElementById("employCode").value;
    formData["salary"]=document.getElementById("salary").value;
    formData["city"]=document.getElementById("city").value;
    return formData;
}

const insertNewRecord = (data) => {
    var table = document.getElementById("employList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.fullName;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.employCode;
    cell3 = newRow.insertCell(2)
    cell3.innerHTML = data.salary;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.city;
    cell5 = newRow.insertCell(4);
    cell5.innerHTML = `<a onclick="onEdit(this)">Edit</a>  <a onclick="onDelete(this)"> Delete</a>`;
}

const restForm = () => {
    document.getElementById("fullName").value="";
    document.getElementById("employCode").value="";
    document.getElementById("salary").value="";
    document.getElementById("city").value="";
    selectedRow = null;
}

const onEdit = (td) => {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("fullName").value = selectedRow.cells[0].innerHTML;
    document.getElementById("employCode").value = selectedRow.cells[1].innerHTML;
    document.getElementById("salary").value = selectedRow.cells[2].innerHTML;
    document.getElementById("city").value = selectedRow.cells[3].innerHTML;
}

const updateRecord = (formData) => {
    selectedRow.cells[0].innerHTML =formData.fullName;
    selectedRow.cells[1].innerHTML =formData.employCode;
    selectedRow.cells[2].innerHTML =formData.salary;
    selectedRow.cells[3].innerHTML =formData.city;
}

const onDelete = (td) => {
    if(confirm('Are you sure to delete this record ?')){
    row = td.parentElement.parentElement;
    document.getElementById("employList").deleteRow(row.rowIndex);
    restForm();
    }
}