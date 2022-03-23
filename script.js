let alpha = 0.1;

function generateGrid(gridSize) {
  const gridContainer = document.createElement('div');
  gridContainer.id = 'grid-container';

  for (let i = 0 ; i < gridSize; i++) {
    const gridRow = document.createElement('div');
    gridRow.classList.add('grid-row');
    
    for (let j = 0; j < gridSize; j++) {
      const gridSquare = document.createElement('div');
      
      gridSquare.classList.add('grid-square');
      gridSquare.addEventListener('mouseover', () => gridSquare.style.backgroundColor = 'black');

      gridRow.appendChild(gridSquare);
    }

    gridContainer.appendChild(gridRow);
  }

  document.querySelector('body').appendChild(gridContainer);
}

function deleteGrid() {
  document.querySelector('body').removeChild(document.querySelector('#grid-container'));
}

function resetGrid() {
  [...document.querySelectorAll('.grid-square')]
  .forEach(gridSquare => gridSquare.style.backgroundColor = '#fff');
}

function generateButtons() {
  const btnsContainer = document.createElement('div');
  const blackColorBtn = document.createElement('button');
  const randomColorBtn = document.createElement('button');
  const grayscaleColorBtn = document.createElement('button');
  const gridSizeBtn = document.createElement('button');
  const resetGridBtn = document.createElement('button');

  btnsContainer.id = 'btns-container';
  blackColorBtn.id = 'black-color-btn';
  randomColorBtn.id = 'random-color-btn';
  grayscaleColorBtn.id = 'grayscale-color-btn';
  gridSizeBtn.id = 'grid-size-btn';
  resetGridBtn.id = 'reset-grid-btn';

  blackColorBtn.textContent = 'Black'
  randomColorBtn.textContent = 'Random'
  grayscaleColorBtn.textContent = 'Grayscale'
  gridSizeBtn.textContent = 'Grid Size'
  resetGridBtn.textContent = 'Reset'

  blackColorBtn.addEventListener('click', () => {
    [...document.querySelectorAll('.grid-square')].forEach(gridSquare => {
      gridSquare.addEventListener('mouseover', () => gridSquare.style.backgroundColor = '#000');
    });
  });
  
  randomColorBtn.addEventListener('click', () => {
    function randomColor() {
      const generateRandomColor = () => Math.floor(Math.random() * 256);
      
      return `rgb(${generateRandomColor()}, ${generateRandomColor()}, ${generateRandomColor()})`
    }

    [...document.querySelectorAll('.grid-square')].forEach(gridSquare => {
      gridSquare.addEventListener('mouseover', () => gridSquare.style.backgroundColor = randomColor());
    });
  });
  
  grayscaleColorBtn.addEventListener('click', () => {
    [...document.querySelectorAll('.grid-square')].forEach(gridSquare => {

      gridSquare.addEventListener('mouseover', () => {
        gridSquare.style.backgroundColor = `rgba(0,0,0, ${alpha})`

        if (alpha >= .9999) alpha = 0;
        alpha += 0.1;
      });
    });
  });

  gridSizeBtn.addEventListener('click', () => {
    let newGridSize = prompt('How large is the new grid? Input a number between 1 and 100');

    while (!(Number(newGridSize) < 100 && Number(newGridSize) > 0) || Number(newGridSize) === 0 ) { 
      newGridSize = prompt('Please enter a number between 1 and 100');
    }

    deleteGrid();
    generateGrid(newGridSize, 'black');
  });

  resetGridBtn.addEventListener('click', () => resetGrid());

  [blackColorBtn, randomColorBtn, grayscaleColorBtn, gridSizeBtn, resetGridBtn].forEach(btn => {
    btnsContainer.appendChild(btn);
  });

  document.querySelector('body').appendChild(btnsContainer);
}

generateButtons();
generateGrid(16);