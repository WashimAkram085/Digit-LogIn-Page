let addbtn = document.querySelector("#submit");
let table = document.querySelector('table');


let nameInput = document.querySelector('#name');
let idInput = document.querySelector('#idno');
let dobInput = document.querySelector('#dob');

addbtn.addEventListener('click', () => {
    let name = nameInput.value;
    let id = idInput.value;
    let dob = dobInput.value;

    if (name.trim() == "" || /\d/.test(name)) {
        //   /e/.test(name) means name will be free of the letter e.
        alert("Please enter your name correctly.");
    }
    else if (id.trim() == "" || id.length != 3) {
        alert("Please enter your id no. correctly.");
    }
    else if (dob.trim() == "") {
        alert("Please fill the DOB.");
    }
    else {
        var row = table.insertRow(1);
        row.insertCell(0).innerHTML = name;
        row.insertCell(1).innerHTML = id;
        row.insertCell(2).innerHTML = dob;
        row.insertCell(3).innerHTML = '<button onclick="editdata(this)">✍️</button>';
        row.insertCell(4).innerHTML = '<button onclick="deletedata(this) ">❌</button>';
        clearData();
    }

});

function deletedata(button) {
    let row = button.parentNode.parentNode;
    row.parentNode.removeChild(row);
}

function editdata(button) {
    let row = button.parentNode.parentNode;

    let oldname = row.cells[0].innerHTML;
    let oldidno = row.cells[1].innerHTML;
    let olddob = row.cells[2].innerHTML;
    let editbtn = row.cells[3].innerHTML;

    let nameRow = row.cells[0];
    let idnoRow = row.cells[1];
    let dobRow = row.cells[2];
    let editRow = row.cells[3];

    let newName = document.createElement("input");
    let newId = document.createElement("input");
    let newDOB = document.createElement("input");
    let savebtn = document.createElement('button');

    newName.type = 'text';
    newId.type = 'number';
    newDOB.type = 'Date';

    newName.value = oldname;
    newId.value = oldidno;
    newDOB.value = olddob;

    nameRow.innerHTML = "";
    idnoRow.innerHTML = "";
    dobRow.innerHTML = "";
    editRow.innerHTML = "";
    savebtn.innerHTML = "Save";

    nameRow.appendChild(newName);
    idnoRow.appendChild(newId);
    dobRow.appendChild(newDOB);
    editRow.appendChild(savebtn);

    savebtn.addEventListener('click', () => {
        if (newName.value.trim() == "" || /\d/.test(newName.value)) {
            //   /e/.test(name) means name will be free of the letter e.
            alert("Please enter your name correctly.");
        }
        else if (newId.value.trim() == "" || newId.value.length != 3) {
            alert("Please enter your id no. correctly.");
        }
        else if (newDOB.value.trim() == "") {
            alert("Please fill the DOB.");
        } else {

            nameRow.innerHTML = newName.value;
            idnoRow.innerHTML = newId.value;
            dobRow.innerHTML = newDOB.value;
            editRow.innerHTML = "";
            editRow.innerHTML = '<button onclick="editdata(this)">✍️</button>';
        }
    });
}

function clearData() {
    nameInput.value = "";
    idInput.value = "";
    dobInput.value = "";
}
