fetch('data/users.csv') 
    .then(response => response.text())
    .then(text => {
        const rows = text.trim().split('\n').map(r => r.split(','));

        const table = document.getElementById('userTable');

        // Header
        let thead = '<tr>';
        rows[0].forEach(header => {
            thead += `<th>${header.replace(/"/g, '')}</th>`;
        });
        thead += '</tr>';
        table.innerHTML += thead;

        // Body
        for (let i = 1; i < rows.length; i++) {
            let rowHTML = '<tr>';
            rows[i].forEach(cell => {
                rowHTML += `<td>${cell.replace(/"/g, '')}</td>`;
            });
            rowHTML += '</tr>';
            table.innerHTML += rowHTML;
        }
    })
    .catch(err => console.error('Lỗi load CSV:', err));
