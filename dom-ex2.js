
function addMultTable (rows, cols) {
    const table = document.querySelector('#table')

    for (var i = 0; i < rows; i++) {
        var newRow = table.insertRow(i)  
        
        for (var y = 0; y < cols; y++) {
            var newCol = newRow.insertCell(y)
            newCol.innerHTML = i + y  /*without this line no visualization*/
        }
    }
}
addMultTable (4, 8)