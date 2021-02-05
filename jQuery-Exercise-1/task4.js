let editRowId = 0
let row = 0;

function clearInput() {
    document.getElementById('mainName').value = ""
    document.getElementById('mainLast').value = ""
}

function toggleAll(ctx) {
    let checkboxes = document.getElementsByClassName('tableCb');

    Array.from(checkboxes).forEach((box) => {
        box.checked = ctx.checked
    });
    refreshTotalItemCounter();
}

function toggleCheckbox() {
    refreshTotalItemCounter();
}

function refreshTotalItemCounter() {
    let checkboxes = document.getElementsByClassName('tableCb');
    let count = 0;

    Array.from(checkboxes).forEach((box) => {
        if (box.checked) {
            count++;
        } 
    });

    document.getElementById('Total_selected').innerHTML = `Total ${count} selected row`;
}

function deletAll() {

    document.querySelectorAll('#tableData .tableCb:checked').forEach(e => {
        e.parentNode.parentNode.remove()

    });
    refreshTotalItemCounter()
}

function addNameRow() {
    const firstName = document.getElementById('mainName').value;
    const lastName = document.getElementById('mainLast').value;

    if (firstName != "" && lastName != "") {
        row++;
        let table = document.getElementById('tableData');
        let tr = document.createElement('tr');
        tr.id = "tr" + row;

        let td = document.createElement('td');

        let cb = document.createElement('input');
        cb.type = "checkbox";
        cb.id = row;
        cb.setAttribute('class', 'tableCb');
        cb.onchange = toggleCheckbox

        let name = document.createElement('input');
        name.type = 'text';
        name.id = "firstName" + row;
        name.value = firstName
        name.setAttribute('readonly', '');

        let last_name = document.createElement('input');
        last_name.type = 'text';
        last_name.id = "lastName" + row;
        last_name.value = lastName
        last_name.setAttribute('readonly', "");

        let edit = document.createElement('button');
        edit.innerHTML = "Edit";
        edit.id = row;
        edit.onclick = edit_row;
        edit.setAttribute('class', 'btn btn-primary ')

        let delet = document.createElement('button');
        delet.id = row;
        delet.onclick = delet_row;
        delet.innerHTML = "delete";
        delet.setAttribute('class', 'btn btn-danger m-1')

        td.appendChild(cb);
        td.appendChild(name);
        td.appendChild(last_name);
        td.appendChild(edit);
        td.appendChild(delet)
        tr.appendChild(td);
        table.appendChild(tr);

        // clearInput()

    }
    else alert("hmmmmm it's empty i think")
}



function edit_row() {
    editRowId = this.id;
    document.getElementById('chang_btn').innerHTML = `<button onclick="update_btn()" class="btn btn-outline-primary">Update</button>`
    document.getElementById('mainName').value = document.getElementById(`firstName${editRowId}`).value;
    document.getElementById('mainLast').value = document.getElementById(`lastName${editRowId}`).value;
    console.log(editRowId)

}

function delet_row() {
    const tr = document.getElementById(`tr${this.id}`);
    const table = document.getElementById('tableData');
    table.removeChild(tr);
}

function update_btn() {
    let firstName = document.getElementById('mainName').value;
    let lastName = document.getElementById('mainLast').value;
    console.log(firstName)
    console.log(firstName, editRowId)
    document.getElementById(`firstName${editRowId}`).value = firstName;
    document.getElementById(`lastName${editRowId}`).value = lastName;
    console.log(editRowId)
    //  firstName = "";
    //  lastName = "";  
    document.getElementById('mainName').value = ""
    document.getElementById('mainLast').value = ""

    document.getElementById('chang_btn').innerHTML = `<button id="chang_btn" type="button p-2" class="btn btn-primary" onclick="addNameRow()">add</button>`;
    edit_id = 0;
}
