document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('myForm');
  const dataTableBody = document.getElementById('data-table-body');
  const outputContainer = document.getElementById('output-container');

  form.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent the default form submission

    const formData = new FormData(form);
    dataTableBody.innerHTML = ''; // Clear any previous table rows

    for (const [key, value] of formData.entries()) {
      const row = dataTableBody.insertRow();
      const keyCell = row.insertCell();
      const valueCell = row.insertCell();

      keyCell.textContent = key;
      valueCell.textContent = value;
    }

    outputContainer.style.display = 'block'; // Make the table visible
  });
});