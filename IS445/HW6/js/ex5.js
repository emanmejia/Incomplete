// js/ex5.js

const outputDiv = document.getElementById('output');
const table = document.createElement('table');
const tbody = document.createElement('tbody');

for (let i = 1; i <= 12; i++) {
    const row = document.createElement('tr');
    const cell = document.createElement('td');
    cell.textContent = i;

    if (i % 4 === 0) {
        cell.classList.add('divisible-by-4');
    }

    row.appendChild(cell);
    tbody.appendChild(row);
}

table.appendChild(tbody);
outputDiv.appendChild(table);