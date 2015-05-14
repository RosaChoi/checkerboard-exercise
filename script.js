function initialize() {
  var body = document.querySelector('body');
  var containerDiv = document.createElement('div');
  var scriptTag = document.querySelector('script')
  var audio = new Audio('audio_file.mp3');

  audio.play();

  body.insertBefore(containerDiv,scriptTag).setAttribute('id','container');

  drawTiles(12,12, containerDiv);
}

function createCell(containerDiv, place) {
  var cellNode = document.createElement('div');
  cellNode.style.width = "11.1%";
  cellNode.style.paddingBottom = "11.1%";
  cellNode.style.background = "black";
  cellNode.style.float = "left";

  if(place % 2 === 0){
    cellNode.style.background = "red";
  }

  containerDiv.appendChild(cellNode);
}

function createRow(numberOfCells, containerDiv) {
  var rowNode = document.createElement('div');
  rowNode.className = 'row';

  for(var i = 0; i < numberOfCells; i ++) {
      createCell(rowNode,i);
  }

  containerDiv.appendChild(rowNode);
}


function drawTiles(rows, columns, containerDiv) {
  for( var i = 0; i < rows; i ++) {
    createRow(columns, containerDiv);
  }

}


window.onload = initialize;
