// Generates input fields for matrix
function genemtx() {
    const rows = parseInt(document.getElementById('rows').value, 10);
    const columns = parseInt(document.getElementById('columns').value, 10);
    const matrixInputDiv = document.getElementById('mtxinp');
    document.getElementById('result').innerText = '';
    matrixInputDiv.innerHTML = ''; // Clear previous input fields
    
    if (rows > 0 && columns > 0) {
        const table = document.createElement('table');

        for (let i = 0; i < rows; i++) {
            const row = document.createElement('tr');
            for (let j = 0; j < columns; j++) {
                const cell = document.createElement('td');
                const input = document.createElement('input');
                input.type = 'number';
                input.placeholder = `${i+1},${j+1}`;
                input.id = `cell-${i}-${j}`;
                cell.appendChild(input);
                row.appendChild(cell);
            }
            table.appendChild(row);
        }
        matrixInputDiv.appendChild(table);
        document.getElementById('calc').style.display = 'block';
        toggleContainers();
    }
}

// Function to go back to the input container
function goBack() {
    document.getElementById('matrixContainer').classList.add('hidden');
    document.getElementById('inputContainer').classList.remove('hidden');
    document.getElementById('calc').style.display = 'none'; // Hide calculate button when going back
}

// Calculate rank
function calcrank() {
    const rows = parseInt(document.getElementById('rows').value, 10);
    const columns = parseInt(document.getElementById('columns').value, 10);
    const matrix = Array.from({ length: rows }, (_, i) =>
        Array.from({ length: columns }, (_, j) =>
            parseFloat(document.getElementById(`cell-${i}-${j}`).value) || 0
        )
    );
    const rank = calculateMatrixRank(matrix);
    document.getElementById('result').innerText = `Rank of the matrix: ${rank}`;
}

// Correct Rank calculation logic using Gaussian elimination
function calculateMatrixRank(matrix) {
    const rows = matrix.length;
    const columns = matrix[0].length;
    const tolerance = 1e-10; // Tolerance for treating values as zero
    let rank = Math.min(rows, columns);

    for (let row = 0; row < rank; row++) {
        // Partial pivoting: Find the row with the largest absolute value in the current column
        let maxRow = row;
        let maxVal = Math.abs(matrix[row][row]);
        for (let i = row + 1; i < rows; i++) {
            if (Math.abs(matrix[i][row]) > maxVal) {
                maxVal = Math.abs(matrix[i][row]);
                maxRow = i;
            }
        }

        // If the maximum value in the column is below tolerance, reduce the rank
        if (maxVal < tolerance) {
            rank--;
            continue;
        }

        // Swap the current row with the maxRow (partial pivoting)
        if (maxRow !== row) {
            [matrix[row], matrix[maxRow]] = [matrix[maxRow], matrix[row]];
        }

        // Eliminate all non-zero elements below the pivot
        for (let i = row + 1; i < rows; i++) {
            const factor = matrix[i][row] / matrix[row][row];
            for (let j = row; j < columns; j++) {
                matrix[i][j] -= factor * matrix[row][j];
            }
        }
    }

    return rank;
}

// Toggle between input and matrix containers
function toggleContainers() {
    document.getElementById('inputContainer').classList.toggle('hidden');
    document.getElementById('matrixContainer').classList.toggle('hidden');
}
