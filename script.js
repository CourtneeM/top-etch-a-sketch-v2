function generateGrid(gridSize, color) {
  function randomColor() {
    const generateRandomColor = () => Math.floor(Math.random() * 256);
    
    return `rgb(${generateRandomColor()}, ${generateRandomColor()}, ${generateRandomColor()})`
  }

  const gridContainer = document.createElement('div');
  gridContainer.id = 'grid-container';

  for (let i = 0 ; i < gridSize; i++) {
    const gridRow = document.createElement('div');
    gridRow.classList.add('grid-row');
    
    for (let j = 0; j < gridSize; j++) {
      const gridSquare = document.createElement('div');
      
      gridSquare.classList.add('grid-square');
      gridSquare.addEventListener('mouseover', () => {
        gridSquare.style.backgroundColor = color === 'black'  ? '#000'
                                         : color === 'random' ? randomColor()
                                         : color === 'grayscale'   ? 'gray' // add grayscale
                                         : 'black';

      });

      gridRow.appendChild(gridSquare);
    }

    gridContainer.appendChild(gridRow);
  }

  document.querySelector('body').appendChild(gridContainer);
}

function deleteGrid() {
  const gridContainer = document.querySelector('#grid-container');

  while (gridContainer.firstChild) {
    gridContainer.removeChild(gridContainer.firstChild);
  }
}

function resetGrid() {
  [...document.querySelectorAll('.grid-square')]
  .forEach(gridSquare => gridSquare.style.backgroundColor = '#fff');
}

function generateButtons() {
  const blackColorBtn = document.createElement('button');
  const randomColorBtn = document.createElement('button');
  const grayscaleColorBtn = document.createElement('button');
  const gridSizeBtn = document.createElement('button');
  const resetGridBtn = document.createElement('button');

  blackColorBtn.id = 'black-color-btn';
  randomColorBtn.id = 'random-color-btn';
  grayscaleColorBtn.id = 'grayscale-color-btn';
  gridSizeBtn.id = 'grid-size-btn';
  resetGridBtn.id = 'reset-grid-btn';
}

generateGrid(16, 'random');