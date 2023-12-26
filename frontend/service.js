document.getElementById('new-item-form').addEventListener('submit', function (event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const description = document.getElementById('description').value;
    const date = document.getElementById('date').value;
    const quantity = document.getElementById('quantity').value;
    const category = document.getElementById('category').value;

    const newRow = document.createElement('tr');
    newRow.innerHTML = `
        <td style="max-width: 100px; overflow: hidden; text-overflow: ellipsis;">${name}</td>
        <td style="max-width: 100px; overflow: hidden; text-overflow: ellipsis;">${description}</td>
        <td>${date}</td>
        <td>${quantity}</td>
        <td>${category}</td>
    `;

    const tableBody = document.getElementById('table-body');
    tableBody.style.width = '100%';
    tableBody.appendChild(newRow);
});
