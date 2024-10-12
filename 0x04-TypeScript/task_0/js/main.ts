interface Student {
  firstName: string,
  lastName: string,
  age: number,
  location: string
};

let studentOne: Student = {
  firstName: 'hiba',
  lastName: 'asim',
  age: 21,
  location: 'sudan'
};

let studentTwo: Student = {
  firstName: 'mariam',
  lastName: 'mohamed',
  age: 24,
  location: 'egypt'
};

let studentsList: Student[] = [studentOne, studentTwo];


function renderTable() {
  let table = document.createElement('table');
  let headerRow = table.insertRow();
  let firstNameHeader = headerRow.insertCell();
  firstNameHeader.textContent = 'First Name';
  let locationHeader = headerRow.insertCell();
  locationHeader.textContent = 'Location';

  studentsList.forEach((student) => {
    let row = table.insertRow();
    let firstNameCell = row.insertCell();
    firstNameCell.textContent = student.firstName;
    let locationCell = row.insertCell();
    locationCell.textContent = student.location;
  });

  document.body.appendChild(table);

};

renderTable();
