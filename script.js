function createTable() {
     //Write your code here
    const numRows = parseInt(prompt("Input number of rows"), 10);
    const numCols = parseInt(prompt("Input number of columns"), 10);
    
    // Get the table element
    const table = document.getElementById("myTable");
    
    // Clear any existing table content
    table.innerHTML = "";
    
    // Create rows and columns
    for (let i = 0; i < numRows; i++) {
        // Create a new row
        const row = document.createElement("tr");
        
        for (let j = 0; j < numCols; j++) {
            // Create a new cell
            const cell = document.createElement("td");
            // Set the cell's text
            cell.textContent = `Row-${i} Column-${j}`;
            // Append the cell to the row
            row.appendChild(cell);
        }
        
        // Append the row to the table
        table.appendChild(row);
    }
}
