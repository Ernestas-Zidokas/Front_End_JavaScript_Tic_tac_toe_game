let gameArray = [];
let turnCounter = 0;
document.querySelector('#game').addEventListener('click', event => {
  let boxId = event.target.id;

  if(boxId !== '') {
    if(turnCounter % 2 == 0) {
      gameArray.push({id: boxId, type: 'x'})
      turnCounter++;
    } else {
      gameArray.push({id: boxId, type: 'o'})
      turnCounter++;
    }
  }
  clearGame();
  createGame();
  isWin();
})

window.addEventListener('load', (event)=>{
  createGame();
});

function createGame() {
  let colCounter = 1;

  for (let i = 0; i < 3; i++) {
    let div = document.createElement('div');
    div.classList.add("row");

    for (let i = 0; i < 3; i++) {
      let col = document.createElement('div');
      col.id = `col-${colCounter}`;
      colCounter++;
      col.classList.add('column');
      div.appendChild(col);
    }

    document.querySelector('#game').appendChild(div);
  }

  if(gameArray.length != 0) {
    gameArray.forEach((value)=> {
      if(value.type === 'x') {
        document.querySelector('#' + value.id).appendChild(createX());
      } else {
        document.querySelector('#' + value.id).appendChild(createO());
      }
    })
  }
}

function isWin() {
  let xArray = [];
  let oArray = [];
  gameArray.forEach(object => {
    if(object.type == 'x') {
      xArray.push(object.id);
    } else {
      oArray.push(object.id);
    }
  })

  if(winArray(xArray)){
    alert('X Won');
  } else if (winArray(oArray)) {
    alert('O Won');
  }
}

function winArray(array) {
  let isWin = false;

  let win147 = [];
  let win258 = [];
  let win369 = [];
  let win123 = [];
  let win456 = [];
  let win789 = [];
  let win159 = [];
  let win357 = [];

  array.forEach(value => {
    if(value == 'col-1'){
      win123.push(value);
      win147.push(value);
      win159.push(value);
    } else if (value == 'col-2') {
      win123.push(value);
      win258.push(value);
    } else if (value == 'col-3') {
      win123.push(value);
      win357.push(value);
      win369.push(value);
    } else if (value == 'col-4') {
      win456.push(value);
      win147.push(value);
    } else if (value == 'col-5') {
      win159.push(value);
      win258.push(value);
      win357.push(value);
      win456.push(value);
    } else if (value == 'col-6') {
      win369.push(value);
      win456.push(value);
    } else if (value == 'col-7') {
      win147.push(value);
      win357.push(value);
      win789.push(value);
    } else if (value == 'col-8') {
      win258.push(value);
      win789.push(value);
    } else {
      win159.push(value);
      win369.push(value);
      win789.push(value);
    }
  })

  if(win147.length == 3) {
    isWin = true;
  } else if (win258.length == 3) {
    isWin = true;
  } else if (win369.length == 3) {
    isWin = true;
  } else if (win123.length == 3) {
    isWin = true;
  } else if (win456.length == 3) {
    isWin = true;
  } else if (win789.length == 3) {
    isWin = true;
  } else if (win159.length == 3) {
    isWin = true;
  } else if (win357.length == 3) {
    isWin = true;
  }

  return isWin;
}

function clearGame() {
  document.querySelector('#game').innerHTML = '';
}

function createX() {
  let span = document.createElement('span');
  span.textContent = 'X';
  span.classList.add("x");
  return span;
}

function createO() {
  let span = document.createElement('span');
  span.textContent = 'O';
  span.classList.add("o");
  return span;
}
