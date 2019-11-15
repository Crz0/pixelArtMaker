// Select color input
var pickColor = document.getElementById('colorPicker').value;

// Select size input
var pickSize = document.getElementById('sizePicker');

// When size is submitted by the user, call makeGrid()
var designCanvas = document.getElementById('pixelCanvas');
pickSize.addEventListener('submit', function(event) {
    event.preventDefault()
    var gridHeight = document.getElementById('inputHeight').value;
    var gridWidth = document.getElementById('inputWidth').value;
    makeGrid(gridHeight, gridWidth);
});

// Create the makeGrid function
function makeGrid(gridHeight, gridWidth) {
    var gridHeight = document.getElementById('inputHeight').value;
    var gridWidth = document.getElementById('inputWidth').value;
    designCanvas.innerHTML = "";
    for (var h = 0; h < gridHeight; h++) {
        var row = document.createElement('tr');
        designCanvas.appendChild(row);
        for (var w = 0; w < gridWidth; w++) {
            var cell = document.createElement('td');
            row.appendChild(cell);
            cell.addEventListener('click', function(event) {
                var pickColor = document.getElementById('colorPicker').value;
                event.target.style.backgroundColor = pickColor;
            })
        }
    }
};
