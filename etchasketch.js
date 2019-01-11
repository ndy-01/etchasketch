const screenRes = 480;

// div gridBox is the container for the grid

drawBox();

function drawBox(){
    let gridBox = document.getElementById('temp');

    drawBlankRows(5);
}

function createBox(size){
    let sizeInPx = Math.floor(screenRes/size);
    let newBox = document.createElement('div');
    console.log(sizeInPx);

    newBox.className = 'simpleBox';
    return newBox;
}

function drawBlankRows(numRows){
    let gridBox = document.getElementById('gridBox');
    for (let i = 0; i < numRows; i++){
        gridBox.appendChild(createRow(i));
    }
}

function createRow(x){
    let newRow = document.createElement('div');

    newRow.className = "row";
    newRow.innerHTML = "<p>This is a row</p>";
    return newRow;
}