const screenRes = 480;
const maxRows = 10;
const maxCols = 10;

// div gridBox is the container for the grid

drawBox();
setListeners();

function setListeners(){
    document.addEventListener('mouseover', function(e){
        if (e.target.tagName == "SPAN"){
            let thisBox = document.getElementById(e.target.id);
            thisBox.classList.toggle('highlight');
        }
    })
}


function drawBox(){
    drawBlankRows(maxRows);
    addBoxesToRows(maxCols,maxRows);
}

function addBoxesToRows(x,y){
    for (let thisRow = 0; thisRow < y; thisRow++){
        let selectedRow = document.getElementById(thisRow.toString());
        for (let thisBox = 0; thisBox < x; thisBox++){
            selectedRow.appendChild(createBox(10,thisBox,thisRow));
        }
    }
}

function createBox(size,x,y){
    let sizeInPx = Math.floor(screenRes/size);
    let newBox = document.createElement('span');
    let boxID = x.toString() + y.toString();
    console.log(sizeInPx);

    newBox.className = 'simpleBox';
    newBox.id = boxID;
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
    newRow.id = x.toString();
    return newRow;
}